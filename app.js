// const score = [5, 10, 0, 15];

// for (const [i, el] of score.entries()) {
//     console.log(`Раунд ${i + 1}: ${el}`);
// }

// score.forEach((el, i) => {
//      console.log(`Раунд ${i + 1}: ${el}`);
// })

// 2 урок

// const transactiomInUSD = [10, -7, 50, -10, 100];
// const transactiomInRu = []
// for (const transaction of transactiomInUSD) {
//     transactiomInRu.push(transaction*60);
// }

// const transactiomInRu2 = transactiomInUSD.
// map((transaction, i) => {
//     console.log(i);
//     return transaction * 60;
// });
// console.log(transactiomInUSD);
// console.log(transactiomInRu2);


// 3 урок

// const operations = [100, -20, 7, -20, 50];
// const positive = [];
// for (const operation of operations) {
//     if (operation > 0) {
//         positive.push(operation);
//     }
// }
// console.log(positive);

// const positive = operations.filter(operation => {
//     return operation > 0;
// })
// console.log(positive);


// const positiveOp = operations
//     .filter(operation => {
//     return operation > 0;
// })
//     .map(operation => operation * 60);
// console.log(positiveOp);



// const result = prices
//     .map(product => product[1] - product[0])
//     .filter(product => {
//         return product > 0;
//     })
// console.log(result);

 //Упражнение

// const prices = [[100, 200], [120, 100], [200, 350]];
// const res = prices
//     .map(item => (item[1] - item[0]))
//     .filter(item => item > 0);
// console.log(res);

// const operations = [100, -20, 7, -30, 50];
// let balance = 0;
// for (operation of operations) {
//     balance += operation;
// }
// console.log(balance);

// const finalBalance = operations.reduce((acc, operation, i) => {
//     console.log(`Итерация ${i} acc: ${acc}, operation ${operation}`);
//     return acc += operation;
// }, 0);

// console.log(finalBalance);

// const minElement = operations.reduce((acc, operation, i) => {
//     if (operation > acc) {
//         return acc;
//     } else {
//         return operation;
//     }
// }, 0);

// console.log(minElement);


// const arr = [1, 4, 4, 10];
// const result = arr.reduce((acc, el, i) => {
//     if (i != arr.length - 1) {
//         return acc += el;
//     } else {
//         return (acc + el) / arr.length
//     }
// }, 0)
// console.log(result)
// const arr = [2, 4, 4, 10];
// let elGRG;
// for (const el of arr) {
//     if (el > 5) {
//         elGRG = el;
//         break;
//     }
// }
// console.log(elGRG);

// elGRG = arr.find(el => el > 5);
// elGRGIndex = arr.findIndex(el => el > 5);

// console.log(elGRG);
// console.log(elGRGIndex);
// const arr = [2, 4, 4, 10, 20];

// function some(array, element) {
// const result = array.find(el => el === element)
// return result == undefined ? false : true;
// }
// console.log(some(arr, 2))
// console.log(arr.some(el => el === 2));

// const prices = [[2, 4], [3, 4], [10, [20, 50]]];
// const res = prices.flat(2);
// const res2 = prices.flatMap(el => el.concat([1]));
// console.log(res)
// console.log(res2)


// const users = ['Вася', 'Маша', 'Катя', 'Аня'];
// console.log(users);
// users.sort();
// console.log(users);


// const operations = [100, -300, -100, 50, 480];
// console.log(operations);


// operations.sort((a, b) => a - b);
// console.log(operations);

// const arr = [1, 2, 3, 4, 5];

// console.log(new Array(1, 2, 3, 4, 5))

// const arr2 = new Array(5);
// console.log(arr2);

// arr2.fill(2, 3, 5);
// console.log(arr2);

// const arr3 = Array.from({ length: 5}, (cur, i) => i + 1);
// console.log(arr3);


// const arr = [1, 2, 5, 12, 15, 21];   
// let res = arr.filter(el => el % 5 == 0);
// console.log(res);
