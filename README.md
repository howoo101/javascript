# 모던웹을 위한 node.js

## CHAPTER 5 이벤트

### 무엇을 배우나요?
- 이벤트 사용하는 방법
- 이벤트 만드는 방법

### 꼭 알아둘 개념
|개념|설명|
|--|--|
|on()|이벤트를 연결하는 메서드입니다.|
|emit()|이벤트를 실행할 때 사용합니다.|
|EventEmitter 객체| 이벤트를 연결할 수 있는 모든 객체의 어머니|

## 5.1 이벤트 연결
[process 객체의 이벤트](https://nodejs.org/dist/latest-v10.x/docs/api/process.html#process_process_events)<br>

#### 이벤트 연결 메서드 
<pre><code> on(이벤트이름,이벤트핸들러) : on메서드를 통해 이벤트에 핸들러를 연결하면
그 이벤트가 발생 했을때 연결한 핸들러가 실행 된다. </code>
</pre>
[이벤트연결 예제](./5.event/이벤트연결.js)

## 5.2 이벤트 연결 개수 제한
<pre><code> 기본적으로 노드js는 이벤트에 연결 하는 리스너를 10개로 제한 해놓았음 
setMaxListeners(제한) : 갯수 제한을 걸어서 사용 가능</code>
</pre>
[연결제한 예제](./5.event/연결제한.js)

## 5.3 이벤트 제거
<pre><code>removeListener(eventName, handler) : 특정 이벤트의 리스너를 제거
removeAllListeners(eventName) : 모든 이벤트 리스너를 제거 </code>
</pre>
[이벤트제거 예제](./5.event/이벤트제거.js) <br>
[이벤트를 한번만 연결하고 싶은 경우](./5.event/once.js)

## 5.4 이벤트 강제 발생
<pre><code>emit(eventName[,arg1][...]) : emit 메서드는 이벤트를 강제로 발생시킴
하지만 이벤트 리스너만 실행됨.</code>
</pre>
[이벤트 강제 발생 예제](./5.event/이벤트강제발생.js)

## 5.5 이벤트 생성
``` 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속을 받는다. 
EventEmitter 객체는 events 모듈안에 있음. process객체에도 있음.
```
[이벤트 생성 예제](./5.event/이벤트생성.js)

