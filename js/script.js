'use strict';//чтобы весь код был в строгом режиме






/** СОБЫТИЯ КЛАВИАТУРЫ */

//keydown - нажата клавиша
//keyup - отпущена клавиша


/** ФОКУС, BLUR */


//focus - элемент получает фокус (например, при клике на него)
//blur - элемент теряет фокус (например, при клике на другой элемент) 

// <input type="text" id="name" placeholder="Имя" required autofocus> такой фокус не поймать в js, т.к. он срабатывает при загрузке страницы, а не при клике на элемент


element.addEventListener('blur', function (event) {
    console.log('blur', event.target);
}, true); //true - событие всплывает от элемента к родителю, false - от родителя к элементу


element.addEventListener('focus', function (event) {
    console.log('focus', event.target);
}, true); //true - событие всплывает от элемента к родителю, false - от родителя к элементу


document.addEventListener('focusin', function (event) { //focusin - событие всплывает от элемента к родителю, focus - событие не всплывает
    console.log('focusin', event);
} ); 

document.addEventListener('focusout', function (event) { //focusout - событие всплывает от элемента к родителю, focus - событие не всплывает
    console.log('focusout', event);
}); 

// чтобы узанть находится ли элемент в фокусе, можно использовать метод document.activeElement, который вернет элемент, на котором сейчас находится фокус. Если фокуса нет, то вернет body
// document.activeElement - элемент, на котором сейчас находится фокус. иконка глаза в devtols -> console -> document.activeElement



/**ФОРМЫ. ДОСТУП И ИЗМЕНА */


document.forms // все формы на странице
document.forms[0] // первая форма на странице
document.forms[0].elements // все элементы формы
document.forms[0].elements[0] // первый элемент формы

document.querySelector('form') // первая форма на странице
document.querySelector('form').elements // все элементы формы
document.querySelector('form').elements[0] // первый элемент формы
document.querySelector('form').elements[0].value // значение первого элемента формы
document.querySelector('form').elements[0].name // имя первого элемента формы


// чтобы привязать любой элемент к форме, нужно в теге (например select) указать form = "имя формы" или id = "имя формы"
// <form name="myForm" id="myForm"> или <form id="myForm"> и <select form="myForm"> или <select id="myForm">. В этом случае элемент будет привязан к форме и будет отправляться вместе с формой при отправке формы. Если форма не указана, то элемент не будет отправляться с формой.
// <input type="text" name="name" form="myForm"> или <input type="text" id="myForm">. В этом случае элемент будет привязан к форме и будет отправляться вместе с формой при отправке формы. Если форма не указана, то элемент не будет отправляться с формой.



/** СБОР ДАННЫХ С ФОРМЫ ДЛЯ ОТПРАВКИ НА СЕРВЕР */


const formElement = document.querySelector('form'); // получаем форму

formElement.addEventListener('submit', (event)  => { // добавляем обработчик события submit на форму   

    event.preventDefault(); // отменяем отправку формы, чтобы не перезагружать страницу

    const formData = new FormData(formElement); // создаем объект FormData из формы


    //так себе вариант кода ниже в коментариях, т.к. он не учитывает чекбоксы и радио-кнопки, которые могут быть выбраны или не выбраны

    //  for (const element of formElement.elements) { // перебираем все элементы формы
    //     if (!element.name) { // если у элемента нет имени, то пропускаем его
    //        continue; // пропускаем элемент
    //     }

    //     if (element.type === 'checkbox') { // если элемент - чекбокс, то добавляем его значение в объект
    //         formData[element.name] = element.checked; // добавляем в объект данные элемента
    //         continue; // пропускаем элемент
    //     } else {
    //         formData[element.name] = element.value; // добавляем в объект данные элемента
    //     }

    //     if(element.type === 'radio' && !element.checked) { // если элемент - радио-кнопка и он не выбран, то пропускаем его
    //         continue; // пропускаем элемент
            
    //     } 
        
    // } // добавляем в объект данные элемента
    formData.append('name', 'someName'); // добавляем в объект данные элемента name
    formData.append('email', formElement.elements.email.value); // добавляем в объект данные элемента email    

    formData.get('name'); // получаем значение поля name из объекта FormData
    formData.has('name'); // проверяем есть ли поле name в объекте FormData
    formData.delete('name'); // удаляем поле name из объекта FormData

    console.log(Object.formElement(formData)); // выводим объект с данными формы в консоль
    
    console.log(formData); // выводим объект FormData в консоль
    console.log(formData.get('name')); // получаем значение поля name из объекта FormData
    console.log(formData.get('email')); // получаем значение поля email из объекта FormData
    console.log(formData.get('password')); // получаем значение поля password из объекта FormData
})
