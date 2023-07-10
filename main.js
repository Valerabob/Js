//        --------/////////////   Асинхронные фу-ии   asinc / await  /////////////-----------
 function promiseFunction () {
   return new Promise (function (resolve , reject) {
      setTimeout (() => {
         const result = true;

         if (result) {
            resolve('DONE');
         } else {
            reject('Fail');
         }
      },1000);
   });
 }

 async function startPromise () {
   try  {
      const result =  await promiseFunction ()
      console.log (result)
   } catch (err){
      console.log(err)
   }
 }
 startPromise()
//  В примере мы потребляем промис с помощью asinc / await. Сначала фу-ий promiseFunction мы создали объект типа промис и сразу вернули его
// Далее имитируем запрос,получаем ответ,записываем его в result. Далее условие.и на выходе мы получаем промис,а не данные из него
// И что бы нам получить строку 'DONE'если будет resolve или 'Fail'если reject и с ней уже работать мы создаем асинхронную фу-ию startPromise
//  где ждем с помощью await ждем выполнения промиса и его результат также записываем в пере-ую!
// А используя блок try\catch по аналогии с методами .then и .cathc мы говорим что делать при успешном и не успешном выполнении промиса
// При успешном -выполнится блок try - результат промиса запишется в конст и выведется в консоль строка 'DONE'.А при ошибки выполнится блок
// catch и выведется в консоль 'Fail'. и эта ошибка будет поймана!