let message = null;

this.addEventListener('message', function (event) {
    console.log('event.data :>> ', event.data);

    // reference sharing:
    message = event.data
});

setTimeout(() => {
    console.log('Message now: ', message);
}, 1000);

/*
Workers APIs
    Standard (JSON, setTimeout...)
    WebSockets
    XHR and Fetch
    Promise
    IndexDB
    Location (partial)
    Navigator (partial)
*/