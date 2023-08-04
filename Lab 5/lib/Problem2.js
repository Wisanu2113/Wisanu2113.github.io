// 643040211-3 วิษณุ รั้งกระโทก
//create array to store number
let list = [];
 let max;
 let min;
 let numbersOfData;
 let average = 0;
 let sumNumber = 0;
 
let readInput = function () {
  let number = prompt("Enter an integer(a negative integer to quit):");
  if (number >= 0 && number % 1 == 0) {
    list.push(Number(number));
    readInput();
  } else if (number < 0) {
    return list;
  } else {
    readInput();
  }
};

function displayStats(list) {
       
    for (let i = 0; i < list.length; i++) {
    sumNumber += list[i];
    }

    numbersOfData = list.length;
    max = Math.max(...list);
    min = Math.min(...list);
    average = sumNumber / numbersOfData;

  return alert(
    "For the list " +
      list +
      "\n" +
      "The average is " +
      average.toFixed(2) +
      "\n" +
      "The minimum is " +
      min +
      "\n" +
      "The maximum is " +
      max
  );
   
}


readInput();
list.length == 0 ? alert(
    "For the list " +
      0 +
      "\n" +
      "The average is " +
      0 +
      "\n" +
      "The minimum is " +
      0 +
      "\n" +
      "The maximum is " +
      0
  ) : displayStats(list);

