
// Viết chương trình yêu cầu người dùng nhập vào 2 số nguyên a và b,
// Tạo ra mảng chứa tất cả các số trong khoảng giữa a và b,
// In mảng đó ra màn hình console.


// Yêu cầu người dùng nhập vào a và b.
let a = Number(prompt("Nhập vào số nguyên a."));
let b = Number(prompt("Nhập vào số nguyên b."));

// tạo mảng mới.
let newArr = [];

// Duyệt từ a đến b và thêm các số vào mảng .
for (let i = a + 1; i < b; i++) {
    newArr.push(i);
}

// In mảng ra màn hình.
console.log(`Mảng chứa các số trong khoảng ${a} và ${b}: [${newArr}]`);