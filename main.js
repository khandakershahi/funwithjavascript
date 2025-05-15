
//add two number

function add(x, y){
    let result = x + y;
    return  result;

}

let totalSum = add(4,5) + add(9,2) + add(3,7);

console.log("Addition of multiple numbers : " + totalSum);


//  myltiply two numbers
function multiply(a,b){
    if (typeof(a) !== "number"){
        return console.log("1st Number is not a valid number");
    } else if ( typeof(b) !== "number"){
        return console.log("2nd Number is not a valid number");
    }else{
        return console.log(`Multiplication of two number is: ` + (a * b));
    }
}

multiply(5,4);

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


// get first charecter of a string

function firstChar(myStr){
    return console.log(`First Charecter of ${myStr} is: ` + myStr.charAt(0));
}

firstChar("Bangladesh");


// Is the number positive or negetive

function checkNum(number){
       return (number >= 0) ? console.log(`${number} is Positve`) : console.log(`${number} is Negetive`);
}

checkNum(0);

// Convert minutes to seconds

function mToS(minute){
    return console.log(`Converted Minutes to Second is : ` + (minute * 60))
}

mToS(60);


// concatenate two strings

function concatenate(a,b){
        return console.log(`Concatenation of two string is : ` + a + " " + b);
}

concatenate("Hello", "Bangladesh")


// find a word in a sentence inlcudes 

function checkStr(sentence, word){
    return console.log(`The sentence include the word ${word} is : ` + sentence.includes(word));
    
}
checkStr("Dhaka is the capital of Bangladesh", "Dhaka");