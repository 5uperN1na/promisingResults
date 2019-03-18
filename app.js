

slowMath.add(6, 2)
    .then((sum) => {
        console.log(`Sum of 6 and 2 is ${sum}`);
        return slowMath.multiply(sum, 2)
    }).then((product) => {
        console.log(`Product of 8 and 2 is ${product}`);
        return slowMath.divide(product, 4)
    }).then((quotient) => {
        console.log(`Quotient of 16 and 4 is ${quotient}`);
        return slowMath.subtract(quotient, 3)
    }).then((subtractResult) => {
        console.log(`Subtraction result of 4 and 3 is ${subtractResult}`);
        return slowMath.add(subtractResult, 98)
    }).then((addNumber) => {
        console.log(`Addition of 1 and 98 is ${addNumber}`);
        return slowMath.remainder(addNumber, 2)
    }).then((remainNumber) => {
        console.log(`The remainder of 99 and 2 is ${remainNumber}`);









    })