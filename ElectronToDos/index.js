const {app, BrowserWindow, Menu, ipcMain} = require('electron')

const url = require('url');
const path = require('path');

const platform = process.platform;

let mainWindow = null, addWindow = null;

function initialBoot(){
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 500
	});

	mainWindow.loadURL(`file://${__dirname}/index.html`);

	//Quit the whole app if main window is closed
	mainWindow.on('closed',function(){
		app.quit();
	});

	//Build Menu fron template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	//Insert Menu
	Menu.setApplicationMenu(mainMenu);
};

// Catch item
ipcMain.on("item:add", function(e, item){
	console.log(item);
	mainWindow.webContents.send('item:add', item);
	addWindow.close();
});

//Create Add Window from tutorial
function createAddWindow(){
	addWindow = new BrowserWindow({
		width: 300,
		height: 200,
		title:'Add Shopping List Item'
	});

	addWindow.loadURL(`file://${__dirname}/addWindow.html`);

	//Garbage collection
	addWindow.on('close',function(){
		addWindow = null;
	});
}

const mainMenuTemplate = [
	{
		label:'File',
		submenu:[
			{
				label: 'Add Item',
				click(){
					createAddWindow();
				}
			},
			{
				label: 'Clear Items'
			},
			{
				label: 'Quit',
				accelerator: platform == 'darwin' ? 'Command+Q' :
				'Ctrl+Q',
				click(){
					app.quit();
				}
			}
		]
	}
];

app.on('ready', initialBoot);

// If mac, add empty object to menu
if(platform == 'darwin'){
	mainMenuTemplate.unshift({});
}

// Add developer tools if not in prod
if(process.env.NODE_ENV !== 'production'){
	mainMenuTemplate.push({
		label: 'Dev Tools',
		submenu:[
			{
				label: 'DevTool',
				accelerator: platform == 'darwin' ? 'Command+I' : 
				'Ctrl+I',
				click(item, focusedWindow){
					focusedWindow.toggleDevTools();
				}
			},
			{
				role: 'reload'
			}
		]
	});
}



