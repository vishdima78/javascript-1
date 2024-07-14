// const userName = 'Вася aka flkjdikfjyhsdfksdhfksdjh fsdhjfskj Пупкин';
// const countRes = userName.slice(0,userName.indexOf(' '));
// const countRes2 = userName.slice(userName.lastIndexOf(' '),userName.length);

// console.log(countRes + countRes2)

// function isPhoneNumber(num) {
//     num = num.trim();
//     num = num.replace('+7', '8');
//     if (!num.startsWith('8')) {
//         return false;
//     }
//     num = num.replaceAll('(', '');
//     num = num.replaceAll(')', '');
//     num = num.replaceAll('-', '');
//     num = num.replaceAll(' ', '');
//     if (!num.length != 11) {
//         return false;
//     }
//     let onlyNumber = true;
//     for (const char of num) {
//         if (isNaN(Number(char))) {
//             onlyNumber = false;
//             break;
//         }
//     }
//     return onlyNumber;
// }
// console.log(isPhoneNumber())

// const card = '2342834503245458353';
// ;
// console.log(card.slice(-4).padStart(16, '*'))

