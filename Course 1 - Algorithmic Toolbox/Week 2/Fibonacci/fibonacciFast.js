const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fibonacciFast(parseInt(line, 10)));
    process.exit();
}

function fibonacciFast(n) {
    let fibonacciNumbers = [];
    fibonacciNumbers[0] = 0;
    fibonacciNumbers[1] = 1;

    for (let i = 2; i <= n ; i++) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    }

    return fibonacciNumbers[n];
}

module.exports = fibonacciFast;