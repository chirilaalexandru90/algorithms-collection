// take a string and trasform it into an english title
console.log(`===> Phrase to uppercase exercise START`);
const title = 'Take a string and trasform it into an english title';

const TitleTransform = function (arg) {
    return arg.toLowerCase().split(' ').map(e => e.charAt().toUpperCase() + e.substring(1)).join(' ');
}

console.log(TitleTransform(title));

console.log(`===> Phrase to uppercase exercise STOP`);
