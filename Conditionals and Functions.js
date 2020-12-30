/*
 * Conditionals, Functions, Scope, and Loop.
 */

// Equals
letequals = 1 === 1;

// Greater than
letgreaterThan = 5 > 1;

// Less than
letlessThan = 2 < 10;

// Greater than Equals
letgreaterThanEq = 5 >= 5;

// Less than Equals
letlessThanEq = 4 <= 9;

// Not Equals
letnotEquals = 5 !== 2;



letstoreA = 4.40;
letstoreB = 4.40;

//function compareStorePrices (letstoreA , letstoreB) {
let letstoreAIsLower = letstoreA < letstoreB, letsquared
    if (letstoreAIsLower) {
        console.log ("Store A has a lower price.")
    } else if (letstoreB > letstoreA) {
        console.log ("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
//}

//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

function squareNum (number) {
        letsquared = number * number;
        return letsquared;
}

letsquaredNumber = squareNum (7);
console.log(letsquaredNumber);

letx = 10;

function addNumbers (n, m, x) {
    console.log (x);
    let b;
    if (1 === 1) {
        b = 8
    }
    console.log (b)
    return n + m;
}

addNumbers(1, 2, 10)


/*
//             0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen.length; i++){
    //console.log("I is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('j is equal to: ' + j)
    }
}
*/

let x = 0
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}