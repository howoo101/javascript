const tick = require('./tick');

tick.on('tick', () => {
    console.log('test')
})