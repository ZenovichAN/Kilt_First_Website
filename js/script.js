 'use strict';//чтобы весь код был в строгом режиме

// console.log('Hello epta');
// let message;
// message = 'Hello epta';
// console.log(message);
// message = 'fuck';
// console.log(message);

// const messages = "by"; //разницы между ' & " " нет. бэктики ->` `-> можно встраивать другие сущности const message = `${greeting}, ${name}!` интерполяция строк, еще можно растянуть запить на несколько строк

// console.log(
//     typeof message //узнаем тип переменной
// )


// console.log(
//     typeof 1000
// )

// console.log(
//     typeof 1000n //bigint
// )

// //NaN - not a number

// const sum = 9;
// console.log(sum); // цвет чисел в консоле синий
// console.log(String(sum));  // цвет строк в консоле черный


// console.log(2 + 2) //бинарные операторы
// console.log(10 - 1)
// console.log(5 * 10)
// console.log(100 / 25)


// console.log(2 ** 10) // возведение в степень
// console.log(5 % 2)// остаток от деления

// console.log(5 * -2 + 10 / -3) //унарные операторы пишутся слитно с числом



// console.log(
//     typeof Number('123')  // одно 
//     //  и 
// )
// console.log(typeof + '123') //  тоже преобразование в числовой тип
// console.log(+true);
// console.log(+false);
// console.log(+'123');
// console.log(+' ');
// console.log(+'');
// console.log(+null);
// console.log(+undefined);
// console.log(+NaN);

// console.log(5 == 5); //true
// console.log(5 != 5); //false

// console.log(5 == '5'); //true не строгое равенство
// console.log(5 === '5'); //false строгое равенство
// console.log(5 !== '5'); //true строгое неравенство

// // тернарные операторы
// const value = 5 < 10 ? 'less' : 'more';
// console.log(value); // если 5 меньше 10 то less иначе more

// //для приведения к булевому типу запись идентична
// console.log(Boolean(0)); //false
// console.log(Boolean(1)); //true
// console.log(!!0); //false
// console.log(!!1); //true

// // оператор нулевого слияния
// console.log(null ?? 'default value'); //default value
// const a = null;
// const b = 100;

// const result = a ?? b; //если a не null и не undefined, то вернется a, иначе b
// const result2 = a || b;//если a не null и не undefined, то вернется a, иначе b
// console.log(result);
// console.log(result2);


// //все закоментил чтобы не мешало


// //alert('Hello'); //выводит модальное окно
// //confirm('Are you sure?', 18); //выводит модальное окно с кнопками ОК и Отмена, 18 поставил возраст по умолчанию. 
// //prompt('Enter your name', 'John Doe'); //выводит модальное окно с полем для ввода, John Doe по умолчанию

// //const userAge = prompt('Enter your age'); //выводит модальное окно с полем для ввода. если нужно провести проверку числа, нужно привести promt  к числовому типу. Поставить + перед prompt или обернуть в Number(prompt)
// //console.log(`Age: ${userAge}`); //выводит в консоль то что ввел пользователь

// //конструкция switch case
// // const v = +prompt('Enter value from 1 to 3');
// // switch (v) {
// //     case 1:
// //         console.log('V is 1');
// //         break;
// //     case 2:
// //         console.log('V is 2');
// //         break;
// //     case 3:
// //         console.log('V is 3');
// //         break;
// //     default:
// //         console.log('Unknown v');
// // }


// //циклы

// //while применяют редко т.к. есть риск зацикливания и сжирания памяти. 
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// // чтобы цикл выполнился хотя бы один раз, используется do while
// let u = 0;
// do {
//     console.log(u);
//     u++;
// } while (u < 10)



// for (let j = 0; j < 10; j++) {
//     console.log(j);
// }






