'use strict';
console.log('background');
const { ipcRenderer } = require('electron');

window.onload = function () {
    console.log('onload');
    setInterval(() => ipcRenderer.send('ping'), 1000);
    ipcRenderer.on('pong', () => console.log('pong'));
};