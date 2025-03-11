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



alert('Hello'); //выводит модальное окно
confirm('Are you sure?', 18); //выводит модальное окно с кнопками ОК и Отмена, 18 поставил возраст по умолчанию. 
//prompt('Enter your name', 'John Doe'); //выводит модальное окно с полем для ввода, John Doe по умолчанию

const userAge = prompt('Enter your age'); //выводит модальное окно с полем для ввода. если нужно провести проверку числа, нужно привести promt  к числовому типу. Поставить + перед prompt или обернуть в Number(prompt)
console.log(`Age: ${userAge}`); //выводит в консоль то что ввел пользователь

//конструкция switch case
const v = +prompt('Enter value from 1 to 3');
switch (v) {
    case 1:
        console.log('V is 1');
        break;
    case 2:
        console.log('V is 2');
        break;
    case 3:
        console.log('V is 3');
        break;
    default:
        console.log('Unknown v');
}


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
 