// Урок 4. Семинар. Знакомство с JavaScript
// Повторить, то, что было на семинаре, 
// либо решить следущие задания

// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, 
// преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: 
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

let сelsius = 32;
let fahrenheit = (9 / 5) * сelsius + 32;
console.log(`Температура в Цельсиях =  ${сelsius}`);
console.log("Температура в Фаренгейтах = " + fahrenheit);


// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. 
// Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. 
// Вывести значение переменной admin в консоль.


let lastName = "Artem";
let admin = lastName;
console.log(admin);