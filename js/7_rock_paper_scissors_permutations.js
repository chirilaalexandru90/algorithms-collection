// input: 2
// output the results when playing alone: ["rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss"]
const options = ['r', 'p', 's'];

const Rps = function (rounds) {
    const results = [];
    const Play = function (playedSoFar, rounds) {
        if (rounds === 0) {
            results.push(playedSoFar);
            return; // undefined
        }
        for (let i = 0; i < 3; i++) {
            Play(playedSoFar + options[i], rounds - 1);
        }
    }
    Play('', rounds);
    return results;
}

const playGame = Rps(2);
console.log(playGame);

// Now play against computer - random by choosing RockPaperScissors(rock), RockPaperScissors(paper), RockPaperScissors(scissor)

const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';
const possibilities = [rock, paper, scissor];
const cases = [{
    type: "rockrock",
    message: "It's equal!"
}, {
    type: "rockpaper",
    message: "You lost"
}, {
    type: "rockscissor",
    message: "You win"
}, {
    typapere: "paperrock",
    message: "You win"
}, {
    type: "paperpaper",
    message: "It's equal!"
}, {
    type: "paperscissor",
    message: "You lost"
}, {
    type: "scissorrock",
    message: "You lost"
}, {
    type: "scissorpaper",
    message: "You win"
}, {
    type: "scissorscissor",
    message: "It's equal!"
}];
const Random = function () {
    return Math.floor(Math.random() * possibilities.length);
}

const RockPaperScissors = function (arg) {
    let computer = possibilities[Random()];
    let result = arg + computer;
    // console.log(arg, computer, result);
    for (let i of cases) {
        if (result === i.type) {
            console.log(i.message);
        }
    }
}

RockPaperScissors(rock);

console.log(`=====> 7. Rock Paper Scissors END`);