const seneca = require('seneca');

const service = seneca({
    tag: process.env.TAG || 'root'
});

service.use('consul-registry', {
    host: process.env.CONSUL_HOST || '127.0.0.1'
});

service.use('mesh', {
    port: process.env.PORT || 31313,
    isbase: true,
    discover: {
        registry: {
            active: true
        },
        multicast: {
            active: false
        }
    }
});

service.ready(function () {
    console.log('ready, id = ', this.id)
});
