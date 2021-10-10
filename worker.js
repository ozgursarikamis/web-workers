this.addEventListener('message', function (event) {
    console.log('event.data :>> ', event.data);
});

let i = 0;

setInterval(function () {
    this.postMessage('counter value: ' + i++);
}.bind(this), 500); // bind(this): finds the execution context of the function.