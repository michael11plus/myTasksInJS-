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