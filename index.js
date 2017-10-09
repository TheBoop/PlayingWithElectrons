const {app, BrowserWindow} = require('electron');
const url = require('url');


//use win as global variables because electron and node are running grababage collection
//if the window is not global, the window might unexpectcally close
let win = null

function boot() {
	//console.log(process.type)

	//Browser window is main window so it cann't be modified with renderer
	win = new BrowserWindow({
		width: 1000,
		height: 500,
		//specifies an array of file types that can be displayed or selected when you want to limit the user to a specific type. 
		
	})

	win.loadURL(url.format({
		pathname: 'index.html',
		slashes: true
	}))
	//This is the same as above
	//win.loadURL(`file://${__dirname}/index.html`)
	
}

// Main and renderer

app.on('ready', boot);