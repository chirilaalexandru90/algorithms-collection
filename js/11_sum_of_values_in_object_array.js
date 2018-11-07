// Considering the API response "res" is an Array of Objects with the same keys

let res = [{
    x: 0,
    y: 0,
    z: 0
}, {
    x: 1,
    y: 1,
    z: 1
}, {
    x: 2,
    y: 2,
    z: 2
}, {
    x: 3,
    y: 3,
    z: 3
}];

function SumOfValues(initialValue, obj, key) {
    this.initialValue = initialValue;
    this.key = key;

    let arrayOfKeys = Object.keys(obj[0]);
    
    if (arrayOfKeys.includes(key)) {
        let sum = obj.reduce((accum, current) => {
            return accum + current[key];
        }, initialValue);

        console.log(`The sum of values for key "${key}" is: `, sum);
    }
}

SumOfValues(1, res, 'y');

console.log('===> Exercise 11 END');