var ho = {
    name: 'ho',
    first: 10,
    second: 20,
    sum: function() {
        return this.first + this.second;
    }
};

console.log("ho.sum()", ho.sum());