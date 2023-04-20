
let myObject  = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const prop of myObject) {
    console.log (prop)
}

// Цикл for of не подходит для объектов.так как об-т это не итерируемый эл-т
// для того что бы итерироваться по объекту нужно использовать for in либо
// конвертировать об-т в массив используя методы Object.keys и Object.values
// а далее работать с массивом используя forEach





