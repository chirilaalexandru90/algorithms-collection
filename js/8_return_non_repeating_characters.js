// Return non repeating characters.

const randomString = 'adsfabcdefghijklmnopqrstuabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopabcdefghijklmnopqrstuwvxyzabcdefghijklmnopqrstuvxyzqrstuvxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzxyzabcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyzvxyzabcdefghijklmnopqrstuvxyzfasdg';

function CharacterCecker(arg) {
    let stringToEvaluate = arg.split('');
    let obj = {};
    let minIndex = stringToEvaluate.length;
    
    stringToEvaluate.forEach((letter, index) => {
        // check if "letter" is a property of the object
        if (!obj[letter]) {
            // add tuple on "obj" index
            obj[letter] = [index, true];
        } else if (obj[letter]) {
            obj[letter] = false;
        }
    })
    
    for (let key in obj) {
        if (obj[key]) {
            if (obj[key][0] < minIndex) {
                minIndex = obj[key][0];
                console.log('Character', stringToEvaluate[minIndex], ' at index ', minIndex)
            }
        }
    }
}

CharacterCecker(randomString);

console.log(`=====> 8_. END`);