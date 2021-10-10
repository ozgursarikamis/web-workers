this.addEventListener('message', function (event) {
    console.log('event :>> ', event);
    this.close();
}.bind(this));