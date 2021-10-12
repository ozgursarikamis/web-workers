
var worker = new Worker('worker.js');

worker.addEventListener('message', function (e) {
    document.getElementById('result').textContent = e.data;
}, false);

function sayHI() {
    worker.postMessage({ 'cmd': 'start', 'msg': 'Hi' });
}

function stop() {
    // worker.terminate() from this script would also stop the worker.
    worker.postMessage({ 'cmd': 'stop', 'msg': 'Bye' });
}

function unknownCmd() {
    worker.postMessage({ 'cmd': 'foobard', 'msg': '???' });
}