
process.once('uncaughtException',(error) => {
    console.log('예외가 발생 ^_^');
})

const test = () => {
    setTimeout(test,2000);
    error.error.error();
};
setTimeout(test,2000)