// // функции // function declaration. 1. такую функцию можно вызвать до ее обьявления в коде. 2. такую функцию можно переопределить, но при этом вызовется последняя обьявленная функция. 3. в такой функции можно обьявить неявный возврат значения 
// // например function logAll(){console.log(argument)}
// // logAll('hello', 555, false)
// function greet() {
//     console.log('Hello');
// } //написанная функция не работает пока не вызвана
// greet(); //вызов функции


// //при обьявлении функции в скобках можно передать параметры
// function greet2(name) {
//     console.log(`Hello, ${name}`);
// }
// //при вызове функции передаем аргументы
// greet2('John');
// greet2('Jane');

// // можно задать значение по умолчанию, для того чтобы не было ошибки если один аргумент не передан. для этого в скобках после параметра ставим = и значение по умолчанию
// function greet3(name = 'friend') {
//     console.log(`Hello, ${name}`);
// }
// // если нужно вызвать функцию без аргумента, то можно передать undefined, для этого в скобках вместо значения по умолчанию ставим undefined

// greet3(undefined);


// //функция с возвратом значения, явное возвращение значения чеерз return
// function sum2(a, b) {
//     return a + b;
// }



// //function expression. 1. такую функцию можно вызвать только после ее обьявления в коде. 2. такую функцию нельзя переопределить. 3. в такой функции нужно явно вернуть значение
// const sum3 = function () {
//     console.log('Hello');
// }
// sum3();


// //arrow function. 1. такую функцию можно вызвать только после ее обьявления в коде. 2. такую функцию нельзя переопределить. 3. в такой функции нужно явно вернуть значение
// const sum4 = () => { // в скобках можно передать параметры
//     console.log('Hello');
// }

// //пердать параметры
// const sum5 = (a, b) => {
//     return a + b;
// }
// sum5(5, 10);
// // особенность стрелочной функции: 1. неявный возврат значения, если в теле функции одна строка, то return можно не писать. 2. если параметр один, то можно не писать скобки. 3. если параметр один и функция возвращает значение, то можно не писать скобки и return
// const sum6 = (a, b) => a + b;

// //если передать имя  функции в console.log, то выведется ее код. увидим в консоли код функции
// console.log(sum6);
// // таким образом можно копировать функцию
// const sum7 = sum6;
// console.log(sum7(5, 10));


// //стрелочная функция может принимать другую функцию в качестве аргумента. такая функция называется колбэк функцией. часто встречаестся
// const sum8 = (a, b, fn) => {
//     const result = a + b;
//     fn(result);
// }
// sum8(5, 10, (value) => {
//     console.log(value);
// })
// //функция может возвращать другую функцию
// const createCounter = () => {
//     let counter = 0;
//     return () => {
//         console.log(counter);
//         counter++;
//     }
// }

// // обьекты
// const user = {
//     name: 'John',
//     age: 18,
//     'likes js': true, //можно использовать кавычки
//     greet: () => console.log('Hello'), // такие функции называются методами
//     // оставляем висячую запятую, на случай если добавим новое свойство

// }
// //доступ к свойствам обьекта
// console.log(user.name);
// console.log(user['name']);
// console.log(user['likes js']);// это для случаев когда ключ содержит пробелы или спецсимволы
// user.greet(); //вызов метода обьекта
// // если имя метода содержало бы пробелы или спецсимволы, то обращались бы через квадратные скобки
// //user['greet']();


// //добавление свойств в обьект
// user.adminName = 'Anton';
// //добавить свойство с пробелом в имени
// user['is developer'] = 'Anton';

// console.log(user);

// //удаление свойств из обьекта
// delete user.adminName;
// delete user['is developer'];

// //const propName = prompt(`Enter name`); //закоментил чтобы окно не всплывало
// //const propValue = prompt(`your name is ${propName}`);

// // const user2 = {
// //     [propName]: propValue,
// // }
// // console.log(user2);

// //проверить наличие свойства в обьекте
// console.log('name' in user); //выдает true если свойство есть в обьекте
// console.log('adminName' in user); //выдает false если свойства нет в обьекте


