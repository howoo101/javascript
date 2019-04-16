var memberArray = ['a','b','c'];
console.log("memberArray[0]", memberArray[0]);

var memberObject = {
    manager: 'ho',
    developer: 'ho1',
    designer: 'ho3'
};
memberObject.designer = 'howoo';
console.log('memberObject.developer', memberObject.developer); //이표현법이더좋아
console.log('memberObject[designer]', memberObject['designer']);
delete memberObject.manager;
console.log('after delete manager',memberObject.manager);
