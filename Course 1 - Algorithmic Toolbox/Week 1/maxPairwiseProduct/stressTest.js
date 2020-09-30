const maxPairwiseProductNaive = require('./maxPairwiseProductNaive.js');
const maxPairwiseProductFast = require ('./maxPairwiseProductFast.js');

function stressTest() {
    while (true) {
        const n = Math.floor(Math.random() * 10) + 2;
        console.log(n);

        let numbers = [];
        for (let i = 0; i < n; i++) {
            numbers.push(Math.floor(Math.random() * 100000));
        }
        console.log(numbers.join(' '));

        const resultNaive = maxPairwiseProductNaive(numbers);
        const resultFast = maxPairwiseProductFast(numbers);

        if (resultNaive !== resultFast) {
            console.log("Wrong answer: " + resultNaive + " " + resultFast + "\n");
            break;
        } else {
            console.log("OK\n");
        }
    }
}

stressTest();
