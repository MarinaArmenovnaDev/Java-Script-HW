/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade = Math.floor(Math.random()*101)
// your code

    if(grade < 50) {
        console.log("F");
    }else if(grade < 70){
        console.log("D");
    }else if(grade < 80){
        console.log("C");
    }else if(grade < 90){
        console.log("B");
    }else {
        console.log("A");
    }

console.log(grade);