var superObj = {superVal: 'super'};
// var subObj = {subVal: 'sub'};
// subObj.__proto__ = superObj;

var subObj = Object.create(superObj);
subObj.subVal = 'sub';
console.log('subObj.subVal=>',subObj.subVal);
console.log('subObj.superVal=>',subObj.superVal);

subObj.superVal = 'sub';
//상속받은 객체의 속성값을 바꾸었다고 상속 객체의 속성값이 바뀌는 것은 아님
console.log('subObj.superVal=>',superObj.superVal);


var kim = {
    name: 'kim',
    first: 10, second: 20,
    sum : function() {
        return this.first + this.second;
    }
};

// var lee = {
//     name: 'lee',
//     first: 10, second: 10,
//     avg: function() {
//         return (this.first + this.second) / 2;
//     }
// };
// lee.__proto__ = kim;

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
    return (this.first + this.second) / 2;
}

console.log('lee.sum() =>',lee.sum());
console.log('lee.avg() =>',lee.avg());