//Print hello world on the console using for loop 5 times.

// for(let i=0; i<5; i++){
//     console.log("Hello world")
// }

//Print all the odd numbers in an array.

let arr = [2,53,45,12,96,84,52,36]

function oddNumbers (arr) {
    for (let i=0; i<arr.length; i++ ){
        if(arr[i] %2 == 1){
            console.log(arr[i]);
        }
    }
}

oddNumbers(arr)

