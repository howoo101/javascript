//EventEmitter 클래스를 가져옵니다.
const EventEmitter = require('events')

//EventEmitter 객체를 생성
const custom = new EventEmitter();

//이벤트를 연결
custom.on('tick', (code) => {
    console.log('이벤트를 실행합니다. ^+^')
})

//이벤트를 강제로 발생
custom.emit('tick');