'use strict';

// アプリケーションをコントロールするモジュール
var app = require('app');
// ウィンドウを作成するモジュール
var BrowserWindow = require('browser-window');
// 起動URL
var currentURL = 'file://' + __dirname + '/index.html';
// クラッジュレポーター
require('crash-reporter').start();
// メインウィンドウはGCされないようにグローバル宣言
var mainWindow = null;
// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
// Electronの初期化完了後に実行
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl(currentURL);
  mainWindow.toggleDevTools();
  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});