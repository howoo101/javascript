class Person {
    //생성자 함수
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum() {
        return 'prototype : ' + (this.first + this.second);
    }
}

var ho = new Person('ho', 10, 20);
console.log('ho' ,ho);