// //перебор свойств обьекта
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// // корирование обьектов
// const obj1 = { name: 'Anton' }
// const obj2 = Object.assign({}, obj1); // куда копировать, что копировать
// // получаем полную независимую копию obj1

// // можно копировать обьект с помощю оператора расширения
// const obj3 = { ...obj1 }; // три точки это и есть оператор расширения
// // тоже независимая копия обьекта


// //ешще один пример по обьединению обьектов для закрепления

// const obj4 = { name: 'Anton' };
// const obj5 = { age: 41 };
// const obj6 = { name: 'Anton', isDeveloper: true, }

// const userObj = ({}, obj4, obj5, obj6);

// //или так const user = { ...obj4, ...obj5, ...obj6};

// console.log('user:', userObj);
// // это обычное обьединение обьектов, но оно не точное. при вложенных обьектак в копируемых обьектах, копируется последнее вложение. в соответствии с очередью

// // чтобы получить какой-то обьект или его элемент console.log(user.какой-то обьект в обьекте.элемент вложенного обьекта);
// //но если мы хотим свойство которое было обциональным? тогда ошибка и невыполнение дольнейшего кода.
// // можно поправить используя обциональную цепочку (?.) console.log(user.какой-то обьект в обьекте?.свойство вложенного обьекта);




// /*  синтаксис деструктурирующего присваивания. */

// const superUser = { myName: 'Anton', age: 41, isDeveloper: true, };
// // хотим получить каждый ключ и свойство этого обьекта

// // const name = superUser.name;
// // const age = superUser.age;
// // const isDeveloper = superUser.isDeveloper;

// //можно сделать это более просто с помощю деструктурирующего присваивания

// const { myName, age, isDeveloper,} = superUser; //единой инструкцией вытащим одноименные переменные

// console.log('name:', myName);
// console.log('age:', age);
// console.log('isDeveloper:', isDeveloper);
// //достать таким образом не существующее свойство обьекта не получится, в консоле будет ключ с undefined

// // такой синтаксис можно сипользовать и с массивами

// //например есть два обьекта
// const userA = {
//     name: 'Anton',
// }

// const admin = {
//     name: 'Boss',
// }

// //теперь нужно, например, вытащить их в один обьект. Появится ошибка т.к. не может быть два одинаковых ключа в обьекте

// const {name: nameUser} = userA; // в таком случае можно поставить двоеточие и переназвать ключи прямо в полете
// const {name: nameAdmin} = admin;
// // можно таким образом ставить свойство по умолчанию const {name = 'не указано'} = userA;
// // можно истользовать все сразу const {name: nameUser = 'не указано'} = userA;



// /** остаточные или rest параметры */
//  const logUser = (user) => {
//     const {name, age, city, ...otherInfo} = user; // нужно добавить ...otherInfo чтобы увидеть дополнительную информацию

//     console.log(`Name: ${name} Age: ${age} City: ${city}`)
//     console.log('дополнительная информация:', otherInfo); // чтобы увидеть дополнительную информацию
//  }

//  logUser({name: 'Anton', age: 41, city: 'Moskov', company: 'Google', jobPost: 'Frontend developer',})
 




//  /** КЛЮЧЕКОЕ СЛОВО this */





//  // дает доступ к ключевому контексту выполнения. если this  прологировать в консоле, то увидим ДОХРЕНА параметров
//  console.log('this global',this);

//  // в зависимости где вызывается this  результат будет разным. Если вызвать в глобальной области видимости или теле функции, которая находится в глобальном контексте, this будет ссылаться на одит и тот же обьект window.

//  const userThis = {
//     name: 'Anton',
//     age: 41,
//     logThis: function() {
//         console.log('This в теле метода обьекта userThis:', this)
//     },
//  }
  
//  userThis.logThis();


//  // const userThis = {
// //     name: 'Anton',
// //     age: 41,
// //     logThis: () => {                     // в стрелочных функциях this  всегда указывает на глобальный контекст
// //         console.log('This в теле метода обьекта userThis:', this)
// //     },
// //  }
  
// //  userThis.logThis();

