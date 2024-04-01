
// Viết chương trình khai báo mảng gồm nhiều phần tử bất kì,
// Tìm ra phần tử đầu tiên là độc nhất trong mảng,
// In phần tử đó ra màn hình console.


// Khai báo mảng
let numbers = [2, 7, 5, 3, 2, 8, 9];

// Biến lưu trữ phần tử độc nhất
let uniqueElement = null;

// Duyệt từng phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
    if (numbers.slice(i +1).indexOf(numbers[i]) === -1) {
        uniqueElement = numbers[1];
        break;
    }
}

// In ra phần tửu độc nhất
if (uniqueElement !== null) {
    console.log(`Phần tử đầu tiên là độc nhất trong mảng: ${uniqueElement}`);
} else {
    console.log(`mảng không có phần tử nào là độc nhất!!!`);
}