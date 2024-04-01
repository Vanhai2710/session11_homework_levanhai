// Tìm hiểu về tham chiếu và tham trị trong javascript và cách bộ nhớ máy tính hoạt động với chúng.
// Chạy đoạn code sau, giải thích dựa trên kết quả đã tìm hiểu và tạo ra mảng mới 
// giống với mảng đã khai báo mà không liên quan đến mảng cũ:


//      let numbers = [1, 2, 3, 4, 5]; 
//      let newArr = numbers;
//      newArr.push(8);
//      console.log(newArr);
//      console.log(numbers);

// -----------------------------

// Tham chiếu:
// - Khi gán 1 biến bằng 1 mảng, Biến đó sẽ tham chiếu đến vị trí bộ nhớ của mảng.
// - Thay đổi mảng thông qua biến đó sẽ ảnh hưởng đến mảng gốc.

// Tham trị:
// - Khi bạn gán 1 biến bằng 1 giá trị nguyên thủy (số, chuỗi), Biến đó sẽ lưu trữ giá trị của nó.
// - Thay đổi giá trị của biến không ảnh hưởng đến giá trị gốc.


// let numbers = [1, 2, 3, 4, 5]; 
// let newArr = numbers;
// newArr.push(8);
// console.log(newArr);  // [1, 2, 3, 4, 5, 8]
// console.log(numbers); // [1, 2, 3, 4, 5, 8]


// Giải thích:
// - Biến numbers tham chiếu đến một mảng trong bộ nhớ.
// - Biến newArr được gán bằng numbers, nghĩa là nó cũng tham chiếu đến cùng một mảng trong bộ nhớ.
// - Gọi newArr.push(8), mảng được tham chiếu bởi newArr (và numbers) được mở rộng và thêm phần tử 8.
// -  cả newArr và numbers đều chứa mảng [1, 2, 3, 4, 5, 8]


// Tạo mảng mới ko liên quan đến mảng cũ:
let numbers = [1, 2, 3, 4, 5];
let newArr = [];
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i]);
}
newArr.push(8);
console.log(newArr); // [1, 2, 3, 4, 5, 8]
console.log(numbers); // [1, 2, 3, 4, 5]