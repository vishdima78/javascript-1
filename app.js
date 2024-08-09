'use strict'
// const users = [
//     {name: 'Вася', age: 30},
//     {name: 'Катя', age: 18},
//     {name: 'Аня', age: 40},
//     {name: 'Петя', age: 25},
// ];

// console.log(users.sort((a,b) =>  a.age - b.age))


// const users = [
//     {
//         name: 'Вася',
//         surname: 'Пупкин',
//         age: 30,
//         skills: ['Разработка', 'DevOps']
//     },
//     {
//          name: 'Катя',
//         surname: 'Белова',
//         age: 18,
//         skills: ['Дизайн']
//     }
// ];

// const res = users.map((user) => {
//     return {
//         fullName: `${user.name} ${user.surname}`,
//         skillNum: user.skills.length
//     };
// })

// console.log(res)



// const wallet = {
//     balance: 0,
//     operations: [],
//     plus: function(sum,name) {
//       this.balance += sum;
//        this.operations.push({
//         reason: name,
//         sum: sum
//        }) 
//        return true;
//     },
//     minusBalance: function(sum,name) {
//      if (this.balance < sum) {
//         return false;
//      }
//      this.balance -= sum
//         this.operations.push({
//         reason: name,
//         sum: -sum
//        }) 
//        return true;
//     },
//     count: function() {
//         return this.operations.length
//     }
// };
// console.log(wallet.plus(1000,'ЗП'));
// console.log(wallet.count());
// console.log(wallet.minusBalance(1000,'Машина'));
// console.log(wallet.count());




// Сделать объект склад с методами 
// добавления на склад, поиска по складу и расчёт веса


// const warehouse = {
//     goods: [],
//     findGoodById: function(id) {
//         return this.goods.find(g => g.id == id);
//     },
//     addGood: function(good) {
//         const existedGood = this.findGoodById(good.id);
//         if (existedGood) {
//             console.log('fdf')
//             return;
//         }
//         this.goods.push(good);
//     },
//     getWeightKg: function() {
//         return this.goods.reduce((acc, el) => 
//             acc += el.weight?.kg ? el.weight.kg : 0
//         ,0)
//     }
// };

// const car = {
//     id: 1,
//     weight: {
//         kg: 1000
//     },
//     brand: 'Ford'
// }

// const chair = {
//     id: 2,
//     weight: {
//         kg: 2
//     },
// }

// const paper = {
//     id: 3,
//     color: 'red'
// };
// warehouse.addGood(car)
// warehouse.addGood(chair)
// console.log(warehouse.goods)
// warehouse.addGood(car)
// const findedItem = warehouse.findGoodById(1)
// console.log(findedItem)

// const w = warehouse.getWeightKg();
// console.log(w)


// const warehouse = {
//     goods: [],
//     findGoodById: function(id) {
//         return this.goods.find(el => el.id == id)
//     },
//     addGood: function(guitar) {
//         const test = this.findGoodById(guitar.id)
//         if (test) {
//             return console.log(`Товар ${guitar.name} уже есть`);
//         } 
//         console.log('Товар добавлен')
//         this.goods.push(guitar)
//     },
//     delGood: function(guitar) {
//         return this.goods.splice(guitar, 1) && console.log(`Товар ${guitar.name} удален`)
//     },
//     getpriceDollar: function() {
//       return this.goods.reduce((acc, el) => {
//          return acc += el.price?.dollars ? el.price.dollars : 0;
//         },0)
//     }
// };

// const one = {
//     name: 'lesPaul',
//     id: 1,
//     price: {
//         dollars: 500
//     },
//     weight: {
//         kg: 2.5
//     }
// }

// const two = {
//     name: 'Strat',
//     id: 2,
//     price: {
//         dollars: 250
//     },
//     weight: {
//         kg: 3.5
//     }
// }

// const three = {
//     name: 'Telecaster',
//     id: 3,
//     price: {
//         Rub: 45999
//     },
//     weight: {
//         kg: 2
//     }
// };
// const test = []
// warehouse.addGood(one);
// warehouse.addGood(two);
// warehouse.addGood(three);

// console.log(warehouse.findGoodById(2))
// console.log(warehouse.goods)
// console.log(warehouse.getpriceDollar())

// const company = {
//     name: 'ООО Агро',
//     employees: [
//         {
//             name: 'Света',
//             name: 'Вася',
//             getNameCompany: function() {
//             return this.name;
//         }

//         }
//     ],
//     ceo: {
//         name: 'Вася',
//         getNameCompany: function() {
//         return this.name;
//     }
//     },
//     getNameCompany: function() {
//         return this.name;
//     }
// }
// console.log(company.getNameCompany());
// console.log(company.ceo.getNameCompany());
// console.log(company.employees.map(el => el.getNameCompany()));
// const user = {
//     login: 'vishdima78',
//     password: 'hsdjfhs3fhi3hfi43',
    
// }

// function removePassword(reset) {
//     if (reset) {
//         this.password = undefined;
//     } else {
//         this.password = '1';
//     }
// }


// const resetUser = removePassword.bind(user, true);
// resetUser();
// console.log(user)

// const userInfo = {
//     balance: 0,
//     operations: 0,
//     increse(sum) {
//         this.balance += sum;
//         this.operations++;
//     }
// }

// function remake() {
//     return function() {return userInfo};
// }

// const oneTest = remake();
// oneTest();
// oneTest().increse(100);
// console.log(oneTest());



// const userAccData = {
//     login: '',
//     password: '',
//     addData(login, password) {
//         this.login += login;
//         this.password += password;
//         console.log(`Ваш логин ${this.login} | Ваш пароль ${this.password}`)
//     }
// };
// function whatt() {
//     const whattcopy = {
//     login: '',
//     password: '',
//     addData(login, password) {
//         this.login += login;
//         this.password += password;
//     }
// };

//     return function() {
//         return whattcopy;
//     }
    
// }

// const user1 = whatt();
// user1().addData('dima', '123');

// const user2 = whatt();
// user2().addData('liza', 'dfsd');

// console.log(user1())
// console.log(user2())

