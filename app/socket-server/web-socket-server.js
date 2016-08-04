var wsUri = 'ws://echo.websocket.org/';
var output;
function init() {
  output = document.getElementById('output');
  testWebSocket();
}
function onOpen(evt) {
  writeToScreen('CONNECTED');
  doSend('WebSocket rocks');
}
function onClose(evt) {
  writeToScreen('DISCONNECTED');
}
function onMessage(evt) {
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
  websocket.close();
}
function onError(evt) {
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}
function doSend(message) {
  writeToScreen('SENT: ' + message);
  websocket.send(message);
}
function writeToScreen(message) {
  var pre = document.createElement('p');
  pre.style.wordWrap = 'break-word';
  pre.innerHTML = message;
  if (document.getElementById('output')) { //check if id is available
    (output || document.getElementById('output')).appendChild(pre);
  }
}
function testWebSocket() {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function (evt) {
    onOpen(evt)
  };
  websocket.onclose = function (evt) {
    onClose(evt)
  };
  websocket.onmessage = function (evt) {
    onMessage(evt)
  };
  websocket.onerror = function (evt) {
    onError(evt)
  };
}
window.addEventListener('load', init, false);
