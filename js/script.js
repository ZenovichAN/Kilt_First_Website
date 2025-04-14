'use strict';//чтобы весь код был в строгом режиме








/** ОБРАБОТКА СОБЫТИЙ, ВСПЛЫТИЕ И ПОГРУЖЕНИЕ */


const logAllEvents = () => {
    console.log(
        Object
            .keys(window)
            .filter((key) => /^on/.test(key))
            .map((eventName) => eventName.slice(2))
    )
}

logAllEvents()

//каждое событие исходит от дом элемента, который его вызвал или окна браузера
/** примеры событий:
 * click, scroll, resize, keydown, keyup, focus, blur, change, input, submit, load, unload, error
 * mouseenter, mouseleave, mousemove, mouseover, mouseout, contextmenu, dblclick, drag, drop, wheel
 * touchstart, touchmove, touchend, touchcancel, pointerdown, pointerup, pointermove, pointerenter, pointerleave, pointercancel
 * transitionend, animationend, animationstart, animationiteration
 */

// несколько способов навесить обработчик событий на элемент
// const button = document.querySelector('.button')
// const input = document.querySelector('.input')
// const div = document.querySelector('.div')
// const form = document.querySelector('.form')    


// 1. встроенный обработчик событий в HTML - не рекомендуется использовать, так как это нарушает принцип разделения логики и разметки
// <button type="button" onclick="alert('Hello')">Click me</button> - встроенный обработчик событий в HTML
// <button type="button" id="button">Click me</button> - встроенный обработчик событий в HTML

// 2. метод addEventListener - рекомендуется использовать, так как это позволяет разделить логику и разметку

 const button = document.querySelector('.button')

button.addEventListener('click', (event) => {
    alert('Hello')
    event.which //код клавиши, которая была нажата (для событий клавиатуры)
    
})

//or

// button.onclick = () => {
//     alert('Hello again')
// }


//способ удаления обработчика событий
// button.removeEventListener('click', () => {
//     alert('Hello again')



//всплытие и погружение событий - это механизм, который позволяет обрабатывать события на разных уровнях DOM-дерева.
// Всплытие - это процесс, при котором событие начинает обрабатываться с самого глубокого элемента и поднимается вверх к родительским элементам.
// Погружение - это процесс, при котором событие начинает обрабатываться с самого верхнего элемента и опускается вниз к дочерним элементам.
// В JavaScript события по умолчанию всплывают, но можно использовать параметр capture, чтобы сделать погружение.

//.stopPropagation() - останавливает всплытие события
//.preventDefault() - отменяет действие по умолчанию для события, например, для ссылки или формы
//.stopImmediatePropagation() - останавливает всплытие события и предотвращает выполнение других обработчиков событий на том же элементе
//.target - возвращает элемент, на котором произошло событие
//.currentTarget - возвращает элемент, на котором был установлен обработчик события
//.bubbles - возвращает true, если событие всплывает, и false, если нет
//.cancelable - возвращает true, если событие можно отменить, и false, если нет
//.defaultPrevented - возвращает true, если действие по умолчанию было отменено, и false, если нет

//.eventPhase - возвращает фазу события (1 - захват, 2 - цель, 3 - всплытие)
//.timeStamp - возвращает время, когда произошло событие в миллисекундах с момента загрузки страницы
//.type - возвращает тип события (click, mouseover и т.д.)
//.which - возвращает код клавиши, которая была нажата (для событий клавиатуры)
