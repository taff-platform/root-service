require('seneca')
    ({tag: process.env.TAG || 'root'})
    .use('consul-registry', {
        host: process.env.CONSUL_HOST || '127.0.0.1'
    })
    .use('mesh', {
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
    })
    .ready(function () {
        console.log('ready, id = ', this.id)
    });
