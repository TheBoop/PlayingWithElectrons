
//const electron = require('electron'); Same thing
const {app, BrowserWindow, ipcMain} = require('electron');
/* The app window is the made by the electron library. Browser window is the main window
Process Timeline:
	Electron start
	app process created
	app ready to start doing things
	app closes down
*/

const url = require('url');


//use win as global variables because electron and node are running grababage collection
//if the window is not global, the window might unexpectcally close
let win = null

function boot() {
	//console.log(process.type)

	//Browser window is main window so it can't be modified with renderer
	win = new BrowserWindow({
		width: 1000,
		height: 500
		//specifies an array of file types that can be displayed or selected when you want to limit the user to a specific type. 
		
	});

	/*win.loadURL(url.format({
		pathname: 'index.html',
		slashes: true
	}));*/
	//This is the same as above
	win.loadURL(`file://${__dirname}/index.html`);
	
}

function recievedFunction(event, path){
	console.log("This is the path " + path);
}

// Main and renderer
// Event based programming. Waiting for app to be ready
app.on('ready', boot);

ipcMain.on('videoPath', recievedFunction(event, path));