/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/



function capitalizeWords(a) {
const words = a.split(' ')
let result = ''

for (let i = 0; i < words.length; i++) {
  const element = words[i];
  result += element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()  + ' '
}
return result.trim()   
  }

console.log(capitalizeWords("hello world from javascript"));


