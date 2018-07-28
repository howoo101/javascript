
//EventEmitter 클래스를 가져옵니다.
const EventEmitter = require('events')

//EventEmitter 객체를 생성
const custom = new EventEmitter();

setInterval(() => {
    custom.emit('tick');
},400);

//모듈화
module.exports = custom