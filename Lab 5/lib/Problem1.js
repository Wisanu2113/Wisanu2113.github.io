// 643040211-3 วิษณุ รั้งกระโทก
let number = 0;
stringNumber = "";
while (true) {
  let input = prompt("Enter your Positive number");
  if (input > 0 && input % 1 == 0) {
    alert(" Found positive integer number");
    number = input;
    showPrime(number);
    break;
  }
}
function showPrime(number) {
  for (let i = 2; i < number; i++) {
    if (!isPrime(i)) continue;
    {
      stringNumber += i + "   ";
    }
  }

  alert("Prime number of " + number + " : " + stringNumber);
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}
