
// Viết chương trình khai báo mảng bất kì, xây dựng hàm có tham số là 1 mảng
// có kết quả trả về là mảng con của mảng truyền vào chỉ chứa các phần tử phân biệt.
// Gọi hàm với mảng đã khai báo và in kết quả ra màn hình. 
// Ví dụ khai báo mảng [1, 2, 1, 3, 4, “f”], kết quả trả về là [2, 1, 3, 4, “f”].


// Khai báo mảng bất kỳ
let inputArr = [1, 2, 1, 3, 4, "f"];  

function childArr(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        if (result.indexOf(element) === -1) { 
            result.push(element);
        }
    }
    return result;
}

// Gọi hàm và in kết quả ra màn hình
console.log(childArr(inputArr));