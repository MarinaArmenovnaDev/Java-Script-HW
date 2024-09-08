/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
let uniqueElements = [];
for(let i = 0 ; i < array.length; i ++){
    let isUnic = true
    for(let a = 0; a < uniqueElements.length; a ++){
        if(array[i] === uniqueElements[a]){
            isUnic = false
            break;
        }
    }
        if(isUnic){
            uniqueElements.push(array[i])
        }
    }
    return uniqueElements
}



console.log(findUniqueElements([1, 2, 3, 2, 1, 4]));


// function findUniqueElements(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!newArray.includes(array[i])) {
//             newArray.push(array[i]);
//           }
//         }
//     return newArray;
// }

// console.log(findUniqueElements([1, 2, 3, 2, 1, 4]));
