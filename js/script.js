'use strict';//чтобы весь код был в строгом режиме



/** ДЕЛЕГИРОВАНИЕ СОБЫТИЙ, ПОВЕДЕНИЕ БРАУЗЕРА ПО УМОЛЧАНИЮ, ГЕНРАЦИЯ СОБСТВЕННЫХ СОБЫТИЙ */


//Здорово но нифига не понятно. Пересмотреть 33 видео, примеры анимации его сайта

/** СОБЫТИЯ МЫШИ И УКАЗАТЕЛЯ, DRAG AND DROP КОМПОНЕНТ */

const btn = document.querySelector('.btn');
btnElement.addEventListener('mousemove', (event) => {
    console.log('курсор навели на элемент', event.target); //event.target - элемент на который навели курсор
    console.log('координаты курсора', event.clientX, event.clientY); //координаты курсора относительно окна браузера
    console.log('координаты курсора', event.pageX, event.pageY); //координаты курсора относительно страницы
    console.log('координаты курсора', event.screenX, event.screenY); //координаты курсора относительно экрана   
    
}  )     

btnElement.addEventListener('mouseout', (event) => {
    console.log('курсор увели с элемент', event.relatedTarget); //event.relatedTarget - элемент на который увели курсор
    console.log('координаты курсора', event.clientX, event.clientY); //координаты курсора относительно окна браузера    
    
}  )  


btnElement.addEventListener('mousedown', () => {
       console.log('mousedown') // нажата кнопка мыши
    
}  )  

btnElement.addEventListener('mouseup', () => {
    console.log('mouseup') // отпустили кнопку мыши
 
}  ) 

btnElement.addEventListener('click', () => {
    console.log('click') // кликнули на кнопку мыши
 
}  ) 

btnElement.addEventListener('dblclick', () => {
    console.log('dblclick') // двойной кликнули на кнопку мыши
 
}  ) 

btnElement.addEventListener('contextmenu', () => {
    console.log('contextmenu') // правый кликнули на кнопку мыши
 
}  ) 


//события указателя:
// pointerdown - нажата любая кнопка мыши или сенсорный экран
// pointerup - отпущена любая кнопка мыши или сенсорный экран       
// pointermove - перемещение указателя мыши или сенсорного экрана
// pointerover - указатель мыши или сенсорный экран наведен на элемент
// pointerout - указатель мыши или сенсорный экран уведен с элемента
// pointerenter - указатель мыши или сенсорный экран наведен на элемент (внутри элемента)
// pointerleave - указатель мыши или сенсорный экран уведен с элемента (вне элемента)
// pointercancel - событие отменено (например, при использовании сенсорного экрана)
// pointerlockchange - событие блокировки указателя (например, при использовании игры на весь экран)
// pointerlockerror - ошибка блокировки указателя (например, при использовании игры на весь экран)
// pointercapture - событие захвата указателя (например, при использовании игры на весь экран)
// pointerrelease - событие освобождения указателя (например, при использовании игры на весь экран)
// pointercapturechange - событие изменения захвата указателя (например, при использовании игры на весь экран)
// pointercaptureerror - ошибка захвата указателя (например, при использовании игры на весь экран)
// pointercapturecancel - событие отмены захвата указателя (например, при использовании игры на весь экран)
// pointercapturechange - событие изменения захвата указателя (например, при использовании игры на весь экран)
// pointercaptureerror - ошибка захвата указателя (например, при использовании игры на весь экран)
// pointercapturecancel - событие отмены захвата указателя (например, при использовании игры на весь экран)
// pointercapturechange - событие изменения захвата указателя (например, при использовании игры на весь экран)
