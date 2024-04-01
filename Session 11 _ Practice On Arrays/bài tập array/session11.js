console.log("Hello World");

// Bài số 5:
// CÁCH 1:
// const arr = [10, 20, 5, -1, 8, 7];

// // B1: Tạo ra 1 mảng [] mới
// const newArr = []
// // B2: Duyệt qua; toàn bộ phần tử có trong mảng arr theo thứ tự
// // Từ cuối --> đầu
// for (let i = arr.length - 1; i >= 0; i = i - 1) {
//     newArr.push(arr[i]);
// }



// // B3:Tại mỗi lần duyệt (lặp), đẩy phần tử trong mảng arr cũ
// // vào mảng [] mới
// console.log("Reverse arr", newArr);

// // CÁCH 2:
// // .reverse() --> Đảo ngược lại vị trí của mảng gốc luôn
// // Đồng thời trả về kết quả là mảng mới bao gồm các vị trí 
// // phần tử đã đc đảo ngược
// const newArr2 = arr.reverse();

// console.log("newarr2", arr);

// ---------------------------------------------------

// Bài 6:
// const numbers = [10, 20, 5, -1, 8, 7];

// // Logic sắp xếp
// //
// // Sort - Sorting Algorithms ( Thuật toán sắp xếp)
// // Buble sort, Selection sort, insertion sort,
// // quick sort, merge sort, radis sort, ...

// // Output: [-1, 5, 7, 8, 10, 20]

// // Buble Sort (Sắp xếp nổi bọt)
// // Mấu chốt: So sánh các số từng đôi một
// // Lần lượt đổi chỗ số đằng trước và số đằng sau nếu trước > sau

// for(let j = 0; j <= numbers.length - 2; j++ ) {
//     console.log("lần nổi bọt", j);
// for (let i = 0; i <= numbers.length - 2 - j; i++) {
//     console.log(numbers[i], numbers[i + 1]);
//     // Tại mỗi lần lặp
//     // tiến hành so sánh numbers[i] và numbers[i + 1]
//     // nếu numbers[i] > numbers[i + 1] (đổi chỗ)
//     if (numbers[i] > numbers[i + 1]) {
//         // đổi chỗ 
//         let temp = numbers[i];
//         numbers[i] = numbers[i + 1];
//         numbers[i + 1] = temp;
//     }
// }
// }

// CÁCH 2: 
// // .sort()
// // tăng dần
// // numbers.sort(function (a,b) {
// // return a - b;
// // });

// // giảm dần
// // number.sort(function (a,b) {
// // return b - a;
// // });
// let newNumbers = numbers.sort(function (a, b) {
//     return a - b;
// })


// console.log(numbers);

// ------------------------------------------------------

// BÀI 7:

// const arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

// let userInput = 15;

// Mảng con 1 phần
// [1], [5], [6], [3] ... [7]

// Mảng con 2 phần tử
// [1, 5], [5, 6], [6, 3] ... [5, 6, 7]

// Mảng con 3 phần tử
// [1, 5, 6] ... [5, 6, 7]

// ...

// Mảng con 9 phần tử
// [1, 5, 6, 3, 2, 1, 1, 5, 6], [5, 6, 3, 2, 1, 1, 5, 6, 7]

// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//   let subArr = [];
//   subArr.push(arr[i]);
//   console.log(subArr);
// }

// for (let i = 0; i <= arr.length - 1 - 1; i = i + 1) {
//   let subArr = [];
//   //   subArr.push(arr[i]);
//   //   subArr.push(arr[i + 1]);
//   for (let j = i; j < i + 2; j = j + 1) {
//     subArr.push(arr[j]);
//   }
//   console.log(subArr);
// }

// for (let i = 0; i <= arr.length - 3; i = i + 1) {
//   let subArr = [];
//   for (let j = i; j < i + 3; j = j + 1) {
//     subArr.push(arr[j]);
//   }
//   console.log(subArr);
// }

// -----

// for (let k = 1; k <= arr.length - 1; k = k + 1) {
//   for (let i = 0; i <= arr.length - k; i = i + 1) {
//     let subArr = [];
//     for (let j = i; j < i + k; j = j + 1) {
//       subArr.push(arr[j]);
//     }
//     let total = 0;
//     for (let el of subArr) {
//       total = total + el;
//     }
//     if (total === userInput) {
//       console.log(subArr);
//       userInput = 0;
//     }
//   }
// }

// ---------------------------------------------

// BÀI 8:

const arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

// [1, 5, 6, 3, 2, 7]
let newArr = [];
let moreThanOne = [];
for (let i = 0; i <= arr.length - 1; i = i + 1) {
    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
    } else {
        if (moreThanOne.indexOf(arr[i]) === -1) {
            moreThanOne.push(arr[i]);
        }
    }
}