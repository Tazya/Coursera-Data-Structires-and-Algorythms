const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const numbers = line.toString().split(' ').map(Number);

    console.log(maxPairwiseProductFast(numbers));
    process.exit();
}

function maxPairwiseProductFast(numbers) {
    let firstMaxIndex = -1;
    let secondMaxIndex = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (firstMaxIndex === -1 || numbers[i] > numbers[firstMaxIndex]) {
            firstMaxIndex = i;
        }
    }

    for (let j = 0; j < numbers.length; j++) {
        if (j !== firstMaxIndex && ((secondMaxIndex === -1) || (numbers[j] > numbers[secondMaxIndex]))) {
            secondMaxIndex = j;
        }
    }

    const product = numbers[firstMaxIndex] * numbers[secondMaxIndex];
    return product;
}

module.exports = maxPairwiseProductFast;