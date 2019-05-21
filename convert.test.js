const convert = require('./convert');

test('converts 1 to one', ()=>{
    expect(convert(1)).toBe('one');
});