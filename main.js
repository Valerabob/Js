

const autoBrands = ['Audi','Bmw','Mazda','Nissan']

autoBrands.forEach((item,index) => {
    console.log(item,index)
})

// В этом примере у нас перебор массива так же с помощью forEach,а функция переданна стрелочная => ! 
// item - это значение элемента. index - это индекс эле-та!





autoBrands.forEach((item,index) => console.log(item,index))

// Сокращенное написание переборки массива,так как в фу-ии одна строчка !