function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;

}

// 부품화, 메모리효율성 좋음, 객체생성후 수정에 용이
Person.prototype.sum = function() {
    return 'prototype : ' + (this.first + this.second + this.third);
};

var ho = new Person('ho', 10, 20, 30);
ho.sum = function() {
    return 'this : ' + (this.first+ this.second + this.third);
}
var woo = new Person('woo', 20, 30, 40);
console.log(ho.name, ho.sum());
console.log(woo.name, woo.sum());