/**
 * Created by tommyacton on 11/07/2017.
 */

alert("Hello i have loaded");

//Global variables
var myPublicInfo = "Tom";
alert(myPublicInfo);


function nonPublicInfo() {
    var bobby = "Hi I'm bobby and i a local scope";
    alert(bobby);
}

nonPublicInfo();
