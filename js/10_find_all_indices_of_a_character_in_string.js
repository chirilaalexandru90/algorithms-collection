let inputString = 'asdfadsf aadf dsfd fdafadf';

function IndicesFinder(arg, el) {
    let indices = [];
    let array = arg.split('');
    this.el = el;

    let index = array.lastIndexOf(el);

    while (index != -1) {
        indices.push(index);
        index = (index > 0 ? array.lastIndexOf(el, index - 1) : -1);
    }

    console.log(indices.reverse());
    return indices;
}

IndicesFinder(inputString, 'a');

console.log('====> 10_find_all_indices_of_a_character_in_string.js END');