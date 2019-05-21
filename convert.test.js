const convert = require('./convert');

test.each([
    [1, "one"],
    [5, "five"],
    [9, "nine"],
    [0, "zero"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [90, "ninety"],
    [43, "fourty three"],
    [99, "ninety nine"],
    [100, "one hundred"],
    [134, "one hundred and thirty four"],
    [500, "five hundred"],
    [501, "five hundred and one"],
    [520, "five hundred and twenty"],
    [999, "nine hundred and ninety nine"]
])('converts %i', (number, expected) => {
    expect(convert(number)).toBe(expected);
});
