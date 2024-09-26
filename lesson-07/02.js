/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // return !isNaN (str) && str.trim !== " "
  return !isNaN((str)) && isFinite(str)  && str.trim() !== '';

  // your code
}
console.log(isNumeric(" "));

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false



//isFinite(str) - это встроенная функция JavaScript, которая определяет, является ли предоставленное значение конечным числом. Она возвращает true, если значение является конечным числом (не бесконечностью и не NaN), и false в противном случае. 
