const wordsUpToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const wordsOfTens = ["zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function convertUpToTwoDigits(number) {
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

function convertUpToThreeDigits(number) {
    const result = [];
    if (number < 100) {
        result.push(...convertUpToTwoDigits(number));
    } else {
        const hundreds = Math.floor(number / 100);
        const rest = number - (100 * hundreds);
        result.push(wordsUpToNineteen[hundreds]);
        result.push('hundred');
        if (rest > 0) {
            result.push('and');
            result.push(...convertUpToTwoDigits(rest));
        }
    }
    return result;
}

const powersOfTen = ["thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion",
    "undecillion", "duodecillion", "tredecillion", "quatttuor-decillion", "quindecillion", "sexdecillion", "septen-decillion", "octodecillion", "novemdecillion"]

function* chunksOf(array) {
    for (let i = 3; i < array.length + 3; i = i + 3) {
        const start = array.length - i;
        yield array.slice(start >= 0 ? start : 0, array.length - i + 3).join('');
    }
}

function convert(number) {
    return [...chunksOf(number.toString().split(''))]
        .map((chunk, index, array) => {
            const number = parseInt(chunk, 10);
            if (index < array.length - 1 && number === 0) {
                return [];
            }
            const result = [];
            if (index === 0 && array.length > 1 && number < 100) {
                result.push('and');
            }
            return result.concat(convertUpToThreeDigits(number)
                .concat(powersOfTen[index - 1])
                .filter(x => !!x));
        })
        .map(x => x.join(' '))
        .filter(x => x && x.length)
        .reverse()
        .join(' ');
}

module.exports.convert = convert;
module.exports.chunksOf = chunksOf;
