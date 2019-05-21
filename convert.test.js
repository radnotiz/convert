const convert = require('./convert');

test('converts 1', ()=>{
    expect(convert(1)).toBe('one');
});

test('converts 5', ()=>{
    expect(convert(5)).toBe('five');
});

test('converts 9', ()=>{
    expect(convert(9)).toBe('nine');
});

test('converts 0', ()=>{
    expect(convert(0)).toBe('zero');
});

test('converts 10', ()=>{
    expect(convert(10)).toBe('ten');
});

test('converts 11', ()=>{
    expect(convert(11)).toBe('eleven');
});

test('converts 19', ()=>{
    expect(convert(19)).toBe('nineteen');
});
