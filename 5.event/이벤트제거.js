//변수를 선언
const onUncaughtException = (error) => {
    //출력
    console.log('예외 발생했군 ^_^ ');

    //이벤트를 제거합니다.
    //process.removeListener('uncaughtException',onUncaughtException);
};

//process 객체에 uncaughtException 이벤트를 연결
process.on('uncaughtException',onUncaughtException);

//2초 간격으로 예외를 발생시킵니다.

const test = () => {
    setTimeout(test,2000);
    error.error.error();
};
setTimeout(test,2000);