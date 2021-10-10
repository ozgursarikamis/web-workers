let ports = [], i = 0;

this.addEventListener('connect', function (e) {
    let port = e.ports[0];
    ports.push(port);
    port.start();

    setInterval(() => {
        i++;
        ports.forEach(port => {
            port.postMessage('Sending Message ' + i);
        });
    }, 500);
});