// // чтобы this ссылался на сам обьект нужно истользовать function declaration, как в первом примере. можно использовать сокр.способ
// // const userThis = {
// //     name: 'Anton',
// //     age: 41,
// //     logThis() {
// //         console.log('This в теле метода обьекта userThis:', this)
// //     },
// //  }
  
// //  userThis.logThis();

// //toFixed() округляет количество знаков после запятой

// const price = 99.99;
// const roundedPrice = price.toFixed(0);

// console.log(`Округленная цена:`, roundedPrice);
   

// // не обязательно писать дополнительные переменные для обращения к числу, можно сразу к чилу. для этого перед указанием метода нужно указать два символа точки console.log( 5..toFixed(2)), но это работает только с целыми числами

// console.log( 5..toFixed(2));

// // если есть необходимость сразу обратиться к дробному, то число обернуть в скобки console.log( (5.011).toFixed(2))
// console.log( (5.011).toFixed(2))

// // toPrecision()--- позволяет округлить число до определенного знака, но учет длины ведет с самой первой цифры

// const num = 100.055;

// console.log(num.toPrecision(4));

// // toString()--- приводит число к формату строки 
// console.log(typeof num);//number
// console.log(typeof roundedPrice); //string

// // если в .toString(2) передать 2, то результат будет в двоичной системе
 


// // для получения рандомного числа Math.random(). оно всегда будет дробным 

// // для получения обсолютного числа (модуля) используется Math.abs(). фактически отбросится минус у отрицательного числа. оно будет целым

// // для возведения в степень Math.pow(число которое возвести , степень ) тоже самое console.log(число которое возвести ** степень);

// //Math.sqrt() и Math.cbrt() квадратный и кубический корень из числа

// // Math.min() и Math.max() вычисляют и возвращают минимальное и максимальное число. если в min или max передать массив  то будет NaN. поможет оператор ...    . const nums =[1,2,3,4,5,6]; console.log( Math.min(...nums));

// // Math.round() округляет до ближайшего целого
// //Math.floor() округляет вниз до ближайшего целого
// // Math.ceil() округляет вверх до ближайшего целого
// // Math.trunc() округляет до целого в меньшую сторону без учета знака числа. положительное вниз, отрицательное вверх

// // чтобы распарсить строку в числовой тип parseInt(переменная с содержанием строки). пригодится когда в значении не только цифры
// // например const numberAsString = '100px';  console.log(parseInt(numberAsString)); работает с целыми числами. Для дробных parseFloat()


// /**ПОЛЕЗНЫЕ МЕТОДЫ И СВОЙСТВА ИЗ СТРОК */

// // .length -  узнать длину строки в формате числа
// // получить букву строки по индексу  const name = 'Anton'; console.log(name[0]);
// // or console.log(name[name.length - 1]); 


// // console.log(name.at(0)); console.log(name.at(1));  console.log(name.at(-1));  тоже получаем символ строки
// // это все помогает получить символ строки, но не изменить его


// //.toLowerCase() - изменить регистр строки
// // toUpperCase()


// //избавление от пробелов в начале и в конце
// //.trin() - убирает лишние пробелы с двух сторон
// //.trinStart()  and .trinEnd()  -  убрать пробелы в начале или в конце

// //.indexOf('~искомое сочетание в предложении~') - позволяет получить индекс первого символа подстроки в строке. 
// // .incLudes('~искомый символ или сочетание~') - вернет true or false

// //.startsWith('Ant')
// //.endWith(('on;)) - указывает начинается или заканчивается строка на указанное значение в ковычках


// //можно добавить номер позиции символа строки с которого начинается поиск вхождения
// //.indexOf('~искомое сочетание в предложении~', 4)
// // .incLudes('~искомый символ или сочетание~', 3) 
// //.startsWith('Ant', 2)
// //.endWith('on', 1)

