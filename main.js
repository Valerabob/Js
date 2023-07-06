//        --------/////////////   Цепочка промисов  /////////////-----------
const checkRooms = new Promise (function(resolve,reject) {
   setTimeout(function() {
      console.log('Проверяем номера в отеле');
      const availableRooms = true;
      if (availableRooms) {
         resolve('Номера есть');
      }else{
         reject('номеров нет');
      }
   },1500);
});
checkRooms.then(function(data) {
  return new Promise (function(resolve,reject) {
      setTimeout(() => {
         console.log('then1')
         console.log('Проверяем авиабилеты');
         const availableTickets = true;
            if (availableTickets) {
               let message = 'Билеты есть';
               resolve(message);
            } else {
               let message = 'Билетов нет'
               reject(message);
            }
      },1000);
  });
}).then (function(data){
   console.log('then2');
   console.log('Ура едем в отпуск');
}).catch(function(data) {
   console.log('ответ на предыдушем шаге-',data);
   console.log('отпуск отменяется');
});