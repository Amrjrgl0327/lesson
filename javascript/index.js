//let num = 5;
//if ( number > 0 ) {
//console.log ("positive");
//}
//else {
//    console.log ("negative");
//}


//let number = 9;
//if ( number % 2 === 0) {
//console.log("even");
//} else {
// console.log("odd");
//}



//let num1 = 3;
//let num2 = 9;
//if (num1 > num2) {
// console.log("num1");
//} else {
//console.log("num2");
//}



// let score = 85;
// let grade;
// if (score > 90) {
//     console.log("grade = A")
// } else if (score > 80) {
//     console.log("grade B")
// }else if (score > 70) {
//     console.log("grade C")
// }else if (score > 60) {
//     console.log("grade D")
// }else if (score < 60) {
//     console.log("grade F")
// }



//let age = 13;
// let TicketPrice;
// if (age < 12) {
//     TicketPrice = 5;
// } else if (age >= 12 && age < 18) {
// TicketPrice = 10;
// } else if (age >= 18 && age < 60) {
//  TicketPrice = 20;   
// } else {
//     TicketPrice = 15; 
// }
// console.log("Ticket Price: $" + TicketPrice);



//  for (let i = 1; i < 11; i++) {
//     console.log(i);
//  }

//  for (let i = 10; i > 0; i--) {
//     console.log(i);
//  }



// for (let i = 2; i < 11; i += 2) {
//     console.log(i);
// }


// let sum = 0
// for (let i = 1; i <= 10; i++ ) {
// sum += i;
// }

// console.log(sum);


// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// for(let i = 0; i < 9; i++) {
//     console.log(arr[i]);
// }



// let sum = 0
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);





// const arr = [-9, 3, 5, -5, 20, 30, 50] ;
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }


// console.log(min);





// const arr = [-9, 3, 5, -5, 20, 30, 50] ;
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {  
//      if (max < arr[i]) {
//         max = arr[i];
//     }
//  }


//  console.log(max);



// const arr = [-9, 3, 5, -5, 20, 30, 50] ;
// let max = arr[0];
// let index = 0;
// for (let i = 1; i < arr.length; i++) {  
//      if (max < arr[i]) {
//         max = arr[i];
//         index = i;
//     }

//  }


//  console.log("Hamgiin ih utga", max);
// console.log("Hamgiin ih utga ni" , index, "dahi element");



// const arr = [-9, 3, 5, -5, 20, 30, 50] ;
// arr.reverse();
//     console.log(arr);




// const arr = [1, 4, 3, 9, 6, 5, 20];
// let count = 0;
// for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) { 
//         count++;
//     }
// } 

// console.log(count)


// const arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length -1; i++) {
//     console.log(arr[i].toString()+arr[i + 1].toString());
// }

// 0 1, 0 2, 0 3 
// 1 2, 1 3
// 2 3



// const arr = [
//     [1, 2, 3]
//     [4, 5, 6]
//     [7, 8, 9]
// ];

// let sum = 0;


// const arr = [ 7, 6, 4, 3]
// addDigits = function (num) {
//     while (num > 9) {
//         let sum = 0;


//         while(current > 0) {
//             const LastDigit = current % 10;
//             sum += LastDigit;
//             current = (current - LastDigit) / 10;
//         }
//         num = sum;
//     }
// }
// return num;



// const obj = {
//     name: "Amarjargal",
//     age: 35,
//     height: 160,
//     isStudent: true
// };
// console.log(obj.isStudent);




// map
// const arr = [2, 4, 6, 8];
// const squares = arr.map((currentElement) => {
//     return currentElement * currentElement;
// });
// console.log(squares);



// Find
// const arr = [1, 2, 3, 4, 5];
// const num = Arr.find((item, index) => {
//     return item > 3 && index < 3;
// });
// console.log(num);





// const arr = [1, 3, 2, 4, 5];
// const arr2 = [...arr]
// .sort((a, b) => a - b)
// .map((item) => item * item)
// .filter((item) => item > 10);

// console.log(arr2);


// String



// const isPalindrome = (s) => {
// let reversed = " ";
// for (let i = s.length - 1; i >= 0; i--) {
//     reversed = reversed + s[i];
// }
// }
// return reversed === s;




// const swap = (arr, i, j) => {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// };


// const bubbleSort = (arr) => {
//     for(let k = 0; k < arr.length; k++) {
//         for(let i = 0; i < arr.length - 1 - k; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, i, i + 1);
//             }
//         }
//     }
//     return arr;
// };

// console.log(bubbleSort([42, 0, 10, 2, 7, 44, 35, 20]));




// bodlogo 387 String
// 

  




// bodlogo 657
// 



// 3024

// var triangleType = function (nums) {
//     nums.sort((a, b) => a - b)
//     if(nums[0] + nums[1] > nums[2]) {
//         if (nums[0] === nums[1] && nums[0] === nums[2]) {
//             return "equilateral";
//         }else if (nums [0] === nums[1] || nums[1] ===nums[2]) {
//             return "isosceles";
//         } else {
//             return "scalene";
//         }
//     } else   {
//     } return "none";
//     };

