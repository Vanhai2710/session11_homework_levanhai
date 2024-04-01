
// Viết chương trình khai báo 1 mảng số nguyên gồm các phần tử bất kì,
// tìm ra phần tử lớn nhất và nhỏ nhất trong mảng và in ra màn hình console.


// Khai báo mảng.
let arr = [0, 9, 3, 5, 4, 6, 6, 0, 3, 0];

// tạo biến lưu trữ phần tử lớn nhất và nhỏ nhất.
let max = arr[0];
let min = arr[0];

// Duyệt qua từng phần tử trong mảng.
for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    } else if (arr[i] < min) {
        min = arr[i];
    }
}

// In kết quả ra màn hình
console.log(`Phần tử lớn nhất trong mảng: ${max}`);
console.log(`Phần tử nhỏ nhất trong mảng: ${min}`);