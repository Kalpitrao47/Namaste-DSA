//Write a function to find the secondLargest number in an array.

let arr = [5,6,42,15,63,85,42,96]

function secondLargest(arr){
    let firstLarge = -Infinity
    let secondLarge = -Infinity
    for (let i = 0;i<arr.length;i++){
        if(arr[i] > firstLarge){
            debugger
            secondLarge = firstLarge
            firstLarge = arr[i];
        }
    }
    return secondLarge;
}

console.log(secondLargest(arr))