let list = function () {
    let number = prompt("Enter an integer(a negative integer to quit):");
}

function displayStats(input) {
    let max = 0;
    let min = 0;
    let numbersOfData = 0;
    let sumNumber = 0;
    let average = sumNumber / numbersOfData;
    stringNumber = "";
    while (true) {
        if (input < 0) {
            alert("For the list " + stringNumber + 'the average is ' + average + ', the minimum is ' + min + ', and the maximum is ' + max);
            break;

        } else {
            if (input > max) {
                max = input;

            } else if (input < min) {
                min = input;
            }
            stringNumber = input + ",";
            sumNumber += input;
            numbersOfData += 1;

        }

    }

}

displayStats(list());