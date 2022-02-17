const original = 'thIs will be capiTalized for each word';
console.log(original);

function capitalizeEachWord(originalString) {
    lowerCaseString = originalString.toLowerCase();
    lowerCaseWords = lowerCaseString.split(' ');
    const capitalizedWords = [];
    lowerCaseWords.forEach(element => {
        firsLetter = element.slice(0, 1);
        upperCaseFirsLetter = firsLetter.toUpperCase();
        endOfWord = element.slice(1);
        capitalizedWord = upperCaseFirsLetter + endOfWord;
        capitalizedWords.push(capitalizedWord);
    });
    capitalizedString = capitalizedWords.join(' ');
    return capitalizedString;
}

capitalizedString = capitalizeEachWord(original);
console.log(capitalizedString);
