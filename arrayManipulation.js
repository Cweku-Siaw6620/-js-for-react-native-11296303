function processArray(array){
    return array.map(function(num) {
       if (num % 2 === 0) {
           return num * num;
       } else {
           return num * 3;
       }
   });
     
   }
   
   var inputArray = [1, 2, 3, 4, 5];
   var resultArray = processArray(inputArray);
   console.log(resultArray); 
   