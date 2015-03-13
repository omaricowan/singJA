// Wait for Cordova to load
document.addEventListener("deviceready", onDeviceReady, false);
var db;
function onDeviceReady() {
  db = window.sqlitePlugin.openDatabase({name: "DB"});
  
}