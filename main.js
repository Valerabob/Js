
const headings =  document.querySelectorAll('h1');
console.log(headings)

// Этой командой мы ищем коллекции элементов(все которые есть на странице h1
// Но объект .classList - не работает для коллекций! только для одиночных элементов!

for(let item of headings) {
    item.classList.add('blue-text');
}
// Поэтому пере-ой headings присваиваются все h1
// После мы обходим их все с помощью цикла for-of,где item - каждый отдельный h1
// А потом каждому отдельному заголовку добовляем .classList. 
// И далее класс из CSS ('blue-text')

 const paragraphs = document.querySelectorAll('p');
 for(let p of paragraphs) {
    p.classList.add('yellow-text');
 }
// Тот же пример,только с коллекцией P - обзацев!

paragraphs.forEach (function (p) {
    p.classList.add('yellow-text');
})

// Здесь мы обошли элементы (p) с помощью метода .forEach 
// где (p) это каждый параграф. и далее мы уже добавили ему класс из CSS