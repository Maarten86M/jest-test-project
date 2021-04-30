// importeren van de functie index.js
const { calculateNum } = require('../index');

test("CalculateNum, multiplied two number with each other", function () {

    // Arrange
    const number1 = 10;
    const number2 = 20;

    // Act
    const sum = calculateNum(number1,number2);

    // Assert (geeft terug wat de waarde zou moeten zijn. Dus het antwoord uit SUM).
    expect(sum).toBe(200);

})