// //.substring(0,0) - метод обрезки строки. указываем начальный и конечный символ строки который вырезаем. (получим что вырезали) можно менять номера символов, js сам может сориетироваться и вырезать наиболее подходяще по логике. не обрабатывает отрицательные индексы
// // .slice(0,0) - тоже самое но этот метод не позволяет менять индексы местами. можно передать отрицательный индекс


// //.repeat(3) - повторяет строку указанное количество раз и возвращает результатом новую строку


// //.replace('что меняем', 'на что меняем') метод замены подстроки в строке. заменить первую обнаруженную подстроку на ту что укажем, дальше игнор.  .replace(/что меняем/g, 'на что меняем') c флагом g будет искать все вхождения
// //.replace(/что меняем/gi 'на что меняем') c флагом i без учета регистра будет искать
// //.replaceAll('что меняем', 'на что меняем') тоже самое, но заменит все вхождения. Оба метода могут принимать не только строки, но и целые регулярные выражения
// /** например нужно заменить все цифры на решетки :  const str = '+7 (999) 999-99-99'; consol.log(str.replace(/\d/g, '#'))   */


// // .split(', ') - метод позволяет разбить строку на массив по указанному разделителю, который передается в аргументе
// /** например: const str = 'Hello, world'; console.log(str.split(', ')); --- получим str = ['Hello', 'world'];
//  * если ничего не указать console.log(str.split('')); --- получим  str = ['H', 'e', 'l', 'l', 'o'...] знаки препинания и символ пробела тоже как элемент массива
//  */

// /** все эти методы не мутируют исходную строку, не меняют исходную сущность */


// /** МАССИВЫ */

// // массив это коллекция и элементы хранятся в нем в порядке котором их поместили туда
//  const arr = ['hello', 100, true, {name: 'Anton'}, ()=> console.log('hi'), ['true1', 'true2', 'true3'],];

//  console.log(arr[3].name);
//  console.log(arr[3]['name']); // одно и тоже
//  arr[4]();
//  console.log(arr[5][1]);


//  // многомерный массив

//  const matrix = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
//  ];
//  console.log(matrix[2][2]);


//  // можно поменять элемент и также добавить
//  matrix[2][2] = 'hey epta';
//  console.log(matrix);

//  // arr.length - можно ужнать не только длину, но и обратиться к последнему элементу
//  console.log(matrix.length-1);// индекс всегда будет меньше длины массива на 1. Начало отсчета для массива с 0, длина через запрос 3
//  //есть более удобный способ узнать длину массива, получить доступ к элементу массива с конца .at(-1);

//  console.log(arr.at(-1));


//  matrix.push('wow');// добавить элемент в конец массива
// console.log(matrix);

// matrix.unshift('anton');// добавить элемент в начало массива. ДОБАВЛЯТЬ ИЛИ УДАЛЯТЬ В НАЧАЛЕ МАССИВА ЭТО ДОРОГО ДЛЯ ПРОИЗВОДИТЕЛЬНОСТИ
// console.log(matrix);


// matrix.pop();// удалить элемент с конца массива
// matrix.shift(); //удаляет элемент с начала массива

// const arr2 = ['hello', 100, true];
// console.log(arr2.toString());// преобразование массива в строку
// // но чаще применяют метод .join() в аргументах принимает строку которая будет являться разделителем элементов при приобразовании из в строку
// console.log(arr2.join(',   '));

// //поведение при копировании у массива как у обьекта
// //чтобы скопировать массив можно прогнать его через цикл

// const arr3 = ['a', 's', 'd'];
// const arr4 = [];

// for (let i = 0; i < arr3.length; i++){
//     arr4.push(arr3[i])
// };

// console.log(arr3);
// console.log(arr4);

// //делать копирование в ручную не здорово и поэтому есть расширение спред [...arr]
// const arr5 = [...arr3];
// console.log(arr5);

// const arr6 = arr3.slice();// получаем как бы вырезанную копию всех значений, но можно вырезать и часть .slice(0, 2);
// console.log(arr6);


