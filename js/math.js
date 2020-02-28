//Скрипт сборник основных мат функций

let minus = (a, b) => a - b
let summ = (a, b) => a + b
let pow = (a, b) => Math.pow(a, b)
let ceil = a => Math.ceil(a * 100) / 100 //В большую сторону округляет
let floor = a => Math.floor(a * 100) / 100 //В меньшую сторону округляет до 2х последних цифр
let getrandomint = (max, min) =>
    Math.floor(Math.random() * (max - min + 1)) + min
    //сортировка от наименьшего к наибольшему