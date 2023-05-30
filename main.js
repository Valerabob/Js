
const headings =  document.querySelector('h1');
console.log(headings)

headings.classList.add('red-text');
headings.classList.remove('red-text');

// добовление и удаление классов css .add - добовляет .remove - удаляет
// //////////------------------////////////////////-------------////////////-----------

headings.classList.toggle("green");

// Этот метод - .toggle добовляет указанный класс CSS если его нет
// Или убирает класс CSS если он есть
// Еще этот метод возвращает(в консоли) true если добавил класс CSS или false если удалил.

 const div = document.querySelector('div');
 console.log(div);

 div.classList.toggle('blue-text');
//  -----------////////////////////---------------------////////////////////////////////
  headings.classList.contains("green");
  // Метод .contains проверяет есть ли тот или иной класс CSS и возвращает true если есть и false-если нет

  if (headings.classList.contains("green")) {

  } else {

  }
// А здесь мы эту проверку записываеи в условие if/else и делаем те или иные действия в зависимости 
// от того что нам нужно !