// const totalArr = [...arr3, ...matrix];//обьединить массивы
// console.log(totalArr);
// //так же обьединить можно с помощью специального метода  массив1.concat(массив2) or массив1.concat(массив2, массив3, массив4....)
// const totalArr2 = arr3.concat(matrix);

// /**массивы как и обьекты нельзя сравнивать на прямую. сравнивать по ссылке */

// const arr0 = ['s', 'f', 'g',];
// const arr9 = ['s', 'f', 'a',];

// const areArraysEquals = (arrey1, array2) => {
//     if (arrey1.length !== array2.length) {
//         return false;
//     }
//     for(let i=0;i<arrey1.length; i++){
//         const value1 = arrey1[i];
//         const value2 = array2[i];

//         const arrValuesArrey = Array.isArray(value1) && Array.isArray(value2);//является ли проверяемая сущност массивом
//         if (arrValuesArrey){
//             if(!areArraysEquals(value1, value2)){
//                 return false;
//             } else{
//                 continue // перейти к след. итерации цикла
//             }
//         }

//         if(value1 !== value2){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(areArraysEquals(arr0,arr9));


// /**ПЕРЕБОР массива */


//деструкторизация значений из массива
const data = ['Anton', 40];
//чтобы получить каждый элемент отдельно, можно прописать 
const nameData = data[0];
const ageData = data[1];

console.log('name:', nameData);
console.log('age:', ageData);

//но теперь можно использовать символ диструктурирующего присваивания

const [name, age] = data; //порядок крайне важен, расположение элементов как они идут в массиве
console.log('name:', name);
console.log('age:', age);

// пербрать можно через for , но есть встроенные способы перебора массива

const letters = ['aa', 'ss', 'dd' , 'ff' ,'gg' ,]
/**то же самое, что и  ['aa', 'ss', 'dd' , 'ff' ,'gg' ,].forEach(...) */
letters.forEach((letter, index, array) => { //использование всех трех сущностей обционально, можно одну
    console.log(letter);
})

// иногда нужно найти индекс элемента в массиве
const price = [100, 200, 444, 500, 444, 777];
console.log(price.indexOf(444));

// в indexOf можно передать второй аргумент, индекс с какого элемента будет стартовать поиск
console.log(price.indexOf(444, 3));

//можно начинать поиск с конца массива lastIndexOf
console.log(price.lastIndexOf(444));

console.log(price.lastIndexOf(444, 3));

// массив из обьектов

const users = [
    {
        name: 'Anton',
        age: 40,
        city: 'Moscov',
    },
    {
        name: 'Den',
        age: 30,
        city: 'Paris',
    },
    {
        name: 'Billy',
        age: 20,
        city: 'Moscov',
    },
    {
        name: 'Billy',
        age: 80,
        city: 'Seversk',
    }
]

console.log(
    users.findIndex((Element, index, array) => { //использование всех трех сущностей обционально, можно одну
        if (Element.name === 'Billy'){
            return true
        }
    })
)
// или еще короче запись
console.log(
    users.findIndex(({name}) => name === 'Anton')
)

//или так, по сути одно и тоже
console.log(
    users.findIndex((element) => element.name === 'Anton')
)

//чтобы проверить наличие элемента в массиве можно истользовать все методы приведенные выше
console.log(price.indexOf(500) !== -1)
console.log(price.lastIndexOf(500) !== -1)
console.log(price.findIndex((price) => price === 500) !== -1)
console.log(price.findLastIndex((price) => price === 500) !== -1)

//можно еще  проще искать элемент в массиве с помощью .includes(), но хрен получится с обьектами

console.log(price.includes(500)) //вернет true or false
console.log(price.includes(500, 4)) //можно передать второй аргумент, индекс с какого элемента будет стартовать поиск


// для массива с обьектами

console.log(
    users.some((element) => element.name === 'Anton')
)
 
//проверить каждый элемент на соответствие условию

console.log(
    users.every((element) => element.age >= 18)
)

//найти конкретный элемент по условиям, но хрен он найдет нескольких Billy
console.log(
    users.find((element) => element.name === 'Billy')
)

