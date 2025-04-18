'use strict';//чтобы весь код был в строгом режиме




/** ВАЛИДАЦИЯ ФОРМ */

// валидация формы бывает двух типов:
// 1. валидация на стороне клиента (в браузере) 
// 2. валидация на стороне сервера (на сервере)
// валидация на стороне клиента выполняется с помощью JavaScript и HTML атрибутов
// валидация на стороне сервера выполняется с помощью PHP и SQL запросов
// валидация на стороне клиента выполняется перед отправкой формы на сервер

/** КЛИЕНТ-СЕРВЕРНОЕ ВЗАИМОДЕЙСТВИЕ */

//fetch это функция, которая позволяет отправлять запросы на сервер и получать ответы от него
//fetch(url, options) - url - адрес на который отправляется запрос, options - объект с настройками запроса


//rest api - это архитектурный стиль взаимодействия между клиентом и сервером, который позволяет обмениваться данными в формате JSON

//api это набор функций и протоколов, которые позволяют взаимодействовать с программным обеспечением, операционной системой или другим сервисом

//rest api - это интерфейс, который позволяет взаимодействовать с сервером через HTTP запросы (GET, POST, PUT, DELETE) и получать ответы в формате JSON
//rest api - это способ взаимодействия между клиентом и сервером, который позволяет обмениваться данными в формате JSON

//для практики можно использовать free rest api, например: https://jsonplaceholder.typicode.com/
//или https://reqres.in/

//или https://api.github.com/users
//или https://api.github.com/users/octocat

fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(json => console.log(json))

//npm i json-server команда в терминале для установки json-server
//json-server --watch db.json команда в терминале для запуска json-server


//npx json-server db.json для запуска json-server

// весь код урока  https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkRjWl8wTzRzdDlBOFFXRkhqc0tvcEJyREY0Z3xBQ3Jtc0tub0xjR040eGlJUVZtcXZhdEluaUpCbWJMU2xiSjh4VUtJS3gya0R4Mm1wUE9UekNrOUY5c3F2SlhRSEtnVnFpdmg2LXhBZ2ZFb0hDNFJHR3VScS11ZklQbHIzbkN2ZkFKWFFxV3BGRmNoZTg1SzVvTQ&q=https%3A%2F%2Fgithub.com%2Faleksanderlamkov%2Fjs-course&v=klVGCxWsN2A