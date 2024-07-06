


// function logName (name, surname) {
//     console.log(`Моё имя ${name} ${surname}`);
    
// }
// logName('Дима', 'Вишняков');

// function countDepositSum(depositInUSD, month, rate) {
// return depositInUSD * (1 + rate / 12) ** month;
// }

// const example1 = countDepositSum(1000, 24, 0.12);
// console.log(example1);
// console.log(countDepositSum(1000, 48, 0.10));

// function powerOfTwo(num) {
//     return num * num;
// }
// console.log(powerOfTwo(5));

// const poft = function (num) {
//     return num * num;
// }
// console.log(poft(6));

// function powerOfTwo(num) {
//     console.log(num);
//     return num * num;
// }
// console.log(powerOfTwo(5));


// const poft = num => {
//     console.log(num);
//    return num * num;
// }
// console.log(poft(6));

// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(2, 3));

// function toPower(num = 2, power = 2) {
//     return num  ** power; 
// }
// console.log(toPower(2, 3));
// console.log(toPower(2));


// function canAccessWebsite(age) {
//     if (age < 18) {
//         return 'Нет';
//     } 
//     return 'Да';
// }
// console.log(canAccessWebsite(18));

// const canAccessWebsite2 = age => age < 18 ? 'Нет' : 'Да';

// console.log(canAccessWebsite2(18));


// const Kg_In_USD = 7;
// const Km_In_USD = 5;

// function calculateW(present) {
//     return present * Kg_In_USD;
// }

// function calculateKm(distance) {
//     return distance * Km_In_USD;
// }

// function getExchagePrice (present1, present2, distance) {
// const price1 =  calculateW(present1);
// const price2 =  calculateW (present2);
// const distancePrice = calculateKm (distance);
// return price1 + price2 + distancePrice;
// }
// console.log(getExchagePrice(1, 2, 10));

// function computeCredit(age, hasJob = false) {
// switch(true) {
//     case age > 24 && hasJob:
//         return 500;
//     case age > 24:
//         return 100;
//     default :
//     return 0;
//     }
// }

// function canBuy(productPrice, age,  money, hasJob = false) {
//     const creditMoney = computeCredit(age, hasJob);
//     return productPrice <= money + creditMoney;
// }

// console.log(canBuy(2000, 25, 1500, true));
// function credit(age, job = false) {
//     switch(true) {
//         case age > 24 && job:
//             return 500;
//         case age > 24:
//         return 100;
//         default:
//             return 0;
//     }
// }
// function can_buy_macbok(macPrice, age, money, job = false) {
//     const credit1 = credit(age, job);
//     return macPrice <= credit1 + money;
// }

// console.log(can_buy_macbok(2000, 25, 1500));