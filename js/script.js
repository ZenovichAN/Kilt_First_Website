'use strict';//чтобы весь код был в строгом режиме

console.log('Hello epta');
let message;
message = 'Hello epta';
console.log(message);
message = 'fuck';
console.log(message);

const messages = "by"; //разницы между ' & " " нет. бэктики ->` `-> можно встраивать другие сущности const message = `${greeting}, ${name}!` интерполяция строк, еще можно растянуть запить на несколько строк

console.log(
    typeof message //узнаем тип переменной
)


console.log(
    typeof 1000
)

console.log(
    typeof 1000n //bigint
)

//NaN - not a number

const sum = 9;
console.log(sum); // цвет чисел в консоле синий
console.log(String(sum));  // цвет строк в консоле черный


console.log(2 + 2) //бинарные операторы
console.log(10 - 1)
console.log(5 * 10)
console.log(100 / 25)


console.log(2 ** 10) // возведение в степень
console.log(5 % 2)// остаток от деления

console.log(5 * -2 + 10 / -3) //унарные операторы пишутся слитно с числом



console.log(
    typeof Number('123')  // одно 
    //  и 
)
console.log(typeof + '123') //  тоже преобразование в числовой тип
console.log(+true);
console.log(+false);
console.log(+'123');
console.log(+' ');
console.log(+'');
console.log(+null);
console.log(+undefined);
console.log(+NaN);

console.log(5 == 5); //true
console.log(5 != 5); //false

console.log(5 == '5'); //true не строгое равенство
console.log(5 === '5'); //false строгое равенство
console.log(5 !== '5'); //true строгое неравенство

// тернарные операторы
const value = 5 < 10 ? 'less' : 'more';
console.log(value); // если 5 меньше 10 то less иначе more

//для приведения к булевому типу запись идентична
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(!!0); //false
console.log(!!1); //true

// оператор нулевого слияния
console.log(null ?? 'default value'); //default value
const a = null;
const b = 100;

const result = a ?? b; //если a не null и не undefined, то вернется a, иначе b
const result2 = a || b;//если a не null и не undefined, то вернется a, иначе b
console.log(result);
console.log(result2);


//все закоментил чтобы не мешало


//alert('Hello'); //выводит модальное окно
//confirm('Are you sure?', 18); //выводит модальное окно с кнопками ОК и Отмена, 18 поставил возраст по умолчанию. 
//prompt('Enter your name', 'John Doe'); //выводит модальное окно с полем для ввода, John Doe по умолчанию

//const userAge = prompt('Enter your age'); //выводит модальное окно с полем для ввода. если нужно провести проверку числа, нужно привести promt  к числовому типу. Поставить + перед prompt или обернуть в Number(prompt)
//console.log(`Age: ${userAge}`); //выводит в консоль то что ввел пользователь

//конструкция switch case
// const v = +prompt('Enter value from 1 to 3');
// switch (v) {
//     case 1:
//         console.log('V is 1');
//         break;
//     case 2:
//         console.log('V is 2');
//         break;
//     case 3:
//         console.log('V is 3');
//         break;
//     default:
//         console.log('Unknown v');
// }


//циклы

//while применяют редко т.к. есть риск зацикливания и сжирания памяти. 
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


// чтобы цикл выполнился хотя бы один раз, используется do while
let u = 0;
do {
    console.log(u);
    u++;
} while (u < 10)



for (let j = 0; j < 10; j++) {
    console.log(j);
}






// функции // function declaration. 1. такую функцию можно вызвать до ее обьявления в коде. 2. такую функцию можно переопределить, но при этом вызовется последняя обьявленная функция. 3. в такой функции можно обьявить неявный возврат значения 
// например function logAll(){console.log(argument)}
// logAll('hello', 555, false)
function greet() {
    console.log('Hello');
} //написанная функция не работает пока не вызвана
greet(); //вызов функции


//при обьявлении функции в скобках можно передать параметры
function greet2(name) {
    console.log(`Hello, ${name}`);
}
//при вызове функции передаем аргументы
greet2('John');
greet2('Jane');

// можно задать значение по умолчанию, для того чтобы не было ошибки если один аргумент не передан. для этого в скобках после параметра ставим = и значение по умолчанию
function greet3(name = 'friend') {
    console.log(`Hello, ${name}`);
}
// если нужно вызвать функцию без аргумента, то можно передать undefined, для этого в скобках вместо значения по умолчанию ставим undefined

greet3(undefined);


//функция с возвратом значения, явное возвращение значения чеерз return
function sum2(a, b) {
    return a + b;
}



//function expression. 1. такую функцию можно вызвать только после ее обьявления в коде. 2. такую функцию нельзя переопределить. 3. в такой функции нужно явно вернуть значение
const sum3 = function () {
    console.log('Hello');
}
sum3();


//arrow function. 1. такую функцию можно вызвать только после ее обьявления в коде. 2. такую функцию нельзя переопределить. 3. в такой функции нужно явно вернуть значение
const sum4 = () => { // в скобках можно передать параметры
    console.log('Hello');
}

//пердать параметры
const sum5 = (a, b) => {
    return a + b;
}
sum5(5, 10);
// особенность стрелочной функции: 1. неявный возврат значения, если в теле функции одна строка, то return можно не писать. 2. если параметр один, то можно не писать скобки. 3. если параметр один и функция возвращает значение, то можно не писать скобки и return
const sum6 = (a, b) => a + b;

//если передать имя  функции в console.log, то выведется ее код. увидим в консоли код функции
console.log(sum6);
// таким образом можно копировать функцию
const sum7 = sum6;
console.log(sum7(5, 10));


