/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const img = document.getElementById("web-tech-image") // находим картинку по айди
const buttonPre = document.getElementById("prev-button")//находим кнопку "предыдущее" по айди
const buttonNex = document.getElementById("next-button")// находим кнобку "следующее" по айди
const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]
let letIndex = 0 // индекс изображения с которого будет отсчет, имя другое, тк управляться будет кнопкой

function changeImage (index) {
  img.src = WEB_TECH_IMAGES[index] // устанавливаем для img начальную ссылку src 
}

changeImage(letIndex)

buttonNex.addEventListener('click', function(){
  letIndex = letIndex + 1 //увеличиваем каждый раз значение индекса на 1
  if (letIndex >= WEB_TECH_IMAGES.length){ // если индекс больше или равен длине массива - возвращаем его в начало
    letIndex = 0
  }
  img.src = WEB_TECH_IMAGES[letIndex] // присваеваем ссылку с меняющимся индексом при  нажатии кнопки
})

buttonPre.addEventListener('click', function(){
  letIndex = letIndex - 1 // каждый раз уменьшаем индекс на 1
  if(letIndex < 0 ){ //если индекс меньше 0 - возвращаем ему последний элемент массива
    letIndex =  WEB_TECH_IMAGES.length-1
  }
  img.src = WEB_TECH_IMAGES[letIndex] // присваеваем ссылку с меняющимся индексом при  нажатии кнопки
})

