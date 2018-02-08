function helo (cb) {
    async.waterfall([function (callback) {
        Registration.getByPatientId(Patient.getPatientID(), callback);
    }, function (registrations, callback) {
        if (!registrations) {
            var e = new Error('No registration information found for this patient.');
            e.name = 'IncorrectDataError';
            return callback(e);
        }
        if (registrations.length > 0) {
            if (!registrations[0].packId) {
                var e = new Error('Device pack not set for this patient.');
                e.name = 'IncorrectDataError';
                return callback(e);
            }
            DevicePack.getById(registrations[0].packId, function (err, devicePack) {
                if (err) {
                    return callback(err);
                }
                if (!devicePack) {
                    var e = new Error('Patient has invalid pack "' + registrations[0].packId + '"');
                    e.name = 'IncorrectDataError';
                    return callback(e);
                }
                callback(null, [registrations[0], devicePack]);
            });
        }
    }], function (err, result) {
        if (err) {
            if (err.name === 'IncorrectDataError') {
                _initPatientDevicePackPanels(err);
                return cb();
            }
            return cb(err);
        }
        var patientRegistration = result[0];
        var patientDevicePack = result[1];
        _initPatientDevicePackPanels(null, patientDevicePack, patientRegistration);
        cb();
    });
}
