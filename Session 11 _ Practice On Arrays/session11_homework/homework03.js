
// Viết chương trình khai báo mảng số nguyên gồm nhiều phần tử,
// tiến hành xóa tất cả các phần tử lẻ trong mảng và in mảng mới ra màn hình console.


// Khai báo mảng.
let numbers = [9, 3, 5, 4, 6, 6];

// tạo mảng mới lưu trữ các phần tử chẵn.
let newArr = [];

// Duyệt từng phần tửu trong mảng.
for (let i = 0; i <= numbers.length; i++) {
    // kiểm tra phần tử hiện tại có phải là số chẵn
    if (numbers[i] % 2 === 0 ) {
        // Thêm phần tử chẵn vào mảng mới.
        newArr.push(numbers[i]);
    }
}

// In ra mảng mới.
console.log(`Mảng mới sau khi xóa các phần tử lẻ: ${newArr}`);