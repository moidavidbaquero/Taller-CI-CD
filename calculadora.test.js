const { suma, resta, multiplicacion, division} = require ('./calculadora');

test('Suma: 2 + 3 = 5', () => {
    expect(suma(2,3)).toBe(5)
})

test('Resta: 5 - 2 = 3', () => {
    expect(resta(5,2)).toBe(3)
})

test('Multiplicacion: 3 * 4 = 12', () => {
    expect(multiplicacion(3,4)).toBe(12)
})

test('Division: 10/2 = 5', () => {
    expect(division(10,2)).toBe(5)
})