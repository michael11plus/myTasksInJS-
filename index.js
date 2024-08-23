
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


// Function to calculate area out of two parameters
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
// console.log(calculateArea(7, 8)); --- output 56
// console.log(calculateArea(7));    --- output 49


// Function that gets all the divisors of a number and stores them into an array.
function getDivisors() {
    let numToGetDivisors = parseInt(prompt('Enter number to get an array of divisors'));
    let divisorsArray = [];
    let arrayIndex = 0;
    let divisor = 1;
    
    while (divisor <= (numToGetDivisors / 2)) {
        if (numToGetDivisors % divisor === 0) {
            divisorsArray[arrayIndex] = divisor;
            arrayIndex++;
            divisor++;
        } else if (numToGetDivisors % divisor !== 0) {
            divisor++;
        }
    }
    
    alert('The resulting divisors are: \n' + divisorsArray);
}


// Function that checks if a number is a perfect number -- if the number is also a sum of all of its divisors (excluding itself) -- those are 6, 28, 496, 8128, 33 550 336

function getPerfectNumber() {
    let isPerfectNumber = parseInt(prompt('Enter number to find out if its perfect.'));
    
    function getPerfectDivisors(theNumber) {
        let divisorsArrayPerf = [];
        let arrayIndexPerf = 0;
        let divisorPerf = 1;

        while (divisorPerf <= (theNumber / 2)) {
            if (theNumber % divisorPerf === 0) {
                divisorsArrayPerf[arrayIndexPerf] = divisorPerf;
                arrayIndexPerf++;
                divisorPerf++;
            } else {
                divisorPerf++;
            } 
        }

        return divisorsArrayPerf;
    }
    
    let divArray = getPerfectDivisors(isPerfectNumber);
    
    function getSumOfDivisors(theArray) {
        let i = 0;
        let sum = 0;

        while (i <= theArray.length - 1) {
            sum = sum + theArray[i];
            i++;
        }

        return sum;
    }

    let sumOfDivisors = getSumOfDivisors(divArray);

    if (sumOfDivisors === isPerfectNumber) {
        alert(`Your number ${isPerfectNumber} is PERFECT! \nIts divisors are: ${divArray}\nAnd their sum is ${sumOfDivisors} too.`);
    } else if (sumOfDivisors !== isPerfectNumber) {
        alert(`Your number ${isPerfectNumber} is NOT perfect! \nIts divisors are: ${divArray}\nAnd their sum is ${sumOfDivisors}, so the numbers dont match.`);
    }
}


// Write Roman Numerals convertor (max 3999)

function getRomanNumber() {
    let numberToRoman = prompt('Enter the number to be converted to Roman.\nMaximum 3999');
    let numToArr = numberToRoman.split('');
    let romArr = [];
    let activeNumber;

    if (numberToRoman >= 3000) {
        romArr[0] = 'MMM'
    } else if (numberToRoman >= 2000) {
        romArr[0] = 'MM'
    } else if (numberToRoman >= 1000) {
        romArr[0] = 'M'
    } else {
        alert('The number exceeds 3999');
        return
    }    

    if (numberToRoman % 1000 >= 900) {
        romArr[1] = 'CX';
    } else if ((numberToRoman % 1000 < 900) && (numberToRoman % 1000 >= 500)) {
        romArr[1] = 'D';
    } else if ((numberToRoman % 1000 < 500) && (numberToRoman % 1000 >= 400)) {
        romArr[1] = 'CD';
    } else if ((numberToRoman % 1000 < 400) && (numberToRoman % 1000 >= 300)) {
        romArr[1] = 'CCC';
    } else if ((numberToRoman % 1000 < 300) && (numberToRoman % 1000 >= 200)) {
        romArr[1] = 'CC';
    } else if ((numberToRoman % 1000 < 200) && (numberToRoman % 1000 >= 100)) {
        romArr[1] = 'C';
    } 

    alert(`The number ${numberToRoman} is ${romArr.join('')} in Roman Numerals.`);
}