//для нескольких одинаковых элементов можно применть фильтр
console.log(
    users.filter((element) => element.name === 'Billy')
)

// вдруг нужно отфильтровать по городу и возрасту

const filteredUsers = users.filter((element) => {
    return element.city === 'Moscov' || element.age < 45
})
console.log(filteredUsers)

// теперь переберем массив и модифицируем каждый из его элементов
const userFormatted = users.map((element, index, array) => {
    return `${element.name}, ${element.age} age, lives in city ${element.city}` 
}) // на выходе такой же массив, но элементы уже с строкой 

console.log(userFormatted)
//map не мутирует исходный массив

/** метод reduce для новичков один из самых сложных */
// допустим нужно получить средний возраст пользователей из массива

let ageSum = 0
for( let i = 0; i<users.length; i++){
    ageSum +=users[i].age
}

console.log(
    'Средний возраст пользователей:', ageSum / users.length
)

//можно проще 


//debugger
const ageSum2 = users.reduce((accumulator, element, index, array) => {return accumulator + element.age}, 0)
//0 - начальное значение. 4 параметра: accumulator- хранит результат предидущего вызова функции(что вернуль на предидущей итерации цикла), element - текущий элемент массива, index - индекс текущего элемента массива, array - ссылка на сам перебираемый массив
console.log(
    'Средний возраст пользователей:', ageSum2 / users.length
)
//.reduceRight - перебирает элементы с права на лево

// .reverse()-  переворачивает исходный массив. Мутирует исходную сущность

const reversedUsers = [...users].reverse() // [...users] - копируем чтобы избежать мутирования исходной сущности
console.log(reversedUsers)

// .sort() - сортирует массив изменяя порядок его элементов. Мутирует исходный массив. [...users] - копируем чтобы избежать мутирования исходной 
const names = ['Antjn', 'Nika', 'Blya', 'Wow']
const sortNames = [...names].sort()
console.log(sortNames)

// sort() применимо к числовому массиву, но эта функция на выходе получает строку и числа хреново сортирует
//нужно использовать колбэк функцию
const numbers = [8, 4, 500]

const sortNumbers = [...numbers].sort((a, b) => a-b)// берет по два чила . если a-b= отрицательное число, то js решает что а идет первым. Если a-b= положительное , то b должно идти раньше , если a-b = 0 то они эквивалентны. Если нужно провести сортировку по убыванию, то заменить на b-a
console.log(
    sortNumbers
)


/** КОЛЛЕКЦИИ */

//до этого перебирали обьект через for in
 const user = {
    name: 'Anton', 
    age: 35,
    city: 'Novorossiysk',
 }
 for (const key in user){
    console.log('Имя свойства:', key)
    console.log('Значение свойства:', user[key])
 }

 //из обьекта можно получить массив ключей
 const userKeys = Object.keys(user)

 console.log('userKeys:', userKeys)

 //можно получить массив значений из обьекта

const userValues = Object.values(user)
console.log('userValues:', userValues)

//можно получить обьект в виде массива, каждый элемент будет массивом
const userEntries = Object.entries(user)
console.log('userEntries:', userEntries)
//преобразование обьекта в другой с допами
 const userEntriesFormatted = userEntries.map(([key, value]) => {
    return [key.toUpperCase(), `--${value}--`]
 })

 console.log('userEntriesFormatted:', userEntriesFormatted)

 //чтобы обратно получить обьект
 const userFormatted2 = Object.fromEntries(userEntriesFormatted)
 console.log('userFormatted2:', userFormatted2)


 //структура map коллекция. в методе прописываются добавляемые пары(ключ и значение)
 const data2 = new Map([
    [1, "один как цифра"],
    ['1', 'Один как строка']
 ])

 //чтобы добавить элемен поле обьявления, динамически
 data2.set(1, "один как цифра")
 data2.set('1', 'Один как строка')
 data2.set('name', 'имя')

 //чтобы получить данные по ключю из коллекции
