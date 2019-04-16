var ho = {
    name: 'ho',
    first: 10,
    second: 20,
    sum: function() {
        return this.first + this.second;
    }
};
// 같은형태의 객체를 수정했을때 모든 객체를 다바꿔주어야 해서 불편함
// 같은형태의 객체를 만들어주는 공장(생성자)을 만들어주어요 수정때 매우 좋음

var woo = {
    name: 'woo',
    first: 10,
    second: 40,
    sum: function() {
        return this.first + this.second;
    }
};

console.log("ho.sum()", ho.sum());
console.log("wo.sum()", woo.sum());


function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;

    this.sum = function() {
        return this.first + this.second + this.third;
    }
}

var ho = new Person('ho', 10, 20, 30);
var woo = new Person('woo', 20, 30, 40);
console.log(ho.name, ho.sum());
console.log(woo.name, woo.sum());