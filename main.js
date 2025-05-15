
//add two number

function add(x, y){
    let result = x + y;
    return  result;

}

let totalSum = add(4,5) + add(9,2) + add(3,7);

console.log("Addition of multiple numbers : " + totalSum);

// even or odd namuber finding

function isEven(number){

    // if(number % 2 === 0){
    //     return console.log("Even");
    // } else{
    //     return console.log("Odd");
    // }

    //using ternary operator

    return (number % 2 === 0) ? console.log("The number is Even") : console.log("The number is Odd");
}

isEven(18);



// Celsius to Fahrenheit

function cToF(celsius){
    return console.log("Celsius to Fahrnheit = " + (celsius * 9/5) + 32);
}

cToF(3);


// square of a number

function squareNum(number){
    return  console.log("Square of a Number : " + (number * number));
}

squareNum(4);