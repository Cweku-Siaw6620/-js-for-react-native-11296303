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


   function formatArrayStrings(strings,numbers){
     return strings.map(function(str, index) {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
 }
 var stringsArray = ["Math", "Hello WORLD", "lecture", "Indomie","bAbY"];
 var numbersArray = inputArray;
 var formattedArray = formatArrayStrings(stringsArray, numbersArray);
 console.log(formattedArray);

 