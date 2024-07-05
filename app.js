// const bmwX3 = 100000;
// const fordFocusPrice = 10000;
// const budget = 20000;

// let massage = budget > bmwX3 
// ? 'BMW' 
// :budget > fordFocusPrice ? 'FordFocus' : 'велосипед';

// const str = 1 > 0 ? 'больше нуля' : 'не больше нуля';
// console.log(str) 

// console.log(`Я хочу купить ${massage}`) 


// Решение через тернарные операторы

/*let x = prompt('Сколько будет 7 + или - 15?');
let answer = Number(x) == 22 ? 'Успех' : Number(x) == -8 ? 'Успех' : x == 'Я не робот' ? 'Успех' : 'Вы робот';
console.log(answer);*/


const x = prompt('Сколько будет 7 + или - 15?');
switch(true) {
    case Number(x) === 22:
    case Number(x) === -5:
        console.log('Успех');
    break;
    case x === 'Я не робот':
    console.log('Успех');
    break;
    default:
    console.log('Вы робот');
}