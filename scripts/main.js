"use strict";

//let message; // undefined data type

    //message = "hello"; // store the string

//console.log( message ); // typeof before message will tell us what ddata type it is

//let number = 25; // a number data type

//let nameFieldChecked = true; // Boolean data type

//let isGreater = 4 > 1;

//let age = null; // null data type

// -DATA TYPES-
// string - series of characters
// number - for numbers of any kind
// boolean - true or false
// null - no value
// undefined - any undefined values

// bigInt - 
// objects - object, array
// symbol - unique identifier


//alert("hello"); // pop up box

// let result = prompt("What is your name?"); //text field in pop up box

// alert(result);

// let isBoss = confirm("Are you the boss?"); // a comfirm

// alert(isBoss);

// let value = true;
// alert( typeof value); // boolean

// value = String( value );
// alert(typeof value);

// let str = "123"
// alert(typeof str);

// let num = Number(str);
// alert(typeof num);

// let sum = 1 + 4; // 5
//     sum = 1 - 3;
//     sum = 3 * 4;
//     sum = 1 / 4;
//     sum = 4 % 7; // answer would be how many are left over after you divide it

// let accessAllowed;
// let age = prompt("How old are you?");

// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// let accessAllowed = (age > 18) ? true ; false

// alert(accessAllowed);

let counter = 0;

while ( counter < 3 ) {
    alert( counter );
    counter++;
}

for (let counter = 0; counter < 3; counter ++) { //++ automatically adds one
    alert( counter );
}