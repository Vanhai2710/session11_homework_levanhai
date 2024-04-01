
// Viết chương trình yêu cầu người dùng nhập vào 1 chuỗi bất kỳ, 
// xây dựng hàm có tham số là 1 chuỗi và kết quả trả về là mảng 
// chứa tất cả các chuỗi con trong chuỗi truyền vào.
// Gọi hàm với chuỗi đã nhập và in kết quả ra màn hình.
// Ví dụ nhập vào abc thì kết quả trả về là 
// [“a”, ”ab”, ”abc”, ”b”, ”bc”, ”c”].


// Yêu cầu người dùng nhập vào chuỗi
let inputString = prompt("Nhập vào 1 chuỗi:");

function subStrings(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j <= input.length; j++) {
            result.push(input.slice(i, j));
        }
    }
    return result;
}

// Gọi hàm và in kết quả ra màn hình
console.log(subStrings(inputString));