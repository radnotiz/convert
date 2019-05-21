const wordsUpToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const wordsOfTens = ["zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function convertTwoDigits(number) {
    if (number < 20) {
        return [wordsUpToNineteen[number]];
    } else if (number < 100) {
        const tens = Math.floor(number / 10);
        const rest = number - (10 * tens);
        const result = [wordsOfTens[tens]];
        if (rest > 0) {
            result.push(wordsUpToNineteen[rest]);
        }
        return result;
    }
}

function convert(number) {
    const result = [];
    if (number < 100) {
        result.push(...convertTwoDigits(number));
    } else {
        const hundreds = Math.floor(number / 100);
        const rest = number - (100 * hundreds);
        result.push(wordsUpToNineteen[hundreds]);
        result.push('hundred');
        if (rest > 0) {
            result.push('and');
            result.push(...convertTwoDigits(rest));
        }
    }
    return result.join(' ');
}

module.exports = convert;