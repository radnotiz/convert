const wordsUpToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const wordsOfTens = ["zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];


function convert(number) {
    if (number < 20) {
        return wordsUpToNineteen[number];
    } else {
        const tens = Math.floor(number / 10);
        const rest = number - (10 * tens);
        const result = [wordsOfTens[tens]];
        if (rest > 0) {
            result.push(wordsUpToNineteen[rest]);
        }
        return result.join(' ');
    }
}

module.exports = convert;