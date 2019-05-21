const convert = require('./convert');

test('converts 1 to one', ()=>{
    expect(convert(1)).toBe('one');
});

test('converts 5 to five', ()=>{
    expect(convert(5)).toBe('five');
});

test('converts 9 to nine', ()=>{
    expect(convert(9)).toBe('nine');
});

test('converts 0 to zero', ()=>{
    expect(convert(0)).toBe('zero');
});