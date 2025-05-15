
//add two number

function add(x, y){
    let result = x + y;
    return result;

}

let totalSum = add(4,5) + add(9,2) + add(3,7);

console.log(totalSum);

// even or odd namuber finding

function isEven(number){

    // if(number % 2 === 0){
    //     return console.log("Even");
    // } else{
    //     return console.log("Odd");
    // }

    //using ternary operator

    return (number % 2 === 0) ? console.log("Even") : console.log("Odd");
}

isEven(18);



// Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
    return console.log((celsius * 9/5) + 32);
}

celsiusToFahrenheit(2);


