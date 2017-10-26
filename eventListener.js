const electron = require('electron');

//How Main Window communicate with backend
const { ipcRenderer } = electron;

window.onload = function () {
	var fileSelectForm = document.getElementById("fileSelectForm");
  	var outPut = document.getElementById('fileInformationOutput');
  	var inputFile = document.getElementById('inputFile');

  	if(fileSelectForm){
  		fileSelectForm.addEventListener('submit', (event) =>{
			const file = inputFile.files[0];
			alert("The file was submitted: " + file.size);
		});
  	}
}

/*function updateSize() {
	  var nBytes = 0,
	      oFiles = document.getElementById("uploadInput").files,
	      nFiles = oFiles.length;
	  for (var nFileId = 0; nFileId < nFiles; nFileId++) {
	    nBytes += oFiles[nFileId].size;
	  }
	  var sOutput = nBytes + " bytes";
	  // optional code for multiples approximation
	  for (var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
	    sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
	  }
	  // end of optional code
	  document.getElementById("fileNum").innerHTML = nFiles;
	  document.getElementById("fileSize").innerHTML = sOutput;
	}*/