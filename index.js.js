
const timerPromis = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(),2000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromis()
    const endTime = performance.now()
    console.log('Timer ended', endTime -startTime )
}       

asyncFn()

// в этом примере мы можеи отследить что мы ожидаем выполнение промиса
// с помощью метода performance.now() можно засечь время,посчитать какой то интервал времени
// Здесь создается пере-ая startTime она будет результатом вызова метода .now объекта performance
// пере-ая endTime так же содержит результат вызова метода .now объекта performance
// и далее после завершения этого промиса - await timerPromis() через 2сек
// мы должны увидеть в консоле 'Timer ended' и разницу между выполнением команд, endTime-startTime в млс

// еще раз: у нас фу-ия которая возв-ет промис -  timerPromis
// и через 2сек промис станет исполненым,т.к. мы вызываем фу-ию resolve()
// и задача данного примера что на этапе await timerPromis() мы ожидаем и не идем дальше

