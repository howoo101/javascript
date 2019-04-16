var memberArray = ['a','b','c'];
var i =0;
console.group('array loop');
while(i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

var memberObject = {
    manager: 'ho',
    developer: 'ho1',
    designer: 'ho3'
};
console.group('object loop');
for(var name in memberObject) {
    console.log(name, memberObject[name]);
};
console.group('object loop');

