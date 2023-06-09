// --------///////////// СОЗДАНИЕ ТОДО-ЛИСТА /////////////-----------

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput= document.querySelector('#todo-input');
// Находим эл-ты и записываем их в пре-ые

todoForm.addEventListener('submit', formHandler );
// Слушаем событие у формы 'submit' фу-ию пишем отдельно и в ней...

function formHandler (event) {
    event.preventDefault();

    const taskText = todoInput.value;
    const li = `<li>${taskText}</li>`;
    todoList.insertAdjacentHTML("beforeend",li);
    
    todoInput.value = '';
    todoInput.focus();
}

// ...обращаемся к (event) и с помощью метода .preventDefault()-отменяем стандартное поведение формы
// Стандартное поведение формы ( по 'submit' ) отправка формы и обновление страницы
// preventDefault()- отменяет стандартное поведение того события которое происходит
// Далее мы получаем значение из импута (из поля ввода текста) и записываем в конст
// После мы создаем тег li в ручную и его зна-ие (название задачи)приходит из пер-ой taskText
// И после мы добовляем на страницу новый эл-т списка(li) используя метод insertAdjacentHTML 
// у нас список записан в todoList.
//  А после мы очишаем поле ввода текста устанавл знач todoInput = '';  (пустая строка)
// И последнее фокус(курсор) что б остовался в поле ввода текста



