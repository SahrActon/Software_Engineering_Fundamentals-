window.onload = function() {

    var audio = document.getElementById("audio");

    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 0.05;
    var barHeight;
    var x = 0;

    //Rend the the frame
    function renderFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);


        for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            var r = barHeight + (100 * (i / bufferLength));
            var g = 190 * (i / bufferLength);
            var b = 240;

            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
            x += barWidth + 16;
        }
    }

    audio.play();
    renderFrame();

}
/** Christmas bars end */