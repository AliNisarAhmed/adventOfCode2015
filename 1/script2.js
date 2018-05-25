const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('timer');
    if(err) {
        console.log(err);
    } else {
        let text = data.toString();
        let answer = [...text].reduce((a, x, i) => {
            if(a === -1) {
                console.log("index: ", i);
            }
            return x === '(' ? a + 1: a - 1;
        }, 0);
        console.timeEnd('timer');
        console.log(answer);
    }
})
