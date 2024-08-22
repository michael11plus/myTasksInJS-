
// find the longest word in a string
function getLongestWord() {
    const sentence = prompt('Enter a sentence of multiple words');
    let splitSentence = sentence.split(" ");
    let longestWord = splitSentence[0];

    for (let i = 0; i <= (splitSentence.length - 1); i++) {
        if (splitSentence[i].length > longestWord.length) {
            longestWord = splitSentence[i];
        }
    }

    console.log(`The longest word of the sentence \n\n ${sentence} \nis\n ${longestWord}`);
}

// reverse a string
function reverseString() {
    const yourString = prompt('Enter your string, even of multiple words');
    let newString = [];
    let i = 0;
    let myLength = yourString.length - 1;

    while (i <= (yourString.length - 1)) {
        newString[i] = yourString[myLength];
        i++;
        myLength--;
    }

    newString = newString.join('')
    alert(newString);
}

// reverse a sentence by words
function reverseSentence() {
    const yourSentence = prompt('Type in your sentence to reverse it by words.');
    let axeSentence = yourSentence.split(" ");
    let newSentence = [];
    let i = 0;
    let myLength = yourSentence.length - 1;

    while (i <= (yourSentence.length - 1)) {
        newSentence[i] = axeSentence[myLength];
        i++;
        myLength--;
    }

    newSentence = newSentence.join(' ')
    alert(newSentence);
}

// Write a function that compares two numbers
function getBiggerNumber() {
    const firstNumber = parseInt(prompt('Enter the first number you want to compare'));
    const secondNumber = parseInt(prompt('Enter the second number you want to compare'));
    
    if (firstNumber < secondNumber) { 
        alert(`Between ${firstNumber} and ${secondNumber} --- ${secondNumber} is bigger.\nThe second number is bigger by ${secondNumber - firstNumber}`);
    } else if (firstNumber > secondNumber) {
        alert(`Between ${firstNumber} and ${secondNumber} --- ${firstNumber} is bigger.\nThe first number is bigger by ${firstNumber - secondNumber}`);
    } else if (firstNumber === secondNumber) {
        alert(`Between ${firstNumber} and ${secondNumber} --- none is bigger.\nThey are the same.`);
    }
}

// Write a function that calculates factorial of the number
function getFactorial() {
    const numberToFactorial = parseInt(prompt('Enter number to get factorial'));
    let finalNumber = numberToFactorial;
    let i = 1;
    
    while (i < numberToFactorial) {
        finalNumber = finalNumber * i;
        i++;
    }

    alert(`Your number ${numberToFactorial} in factorial is: ${finalNumber}`);
}

// Write a function that takes three digits and combines them into one number
function combineDigits() {
    const firstDigit = parseInt(prompt('Enter first digit of the three-digit number'));
    const secondDigit = parseInt(prompt('Enter second digit of the three-digit number'));
    const thirdDigit = parseInt(prompt('Enter third digit of the three-digit number'));
    let digitArray = [];

    digitArray[0] = firstDigit;
    digitArray[1] = secondDigit;
    digitArray[2] = thirdDigit;

    alert(`You entered the digits ${firstDigit}, ${secondDigit}, ${thirdDigit} and it results in ${digitArray.join('')}`);
}


// Function to calculate area 
function calculateArea(wid, len) {
    if (arguments.length === 0) {
        // alert('Your parameters cannot be calculated.');
        return;
    } 

    if (arguments.length === 1 && typeof wid === 'number') {
        return wid * wid;
    }

    if (arguments.length === 2 && typeof wid === 'number' && typeof len === 'number') {
        return wid * len;
    }

    // alert('Your parameters cannot be calculated.');
    return;
}
