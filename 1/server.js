const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('timer');
    if(err) {
        console.log(err);
    } else {
        let text = data.toString();
        let answer = [...text].reduce((a, x) => {
            return x === '(' ? a + 1: a - 1;
        }, 0);
        console.log(answer);
    }
    console.timeEnd('timer');
})

// let str = '(()))';

// let answer = [...str].reduce( (a, x) => {
//     if(x === '(') {
//         return a + 1;
//     } else {
//         return a - 1;
//     }
// }, 0);

// console.log(answer);