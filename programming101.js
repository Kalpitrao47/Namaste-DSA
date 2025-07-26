// console.log("Hello World");

// Data Types:
// 1.String: "Kalpit" , "12345"
// 2.Number:  12345
// 3. Boolean: true,false

//Sum of 2 Numbers
let a = 10;
let b = 40;

let c = a+b;
console.log(c);

//Concat 2 Strings

let firstName = "Kalpit"
let lastName = "Raorane"

let fullName = firstName + " " + lastName
console.log(fullName)


// Remember This : If u remove String then it will actually do a mathematical operation.And if u put " " anywhere 
// u would get string.5
let fName = 3
let lName = 7

let fuName = fName + lName
console.log(fuName)


// Array:Store Multiple values: i.e:number,string, boolean
let arr = [5,10,2,0,1];
console.log(arr[2])

let arr1 = ["Kalpit", 7,[5,10,[2,30]]]
console.log(arr1[2][2][1]) 


//Objects:Stores Key Value Pairs:
const obj = {
    a : 7,
    name : "kalpit",
    bool:"true",
    arr : [6,7,8,5 ]
}

console.log(obj.arr)