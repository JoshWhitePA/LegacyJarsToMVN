console.log("Here");
$(document).ready(function () {
    console.log("ready!");
});



var pullfiles = function () {
    // love the query selector
    var fileInput = document.querySelector("#muhJars");
    var files = fileInput.files;
    // cache files.length 
    var fl = files.length;
    var i = 0;

    
    while (i < fl) {
        // localize file var in the loop
        var file = files[i];
        var reader = new FileReader();
        reader.onload = function (event) {
          var file_sha1 = sha1(event.target.result)
          console.log("!  :   "+file_sha1);
        };
        reader.readAsArrayBuffer(file);

        i++;
    }
};
var readThatFile = function (myFile) {
    var reader = new FileReader();
    var fileByteArray = [];
    reader.readAsArrayBuffer(myFile);
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) {
            var arrayBuffer = evt.target.result,
                array = new Uint8Array(arrayBuffer);
            for (var i = 0; i < array.length; i++) {
                fileByteArray.push(array[i]);
            }
        }
    }
};
$("#muhJars").change(pullfiles);



