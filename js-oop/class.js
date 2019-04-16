class Person {
    //생성자 함수
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum() {
        return (this.first + this.second);
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name,first,second);
        this.third = third;
    }

    sum() {
        return super.sum() + this.third;
    }

    avg() {
        return (this.first + this.second) / 2; 
    }
}

var ho = new PersonPlus('ho', 10, 20, 30);
console.log('ho' ,ho);
console.log('avg', ho.avg());
console.log('sum', ho.sum());