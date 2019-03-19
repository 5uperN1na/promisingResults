
//Add together 6 and 2.
slowMath.add(6, 2)
    .then((sum) => {
        console.log(`Sum of 6 and 2 is ${sum}`);
        //Wait on the result, log it, and then multiply the result by 2.
        return slowMath.multiply(sum, 2)
    }).then((product) => {
        console.log(`Product of 8 and 2 is ${product}`);
        //Wait on the result, log it, and then divide the result by 4.
        return slowMath.divide(product, 4)
    }).then((quotient) => {
        console.log(`Quotient of 16 and 4 is ${quotient}`);
        //Wait on the result, log it, and then subtract 3 from the result.
        return slowMath.subtract(quotient, 3)
    }).then((subtractResult) => {
        console.log(`Subtraction result of 4 and 3 is ${subtractResult}`);
        //Wait on the result, log it, and then add 98 to the result.
        return slowMath.add(subtractResult, 98)
    }).then((addNumber) => {
        console.log(`Addition of 1 and 98 is ${addNumber}`);
        // Wait on the result, log it, and then find the remainder from dividing the result by 2.
        return slowMath.remainder(addNumber, 2)
    }).then((remainNumber) => {
        console.log(`The remainder of 99 and 2 is ${remainNumber}`);
        //Wait on the result, log it, and then multiply the result by 50.
        return slowMath.multiply(remainNumber, 50)
    }).then((value) => {
        console.log(`The value of 50 * 49.5 is ${value}`);
        //Wait on the result, log it, and then find the remainder from dividing the result by 40.
        return slowMath.remainder(value, 40)
    }).then((val) => {
        console.log(`The remainder of 2475 and 40 is ${val}`);
        //Wait on the result, log it, and then add 32 to the result.
        return slowMath.add(val, 32)
    }).then((add32) => {
        console.log(`Adding 32 to 35 is ${add32}`);

        //Wait on the result, and then log: The final result is ___, where you fill in the blank with the final result.
    }).then((add32) => {
        console.log(`The final result is ${add32}`);















    })