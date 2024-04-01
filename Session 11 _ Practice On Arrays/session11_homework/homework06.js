
// Viết chương trình khai báo mảng gồm nhiều phần tử bất kì,
// Sắp xếp mảng đã khai báo theo thứu tự ngẫu nhiên ,
// In mảng mới ra màn hình console.

// Khai báo mảng
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Hàm hoán đổi vị trí của 2 phần tử trong mảng
function swap(numbers, i, j) {
    const temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}

// Hàm sắp xếp mảng theo thứ tự ngẫu nhiên
function shuffleArray (numbers) {
    for (let i = numbers.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        swap(numbers, i, randomIndex);
    }
}

// Sắp xếp mảng
shuffleArray (numbers);

// In ra mảng mới
console.log(`Mảng mới sau khi sắp xếp ngẫu nhiên: ${numbers}`);