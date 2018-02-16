console.log("Here");
$(document).ready(function () {
    console.log("ready!");
    searchMVN("2d3c16092663da9041b171b8d3627cbafa8f0cb1");
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


var processJSON = function(jsonData){
    var jarInfo = jsonData.response.docs;
    console.log("jar info: ");
    console.log(jarInfo.g);
    
};
var searchMVN = function(hashValue){
   var url = "https://search.maven.org/solrsearch/select?q=1:%22"+hashValue+"%22&rows=20&wt=json";
   console.log(url);
   $.ajax({
    dataType: "jsonp",
    url: "https://crossorigin.me/https://search.maven.org/solrsearch/select",
    data: {
        q:"1:%22"+hashValue+"%22",
        rows:"20",
        wt:"json"
    },
    success: function(data, status){
        console.log(data);
        processJSON(data);
    }
  });

};

$("#muhJars").change(pullfiles);



