const {app, BrowserWindow, Tray, Menu} = require('electron');

let win = null;

app.on('ready', () => {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);

    const tray = new Tray(`${__dirname}/tray16_100.png`);

    tray.on('click', () => {
        console.log('tray click');
    });

    tray.on('right-click', () => {
        console.log('tray right-click');
    });

    /*
    const trayMenu = Menu.buildFromTemplate([
        {
            label: 'Item1',
            type: 'normal'
        },
        {
            label: 'Item2',
            type: 'checkbox',
            checked: true
        },
        {
            type: 'separator'
        },
        {
            label: 'Item3',
            type: 'normal',
            click: () => {
                console.log('Item3 click');
            }
        }
    ]);

    tray.setContextMenu(trayMenu);
    */
});