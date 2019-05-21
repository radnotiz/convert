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

test('converts 12', ()=>{
    expect(convert(12)).toBe('twelve');
});

test('converts 13', ()=>{
    expect(convert(13)).toBe('thirteen');
});

test('converts 19', ()=>{
    expect(convert(19)).toBe('nineteen');
});

test('converts 20', ()=>{
    expect(convert(20)).toBe('twenty');
});

test('converts 90', ()=>{
    expect(convert(90)).toBe('ninety');
});

test('converts 43', ()=>{
    expect(convert(43)).toBe('fourty three');
});

test('converts 99', ()=>{
    expect(convert(99)).toBe('ninety nine');
});
