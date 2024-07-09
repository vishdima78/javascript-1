// for(let i = 1; i < 10; i++) {
// console.log(`Наш баланс ${i}$`);
// }



// const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 2') {
//         break;
//     }
//     console.log(tasks[i]);
// }


// const arr = ['!', 'JS', 'люблю', 'Я'];
// const result = [];

// for (let i = arr.length-1; i >= 0; i--) {
//     result.push(arr[i]);
    
// }
// console.log(result.join(' '));



// const tasks = [[1, 'Задача 1'], [2, 'Задача 2']]

// for (let i = 0; i < tasks.length; i++) {
//     for (let j = 0; j < tasks[i].length; j++) {
//         console.log(tasks[i][j]);
//     }
// }


// for (let i = 1; i < 5; i++) {
//     console.log(`Вывод - ${i}`);
// }

// let i = 1;
// while (i < 5) {
//     console.log(`Вывод - ${i}`);
//     i++;
// }

// const arr = [1, 4, 8, 7];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         break;
//     }
//     console.log(arr[i]);
// }

// let i = 0
// while (arr[i] <= 5 && i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 0)



// const arr = [1, 4, 8, 7];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let element of arr) {
//     console.log(element);
// }

// for (let index in arr) {
//      console.log(arr[index]);
// }




// const operation = [5, 4, 3, 2];
// let startBalance = 100;
// let avgIncome = 0;
// let avgConsumption = 0;

// function closingBalance () {
//     for (let element of operation) {
//         startBalance += element;
//         if (startBalance < 0) {
//             return console.log(false);
//         }
//     }

//     console.log(startBalance);
// }

// closingBalance();

// function avgBalance () {
//     for (let element of operation) {
//         if (element <= 0) {
        
//         avgConsumption += element;
//         } else {
//         avgIncome += element;
//         }

//     }
//     console.log(`Средний доход ${avgIncome} ; Средний расход ${avgConsumption}`)
//     }
// avgBalance ();


const operation = [5, 224, -30, -2];
const startingBalance = 100;
function getBalance(arrayOfOperations, initailBalance) {
    let balance = initailBalance;
    for (const element of arrayOfOperations) {
        balance += element;
    }
    return balance;
}
console.log(getBalance(operation, startingBalance));

function checkOperations(arrayOfOperations, initailBalance) {
     let balance = initailBalance;
     let isOk = true
    for (const element of arrayOfOperations) {
        balance += element;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

function avarageOperations (arrayOfOperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;
    for (const element of arrayOfOperations) {
        if (element > 0) {
            positiveCount++;
            positiveSum += element
        }
        if (element < 0) {
            negativeCount++;
            negativeSum += element;
        }
    }
    return[positiveSum / positiveCount, negativeSum / negativeCount];
}
console.log(avarageOperations(operation))