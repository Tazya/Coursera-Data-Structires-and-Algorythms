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

    console.log(maxPairwiseProductNaive(numbers));
    process.exit();
}

function maxPairwiseProductNaive(numbers) {
    let product = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && product < numbers[i] * numbers[j]) {
                product = numbers[i] * numbers[j];
            }
        }
    }
    return product;
}

module.exports = maxPairwiseProductNaive;
