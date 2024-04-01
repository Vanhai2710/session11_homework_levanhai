// Viết chương trình khai báo mảng gồm nhiều phần tử bất kỳ,
// tìm ra mảng con chứa các phần tử phân biệt có độ dài lớn nhất. 


// let arrayInput = [1, 2, 1, 3, 4, 1, 3, 2, 6, 8, 9];
// function childArr(arr) {
//     let count = new Map();
//     let maxLength = 0;
//     let start = 0;
//     let maxStart = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (!count.has(arr[i])) {
//             count.set(arr[i], 1);
//         } else {
//             count.set(arr[i], count.get(arr[i]) + 1);
//         }

//         while (count.get(arr[i]) > 1) {
//             count.set(arr[start], count.get(arr[start]) - 1);
//             start++;
//         }

//         if (i - start + 1 > maxLength) {
//             maxLength = i - start + 1;
//             maxStart = start;
//         }
//     }

//     return arr.slice(maxStart, maxStart + maxLength);
// }

// console.log(childArr(arrayInput)); // Output: [3, 4, 1, 3, 2, 6, 8, 9]

