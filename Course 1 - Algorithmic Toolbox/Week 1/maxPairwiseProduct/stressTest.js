const maxPairwiseProductNaive = require('./maxPairwiseProductNaive.js');
const maxPairwiseProductFast = require ('./maxPairwiseProductFast.js');

function stressTest(arr) {
    while (true) {
        const n = Math.floor(Math.random() * 10) + 2;
        console.log(n);

        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * 100000));
        }
        console.log(arr.join(' '));

        const resultNaive = maxPairwiseProductNaive(arr);
        const resultFast = maxPairwiseProductFast(arr);

        if (resultNaive !== resultFast) {
            console.log("Wrong answer: " + resultNaive + " " + resultFast + "\n");
            break;
        } else {
            console.log("OK\n");
        }
    }
}

stressTest();
