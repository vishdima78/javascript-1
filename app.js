// const role1 = 'admin';
// const role2 = 'user';
// const role3 = 'superuser';

// const roles = ['admin', 'user', 'superuser'];
// const userInfo = ['Аня', 25];

// console.log(roles);
// console.log(roles[0]);

// console.log(roles.length);
// console.log(roles[roles.length - 1]);

// console.log(roles.at(-1));

// const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0];
// console.log(usersAge);


// const usersName = new Array('вася', 'петя', 'катя');
// console.log(usersName);


// function square(el) {
//     return el * el;
// }

// console.log(square([1, 2, 3]));

// const users = ['Аня', 'Вика', 'Катя'];
// users[2] = 'Кристина';
// console.log(users);
// console.log(users);

// const arrLenght = users.push('Никита');
// console.log(users);

// console.log(arrLenght);
// users.unshift('Вася');
// console.log(users);


// const el = users.pop();
// console.log(el);
// console.log(users);

// const el2 = users.shift();
// console.log(el2);
// console.log(users);

// const roles = ['user', 'admin', 'manager'];
// const elIndex = roles.indexOf('admin');
// console.log (elIndex);
// const elIndex2 = roles.indexOf('superuser');
// console.log (elIndex2);

// if (roles.indexOf('admin') >=0) {
//     console.log('Доступ есть');
// }


// if(roles.includes('admin')) {
//         console.log('Доступ есть');
// }

// const roles = ['user', 'admin', 'manager', 'superuser'];

// const res = roles.slice(2);
// console.log(res);

// const res2 = roles.slice(0, 2);
// console.log(res2);

// const res3 = roles.slice(-1);
// console.log(res3);

// const res4 = roles.slice(1, -1);
// console.log(res4);


// const res5 = roles.splice(2);
// console.log(res5);
// console.log(roles);

// const res6 = roles.splice(2, 1);
// console.log(res6);
// console.log(roles);

// const res7 = roles.splice(-1);
// console.log(res7);

// const res8 = roles.reverse();
// console.log(res8);


// const newRoles = ['sysadmin', 'developer'];
// const res9 = roles.concat(newRoles);
// console.log(res9);


// const roles = ['user', 'admin', 'manager', 'superuser'];

// const url = 'auth/user/login';
// const res = url.split('/');
// console.log(res);

// console.log(roles.join('-'));


// const tasks = ['Задача 1'];
// function addTask(add) {
//     tasks.push(add);
// }

// function delTaskName(del) {
//     const index = tasks.indexOf(del);
//     if(index === -1) {
//         return;
//     }
//     return tasks.splice(index, 1);
// }

// function setPriorityName(setname) {
//     const result = delTaskName(tasks);
//     if (!result) {
//         return;
//     }
//     tasks.unshift(result[0]);
    
// }

// addTask('Задача 2');
// addTask('Задача 3');
// console.log(tasks);

// delTaskName('Задача 4');
// console.log(tasks);

// setPriorityName('Задача 4');
// console.log(tasks);

// const tasks = ['Задача 1'];

//     function addTask(task) {
//     tasks.push(task);
// }
// function delTaskName(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     return tasks.splice(index, 1);
// }

// function setPriorityName(task) {
//     const res = delTaskName(task);
//     if (!res) {
//         return;
//     }
//     tasks.unshift(res[0]);
// }

// addTask('Задача 2');
// addTask('Задача 3');
// console.log(tasks);

// delTaskName('Задача 1');
// console.log(tasks);

// setPriorityName('Задача 3');
// console.log(tasks);

// const userData = ['Антон', 18, 'Москва'];


// function getdata() {
//     return ['Антон', 18, 'Москва'];
// }
// const userName = getdata()[0];
// const age = getdata()[1];
// const city = getdata()[2];

// const [userName, age, city] = getdata();

// console.log(userName, age, city);

// const data = [1, 2, 3, 4, 5, 6];
// const [one, two, ...others] = data;
// console.log(one, two, others);

// const url = 'https://purpleschool.ru/course/javaspript';

// function getUrlParts(url) {
//     const [protocol, _, host, ...path] = url.split('/');
//     if (protocol === 'https:' || protocol === 'http:') {
//         if (!host.includes('.')) {
//             return;
//         }
//         console.log(protocol, _, host, path);
//         console.log(`Протокол ${protocol.split(':')[0]}`);
//         console.log(`Доменное имя ${host}`);
//         console.log(`Путь внутри сайта : /${path.join('/')}`);
//     }
 
// }

// getUrlParts(url);

const url = 'https://www.youtube.com/shorts/J02C8qLw9so'

function getUrl(url) {
    const [protocol, _, adress, ...others] = url.split('/');
    if (protocol === 'https:' || protocol === 'http:') {
        if (!adress.includes('.')) {
            return;
        }
        console.log(protocol, _, adress,others);
        console.log(`Протокол ${protocol.split(':')[0]}`);
        console.log(`Адреc сайта ${adress}`);
        console.log(`Остальная часть сайта: /${others.join('/')}`);
    }
    
}
getUrl(url);