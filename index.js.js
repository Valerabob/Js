const myCiti = {
    citi: 'abc',
    citiGriting() {
        console.log('Gritings')
    }
}
myCiti.citiGriting()

// citigriting - метод со значением функцией и сперва свойсво объекта майСити
// внутри функции вызов метода Лог объекта консоль(вывод в консоль строки)
// в итоге вызываем метод Ситигритинг
// без слова функция сокращенный формат
const person  = {
    name: 'Bob',
    age: 21
}
const person2 = person

person2.age = 23
person2.isAdult = true

console.log(person.age)
console.log(person.isAdult)
// две переменные ссылаются на один объект в памяти
// в переменных хранятся ссылки на объект
// мутирование копий