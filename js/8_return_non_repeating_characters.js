//return non repeating characters.

const randomString = 'adsfabcdefghijklmnopqrstuabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopabcdefghijklmnopqrstuwvxyzabcdefghijklmnopqrstuvxyzqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzvxyzabcdefghijklmnopqrstuvxyzfasdg';

String.prototype.count = function (c) {
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == c) result++;
    }
    return result;
}

function CharacterCecker(arg) {
    let stringToEvaluate = arg.split('');
    let obj = {};
    let minIndex = stringToEvaluate.length;
    
    stringToEvaluate.forEach((letter, index) => {
        if (!obj[letter]) {
            obj[letter] = [index, true];
        } else if (obj[letter]) {
            obj[letter] = false;
        }
    })
    
    for (let key in obj) {
        if (obj[key]) {
            if (obj[key][0] < minIndex) {
                minIndex = obj[key][0];
                console.log(stringToEvaluate[minIndex], ' at index ', minIndex)
            }
        }
    }
}

CharacterCecker(randomString);