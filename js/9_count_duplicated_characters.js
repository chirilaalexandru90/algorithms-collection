// Count duplicated characters in a string

String.prototype.count = function (c) {
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == c) result++;
    }
    return result;
}

console.log(`===> Exercise 9 END`);
