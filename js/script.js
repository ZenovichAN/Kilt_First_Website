'use strict';//чтобы весь код был в строгом режиме

/** обработка ошибок */

try {
    //пробуем выполнить код
} catch (error) {
    //обрабатываем возникшую ошибку
}


//или можно пробрасывать ошибку дальше
try {
    //пробуем выполнить код
}
catch (error) {
    //обрабатываем возникшую ошибку
    throw error;
}


// или можно пробрость ошибку
// if (!name) { 
//     const errorMessage = 'Имя не указано';
//     throw new Error(errorMessage); // привильнее при проработке своей кастомной ошибки обращаться к конструктору класса Error
// }





//класическая конструкция try catch
try {
    //пробуем выполнить код
}
catch (error) {
    //обрабатываем возникшую ошибку
}   finally {
    //выполняется в любом случае
}



/** АСИНХРОННЫЙ КОД, ПРОМИСЫ, EVENT LOOP */

/** promise - специальный обьект -надстройка для работы с асинхронным кодом */
// promise имеет 3 состояния:
// 1. pending - начальное состояние, обещание выполняется
// 2. resolved - обещание выполнено успешно (fulfilled)
// 3. rejected - обещание выполнено с ошибкой (rejected)
 // у promise основные методы:
    // 1. then - обработка успешного выполнения
    // 2. catch - обработка ошибок
    // 3. finally - выполнится в любом случает, вне зависимости от результата выполнения промиса

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('success!');
            } else {
                reject('error!');
            }
           
        }, 2000);
    });
    
    promise
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log('finally');
        });



        /**МОДУЛИ */

        // рефакторинг это переписывание кода, чтобы он стал более читабельным и понятным, но не меняя его функционал
        // модуль - это отдельный файл, который содержит код, который можно использовать в других файлах
        // в js модули - это отдельные файлы, которые можно импортировать и экспортировать


         //<script type="module" src="js/script.js"></script> - чтобы подключить модуль, нужно указать type="module". модули функционируют как самостоятельные скрипты, которые не зависят от других скриптов. чтобы отратиться к переменной или функции из другого модуля, нужно использовать export и import.

        // в модуле можно использовать import и export, чтобы импортировать и экспортировать функции, переменные и классы. export пишется в начале кода

        //import { name } from './js/modules.js'; - импортируем переменную name из модуля modules.js
        //import { name as newName } from './js/modules.js'; - импортируем переменную name из модуля modules.js и переименовываем ее в newName
        //import * as module from './js/modules.js'; - импортируем все из модуля modules.js и сохраняем в переменную module


        //export const name = 'John'; - экспортируем переменную name из модуля
        //export function sayHello() { - экспортируем функцию sayHello из модуля
        //export { name, sayHello }; - экспортируем переменную name и функцию sayHello из модуля, можно записать в конце файла