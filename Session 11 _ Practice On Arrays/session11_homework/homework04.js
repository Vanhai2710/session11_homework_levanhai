
// Viết chương trình khai báo mảng số nguyên gồm nhiều phần tử,
// tiến hành chia mảng ban đầu thành 2 mảng khác nhau,
// 1 mảng chỉ chứa số chẵn, 1 mảng chỉ chứa số lẻ 
// in 2 mảng đó ra màn hình console.


// Khai báo mảng.
let numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Tạo mảng mới để lưu trữ số chẵn và số lẻ
let evenArr = [];
let oddArr  = [];

// Duyệt qua từng phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
    // Kiểm tra xem phần tử hiện tại có chẵn hay ko
    if (numbers[i] % 2 === 0) {
        // thêm phần tử chẵn vào mảng evenArr.
        evenArr.push(numbers[i]);
    } else {
        // Thêm phần tử lẻ vào mảng
        oddArr.push(numbers[i]);
    }
}

// In 2 mảng ra màn hình.
console.log(`Mảng chứa số chẵn: [ ${evenArr} ]`);
console.log(`Mảng chứa số lẻ: [ ${oddArr} ]`);