/*const userBalance = 1200;
const userBonus = 120;
const isBanned = false;
const isExist = false;
const isSelling = false;

console.log((userBalance > 1000 || userBonus > 100) && !isBanned && !isExist && !isSelling); */


const userBalance = 1200;
const userBonus = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canbuy = (userBalance > 1000 || userBonus > 100) && !isBanned && !isExist && isSelling;
console.log(`могу купить игру: ${canbuy ? 'Да ' : 'нет'}`)