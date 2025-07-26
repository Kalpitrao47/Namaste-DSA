function printHelloworld(){
    console.log("hello world")
}
printHelloworld();


function greet(name) {
    console.log("Namaste" + " " + name)
}

let x = "Virat Kohli"
greet("Kalpit")
greet("Akshay")
greet(x)


//Create a Function that can add 2 Numbers:
function add(a,b){
    console.log(a+b);
}

add(7,8)

//Now suppose u dont want to print the value,instead return the value
//Write a function which gives me the square of the number

function square(sq){
    let square = sq*sq
    return square
}
console.log(square(27));

//Create a function to check if the person is eligible to vote or not?
function egVote(age){
    if (age < 1) {
        console.log(
            "Age is not valid"
        )
    }
    else if (age >= 18){
        console.log("Eligible to vote");
    }
    else {
        console.log("Not Eligible");
    }
}

egVote(-3)
egVote(3)
egVote(30)
egVote(19)


//Write a function to check if the number is even or odd.
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}
checkEvenOrOdd(18);
checkEvenOrOdd(5);