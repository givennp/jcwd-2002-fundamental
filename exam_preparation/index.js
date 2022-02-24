// // 1. sum of positives and negatives
// // input: sebuah array
// // output: sebuah array - > [<sum_of_positives>,<sum_of_negatives]
// // example input : [1, 3, -4, 2, -13, -7]
// // example output : [6, -24]

// let arr = [1, 3, -4, 2, -13, -7]


// const sumOfPositivesAndNegatives = (arr = []) => {
//     let positives = 0
//     let negatives = 0
    
//     arr.forEach((val) => {

//         if(val < 0){
//             negatives += val

//         }else if(val > 0){
//             positives += val
//         }
//     })

//     return [positives, negatives]
//     }
    


// // console.log(sumOfPositivesAndNegatives(arr));

// let numbers = [1, 6, 12, 4, 5, 8];

// // const squareNum = () => {
    
// //     let resultArr = numbers.map((val) => {
// //         return val * val
// //     })

// //     return resultArr
// // }

// // console.log(squareNum(numbers));

// const plusMin = (arr = []) => {
//     let operator = "+"
//     let result = 0
    
//     arr.forEach((val) => {
//         if(operator == "+"){
//             result += val
//             operator = "-"

//         }else if (operator == "-"){
//             result -= val
//             operator = "+"
//         }

//     })
//     return result

// }
// console.log(plusMin([1, 4, 2]));


function likes(names) {
    if (names.length === 0) {
        return 'no one likes this';
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`;
    }
}

console.log(likes(["mark", "anjay", "goblok", "mantep"]));