//стрелочная функция может принимать другую функцию в качестве аргумента. такая функция называется колбэк функцией. часто встречаестся
const sum8 = (a, b, fn) => {
    const result = a + b;
    fn(result);
}
sum8(5, 10, (value) => {
    console.log(value);
})
//функция может возвращать другую функцию
const createCounter = () => {
    let counter = 0;
    return () => {
        console.log(counter);
        counter++;
    }
}

// обьекты
const user = {
    name: 'John',
    age: 18,
    'likes js': true, //можно использовать кавычки
    greet: () => console.log('Hello'), // такие функции называются методами
    // оставляем висячую запятую, на случай если добавим новое свойство

}
//доступ к свойствам обьекта
console.log(user.name);
console.log(user['name']);
console.log(user['likes js']);// это для случаев когда ключ содержит пробелы или спецсимволы
user.greet(); //вызов метода обьекта
// если имя метода содержало бы пробелы или спецсимволы, то обращались бы через квадратные скобки
//user['greet']();


//добавление свойств в обьект
user.adminName = 'Anton';
//добавить свойство с пробелом в имени
user['is developer'] = 'Anton';

console.log(user);

//удаление свойств из обьекта
delete user.adminName;
delete user['is developer'];

//const propName = prompt(`Enter name`); //закоментил чтобы окно не всплывало
//const propValue = prompt(`your name is ${propName}`);

// const user2 = {
//     [propName]: propValue,
// }
// console.log(user2);

//проверить наличие свойства в обьекте
console.log('name' in user); //выдает true если свойство есть в обьекте
console.log('adminName' in user); //выдает false если свойства нет в обьекте


//перебор свойств обьекта
for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

// корирование обьектов
const obj1 = { name: 'Anton' }
const obj2 = Object.assign({}, obj1); // куда копировать, что копировать
// получаем полную независимую копию obj1

// можно копировать обьект с помощю оператора расширения
const obj3 = { ...obj1 }; // три точки это и есть оператор расширения
// тоже независимая копия обьекта


//ешще один пример по обьединению обьектов для закрепления

const obj4 = { name: 'Anton' };
const obj5 = { age: 41 };
const obj6 = { name: 'Anton', isDeveloper: true, }

const userObj = ({}, obj4, obj5, obj6);

//или так const user = { ...obj4, ...obj5, ...obj6};

console.log('user:', userObj);
// это обычное обьединение обьектов, но оно не точное. при вложенных обьектак в копируемых обьектах, копируется последнее вложение. в соответствии с очередью

// чтобы получить какой-то обьект или его элемент console.log(user.какой-то обьект в обьекте.элемент вложенного обьекта);
//но если мы хотим свойство которое было обциональным? тогда ошибка и невыполнение дольнейшего кода.
// можно поправить используя обциональную цепочку (?.) console.log(user.какой-то обьект в обьекте?.свойство вложенного обьекта);




/*  синтаксис деструктурирующего присваивания. */

const superUser = { myName: 'Anton', age: 41, isDeveloper: true, };
// хотим получить каждый ключ и свойство этого обьекта

// const name = superUser.name;
// const age = superUser.age;
// const isDeveloper = superUser.isDeveloper;

//можно сделать это более просто с помощю деструктурирующего присваивания

const { myName, age, isDeveloper,} = superUser; //единой инструкцией вытащим одноименные переменные

console.log('name:', myName);
console.log('age:', age);
console.log('isDeveloper:', isDeveloper);
//достать таким образом не существующее свойство обьекта не получится, в консоле будет ключ с undefined

// такой синтаксис можно сипользовать и с массивами

//например есть два обьекта
const userA = {
    name: 'Anton',
}

const admin = {
    name: 'Boss',
}

//теперь нужно, например, вытащить их в один обьект. Появится ошибка т.к. не может быть два одинаковых ключа в обьекте

const {name: nameUser} = userA; // в таком случае можно поставить двоеточие и переназвать ключи прямо в полете
const {name: nameAdmin} = admin;
// можно таким образом ставить свойство по умолчанию const {name = 'не указано'} = userA;
// можно истользовать все сразу const {name: nameUser = 'не указано'} = userA;



/** остаточные или rest параметры */
 const logUser = (user) => {
    const {name, age, city, ...otherInfo} = user; // нужно добавить ...otherInfo чтобы увидеть дополнительную информацию

    console.log(`Name: ${name} Age: ${age} City: ${city}`)
    console.log('дополнительная информация:', otherInfo); // чтобы увидеть дополнительную информацию
 }

 logUser({name: 'Anton', age: 41, city: 'Moskov', company: 'Google', jobPost: 'Frontend developer',})


 /** ключевое слово this */

 // дает доступ к ключевому контексту выполнения. если this  прологировать в консоле, то увидим ДОХРЕНА параметров
 console.log('this global',this);

 // в зависимости где вызывается this  результат будет разным. Если вызвать в глобальной области видимости или теле функции, которая находится в глобальном контексте, this будет ссылаться на одит и тот же обьект window.

 const userThis = {
    name: 'Anton',
    age: 41,
    logThis: function() {
        console.log('This в теле метода обьекта userThis:', this)
    },
 }
  
 userThis.logThis();


 // const userThis = {
//     name: 'Anton',
//     age: 41,
//     logThis: () => {                     // в стрелочных функциях this  всегда указывает на глобальный контекст
//         console.log('This в теле метода обьекта userThis:', this)
//     },
//  }
  
//  userThis.logThis();