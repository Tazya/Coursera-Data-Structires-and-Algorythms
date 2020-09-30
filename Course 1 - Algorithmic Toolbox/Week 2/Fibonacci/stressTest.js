const fibonacciNaive = require('./fibonacciNaive.js');
const fibonacciFast = require ('./fibonacciFast.js');

function stressTest() {
    while (true) {
        const n = Math.floor(Math.random() * 20) + 2;
        console.log(n);

        const resultNaive = fibonacciNaive(n);
        const resultFast = fibonacciFast(n);

        if (resultNaive !== resultFast) {
            console.log("Wrong answer: " + resultNaive + " " + resultFast + "\n");
            break;
        } else {
            console.log("OK\n");
        }
    }
}

stressTest();