console.log(data2.get(1))
console.log(data2.get('1'))

//чтобы проверить существует ли значение в коллекции по определенному ключу. Проверяет только наличие ключа без привязанного к нему значения
console.log(data2.has('name'))

//чтобы удальть элемент из коллекции
data2.delete('name')
console.log(data2.has('name'))

//чтобы полностью очистить всю коллекцию целиком
data2.clear()
console.log('data2', data2)

//у map() есть свойство size (не метод, без скобок). возвращает размер (количество пар)
console.log(data2.size)

//чтобы перебрать коллекцию for of
data2.set('age', 35)
data2.set('1', 'Один как строка')
data2.set('name', 'имя')

for (const key of data2.keys()){
    console.log('key:', key)
}

 for (const value of data2.values()){
    console.log('value:', value)
 }

 for (const entry of data2.entries()){
    console.log('entry:', entry)
 }

 //есть у коллекций свой forEach, порядок в колбеке разный

data2.forEach((value, key, map) => { //value - текущее значение пары в коллекции, key - ключ, map - ссылка на саму коллекцию
    console.log('value:', value)
    console.log('key:', key)
    console.log('map:', map)
})

//чтобы преобразовать обьекты в коллекцию
 const map = new Map(Object.entries(user))

 map.forEach((value, key) => {
    console.log(`${key}: ${value}`)
 })
 
 //чтобы обратно преобразовать мар коллекцию обратно в обьект
  const obj = Object.fromEntries(map)
  console.log(obj)


  /** Еще одна структура данныйх (коллекция) SET которая хранит только значения */
//каждое значение может быть только в единственном экземпляре, дубликаты игнорируются
  const set = new Set([1,2,2,2,2,3])//прологируем массив с сущностями. на выходе получим [1,2,3]
  console.log(set)

  //чтобы добавить элемент в коллекцию set
  set.add('Anton')

  //проверить есть ли определенное значение
  set.has('Anton')
  
  //удаление
  set.delete('Anton')

  //размер
  set.size

  //очистить
  set.clear()

  //для перебора те же методы что и для Map()







  /** JSON */

  // JSON.stringify() - преобразует js обьект в JSON чтобы эти данные можно было отправлять на сервер. Если в обьекте будум методы или значения будут undefined, то JSON не будет их учитывать
  const userDataString = JSON.stringify(user)
  console.log(userDataString)

  //чтобы обратно преобразовать JSON to JS
  const parseUserData = JSON.parse(userDataString)
  console.log(parseUserData)








  /** Классы */
  // многофункциональный шаблон для создания обьектов
  class Student {

    planet = 'World';
    coutry = 'russia';
    region = 'south';

    constructor(name, age){
        this.name = name
        this.age = age
    }

    logAge(){
        console.log(this.age)
      
    }
  }
  //чтобы создать обьект из этого шаблона
  const firstStudent = new Student('Anton', 35)
  const secondStudent = new Student()

  console.log('firstStudent',firstStudent)
  console.log('secondStudent',secondStudent)
 
  firstStudent.logAge()



  //get- получать,  set-устанавливать

class Getset{

    #city = null;

    constructor(name, age){
        this.name = name;
        this.age = age;
        

    }

    set city(value) {

const firstLatteer = value[0].toUpperCase()
const fromSecondLetter = value.slice(1).toLowerCase()

        this.#city = `${firstLatteer}${fromSecondLetter}`;
//нижнее подчеркивание в начале свойства т.к. принято выделять свойства или методы которые в рамках обьекта или класса


    }

    get city(){
        return `г. ${this.#city}`;
    }

    _someSecretAction() {
        //со всеми этими подчеркиваниями это чисто правило хорошего тона, можно вызвать и за предалеми класса, но не стоит. Лучше обьявить переменную в классе с приватным # вместо нижнего подчеркивания
    }

}

const FirstGetSet = new Getset('Anton', 30)

FirstGetSet.city = 'gnom'

console.log(FirstGetSet.city)