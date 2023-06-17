//        --------/////////////      Секундомер    /////////////-----------

const counterElement = document.querySelector('#counter');
// Находим HTML эл-т на станице и записываем его в  пере-ую counterElement(счетчик)

let counter = 0;
let timerID ;

// setInterval(function(){
   // counter +=1;
   // counterElement.innerText = counter ;
// },1000);

// Здесь в let counter = 0 мы записываем начальное значение счетчика
// А в фу-ии setInterval мы увеличиваем его значения на 1 каждую секунду
// И указываем что содержимое эл-та на странице (счетчика) = меняющемуся значению let counter

// ---------------/////////// кнопки старт и стоп и сброс секундомера ///////////--------------------
const btnStart = document.querySelector('#start');

btnStart.onclick = function () {
   timerID = setInterval(function(){
       counter +=1;
       counterElement.innerText = counter;
    },1000);  
}
// Здесь мы находим кнопку старт записываем ее в конст
// Метод onclick прослушивает событие клик! И при клике мы передадим нашу ранее созданную фу-ию
// setInterval !!! чтобы запуск счетчика происходил по клику на кнопre старт  а не автоматически

const btnStop = document.querySelector('#stop');
btnStop.onclick = function () {
   clearInterval(timerID);
}
// Здесь мы нашли кнопку стоп на странице по Id записали ее в конст
// После этого мы внесли изменения в setInterval а именно записали его в timerID используя let
// потому что он будет меняться и объявили ее ранее(в глобальной области видимости)
// через метод onclick мы по событию клик остановим счетчик(методом clearInterval по timerID)

const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
   counter = 0;
   counterElement.innerText = counter;
   clearInterval(timerID);
}
// Нашли кнопку по ID записали в конст,потом по клику на кнопку записали в фу-ю сброс counter на ноль
// Чтобы НОЛЬ отображался на счетчике св-во innerText счетчика прировняли к counter(тоесть нолю)
// И что бы он не просто сбрасывался а и останавливался добавили clearInterval(timerID)