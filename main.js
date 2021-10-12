let worker;

function testWorker() {
    if (typeof(Worker)) {
        worker = new Worker('./worker.js');
    }

    worker.onmessage = function (event) {
        document.getElementById('workerOutput').innerHTML = event.data;
    }
}

function terminateWorker() {
    worker.terminate();
    worker = undefined;
}

function testMainThread() {
    for (let i = 0; i < 2000000; i++) {
        document.getElementById('mainThreadOutput').innerHTML = "Main Thread: " + i;
    }
}