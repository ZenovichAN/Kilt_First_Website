'use strict';//чтобы весь код был в строгом режиме





/** КАК СЧИТЫВАТЬ РАЗЛИЧНЫЕ МЕТРИКИ. РАЗМЕРЫ И КООРДИНАТЫ DOM -ЭЛЕМЕНТОВ */

// const boxElement = document.querySelector('.box');// получаем элемент с классом box
// console.log(boxElement.offsetWidth);// ширина элемента с учетом padding и border

// для реализации UI комронентов нужно знать как получать размеры и координаты элементов
//1. offsetWidth, offsetHeight - ширина и высота элемента с учетом padding и border

//2. clientWidth, clientHeight - ширина и высота элемента с учетом padding, но без border и margin, и без прокрутки

//3/ clientLeft, clientTop - координаты элемента относительно родителя, т.е. отступы от родителя. по простому ширина левого и верхнего бордера

//4. scrollWidth, scrollHeight - ширина и высота элемента с учетом прокрутки

//5. scrolLLeft, scrollTop - координаты элемента относительно прокрутки, т.е. отступы от родителя с учетом прокрутки



// системы координат в браузере
// 1. window - вся страница
// 2. document - весь документ
// 3. viewport - видимая часть страницы


// отностительно окна браузера
// 1. getBoundingClientRect() - возвращает объект с координатами элемента относительно окна браузера. актуальные координаты элемента относительно окна браузера. при прокрутке страницы координаты элемента меняются. чтобы знать координаты отностительно страницы нужно знать положение прокрутки страницы. element.x + window.scrollX; element.y + window.scrollY;

// 2. window.scrollX, window.scrollY - положение прокрутки страницы по оси X и Y. возвращает количество пикселей, на которое страница прокручена по горизонтали и вертикали соответственно. если страница не прокручена, то возвращает 0. если страница прокручена, то возвращает количество пикселей, на которое страница прокручена. например, если страница прокручена на 100 пикселей вниз и 50 пикселей вправо, то window.scrollX = 50, window.scrollY = 100



/**определение размеров окна и страницы. методы прокрутки DOM-элементов и всей страницы целиком*/


// как получить ширину и высоту вьюпорта (окна браузера) и всей страницы. правильный способ
// const width = document.documentElement.clientWidth;// ширина окна браузера без прокрутки
// const height = document.documentElement.clientHeight;// высота окна браузера без прокрутки
// console.log(width, height);


// const scrollWidth = document.documentElement.scrollWidth;// ширина страницы с учетом прокрутки
// const scrollHeight = document.documentElement.scrollHeight;// высота страницы с учетом прокрутки
// console.log(scrollWidth, scrollHeight);





// const width = window.innerWidth;// ширина окна браузера. не учитывает прокрутку
// const height = window.innerHeight;// высота окна браузера. не учитывает прокрутку
// console.log(width, height);


//чтобы получить наиболее точное значение высоту страницы

const htmlElement = document.documentElement;// получаем элемент html
const bodyElement = document.body;// получаем элемент body

const fullPageHeight = Math.max(
    htmlElement.scrollHeight, // высота страницы с учетом прокрутки
    htmlElement.clientHeight, // высота страницы без прокрутки
    htmlElement.offsetHeight, // высота страницы с учетом padding и border
    bodyElement.scrollHeight, // высота страницы с учетом прокрутки
    bodyElement.clientHeight, // высота страницы без прокрутки
    bodyElement.offsetHeight // высота страницы с учетом padding и border
); // получаем максимальное значение высоты страницы

console.log(fullPageHeight);// выводим высоту страницы в консоль


//координаты позиции скролла страницы
// window.scrollX - положение прокрутки страницы по оси X
// window.scrollY - положение прокрутки страницы по оси Y


//плавно скролим страницу
// window.scrollTo({top: 0, behavior: 'smooth'});// плавно прокручиваем страницу вверх
// window.scrollTo({top: 1000, behavior: 'smooth'});// плавно прокручиваем страницу вниз на 1000 пикселей


//более популярный способ прокрутки страницы
// window.scroll({top: 0, behavior: 'smooth'});// плавно прокручиваем страницу вверх
// window.scroll({top: 1000, behavior: 'smooth'});// плавно прокручиваем страницу вниз на 1000 пикселей


// window.scrollBy({top: 1000, behavior: 'smooth'});// плавно прокручиваем страницу вниз на 1000 пикселей относительно текущей позиции скролла
// window.scrollBy({top: -1000, behavior: 'smooth'});// плавно прокручиваем страницу вверх на 1000 пикселей относительно текущей позиции скролла


// крутой метод cкролла страницы
//scrollIntoView() - прокручивает страницу до элемента, который мы передаем в качестве аргумента. можно передать объект с параметрами, чтобы настроить прокрутку. например, можно настроить прокрутку по оси Y и X, а также задать поведение прокрутки (плавная или мгновенная).

//const reviewsSectionElement = document.querySelector('.reviews');// получаем элемент с классом reviews
// setTimeout(() => {reviewsSectionElement.scrollIntoView({ behavior: 'smooth', block: 'center' })}, 300) // прокручиваем страницу до элемента с классом reviews, чтобы он оказался вверху окна браузера. плавная прокрутка



// const boxElement = document.querySelector('.box');// получаем элемент с классом box
// boxElement.scrollIntoView({block: 'center', behavior: 'smooth'});// прокручиваем страницу до элемента с классом box, чтобы он оказался в центре окна браузера. плавная прокрутка


// boxElement.scrollIntoView({block: 'start', behavior: 'smooth'});// прокручиваем страницу до элемента с классом box, чтобы он оказался вверху окна браузера. плавная прокрутка
