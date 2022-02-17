const original = 'thIs will be capiTalized for each word';

function capitalizeEachWord(originalString) {
    lowerCaseString = originalString.toLowerCase();
    lowerCaseWords = lowerCaseString.split(' '); 

    return lowerCaseWords;
}

capitalizedString = capitalizeEachWord(original);
console.log(capitalizedString);
