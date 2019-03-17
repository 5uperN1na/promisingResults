

slowMath.add(6, 2)
    .then((sum) => {
        console.log(`Sum of 6 and 2 is ${sum}`);
        return slowMath.multiply(sum, 2)
    }).then((product) => {
        console.log(`Product of 8 and 2 is ${product}`);
        return slowMath.divide(product, 4)
    }).then((quotient) => {
        console.log(`Quotient of 16 and 4 is ${quotient}`);
    
    




})