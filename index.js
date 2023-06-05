const axios = require('axios');//http library 

//api call used to call one by one
async function callApiForSolving(expression) {
    const apiUrl = 'https://api.mathjs.org/v4/';
    const res = await axios.get(apiUrl, {
        params: {
            expr: expression
        }
    })
    return res.data;
}

//driver function for each test case
async function solveExpressions(expressions) {
    //loop to iterate over all the expressions
    for (const expression of expressions) {
        if (expression === 'end') {
            break;
        }
        //code with error handling
        try {
            const result = await callApiForSolving(expression);
            console.log(`${expression} => ${result}`);
        } catch (error) {
            console.log(`${expression} => Error: ${error.message}`);
        }
    }
}

// test cases hardcoded
const exp1 = ['2 * 4 * 4', '5 / (7 - 5)', 'sqrt(5^2 - 4^2)', 'end'];
const exp2 = ['2 * 4 * 4 * 2 * pow(10,2)', 'end'];
solveExpressions(exp2);