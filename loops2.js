//Write a function that searches for an element in an array and returns
// the index, if the element is not present then just return -1

// let arr = [4,2,0,10,8,30];

// function searchElem(arr,e){
//     for (let i =0;i<arr.length;i++){
//         if (arr[i] == e){
//             return i;
//         }
//     }
//     return -1
// }

// // searchElem(arr,10)
// // let ans = searchElem(arr,30)
// let ans = searchElem(arr,80)
// console.log(ans)


//Write a function that returns the number of negatives in an array

// let arr = [2,-9,17,0,-10,-4,-8]

// function negatives(arr){
//     let count = 0
//     for (let i =0;i<arr.length;i++){
//         if (arr[i]< 0){
//             count = count+1
//         }
//     }
//     return count
// }

// // negatives(arr)
// let ans = negatives(arr)
// console.log(ans)


//Write a function to find the smallest number in an array.

let arr = [2,-9,17,0,-10,-4,-18]

function smallest(arr){
    let smallest = arr[0]
    for (let i = 0; i<arr.length; i++){
        if(arr[i]< smallest){
            smallest = arr[i]
        }
    }
    return smallest;
}
console.log(smallest(arr))