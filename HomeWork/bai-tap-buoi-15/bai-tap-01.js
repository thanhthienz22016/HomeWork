/*
Bài tập 1:
*/ 
// Viết hàm classifyTriangle(a, b, c) nhận vào ba số là độ dài ba cạnh, trả về một chuỗi mô tả loại hình tạo thành.
// Yêu cầu xử lý các trường hợp sau theo đúng thứ tự ưu tiên:
// Nếu một trong ba cạnh có giá trị nhỏ hơn hoặc bằng 0, trả về "Cạnh không hợp lệ".
// Nếu ba cạnh không thỏa bất đẳng thức tam giác (tổng hai cạnh phải lớn hơn cạnh còn lại), trả về "Không tạo thành tam giác".
// Nếu ba cạnh bằng nhau, trả về "Tam giác đều".
// Nếu có đúng hai cạnh bằng nhau, trả về "Tam giác cân".
// Nếu tam giác có một góc vuông (kiểm tra bằng định lý Pythagoras), trả về "Tam giác vuông".
// Còn lại, trả về "Tam giác thường".

// Kịch bản luồng suy nghĩ:
// 1. Đầu tiên tôi cần check điều kiện 3 cạnh phải nếu nhỏ hơn hoặc bằng 0 thì trả về Cạnh không hợp lệ (nếu khong rơi vào trường hợp này nó nhảy vào nhánh tiếp theo bên dưới)
// 2. tiếp theo tôi check thêm điều kiện, tôi sẽ lấy 1 cạnh làm tổng để so sánh ví dụ a+ b > c trả về  "Không tạo thành tam giác".
// ==> Sửa logic: a + b <= c hoặc a + c <= b hoặc b + c <= a trả về "Không tạo thành tam giác"

// 3. Tiếp theo nếu như a === b và b === c thì trả về là "Tam giác đều"

// 4. Và tiếp theo check 3 trường hợp nếu trúng 1 trong ba như sau a === b hoặc a === c hoặc c === b thì sẽ trả về tan giác cân
// 5. tôi phải tính được giá sử tôi lấy 2 cạnh ngẫu nhiên bình phương lên mà nó bằng cạnh còn lại khi bình phương lên thì trả về "Tam giác vuông". giả sử phần này tôi sẽ cho check 3 điều kiện trong else if a**2 + b**2 === c**2 hoặc a**2 + c**2 === b**2 hoặc c**2 + b**2 === a**2

// 6. else cuối cùng là trả về tam giác thường

 
function classifyTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <=0) {
        return "Cạnh không hợp lệ";
    } else if(a + b <= c || a + c <= b || b + c <= a) {
        return "Không tạo thành tam giác";
    } else if (a === b && b === c) {
        return "Tam giác đều";
    } else if (a === b || a === c || c === b) {
        return "Tam giác cân";
    } else if (a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || c**2 + b**2 === a**2) {
        return "Tam giác vuông";
    }
    return "Tam giác thường";
}

// Giả lập test case
 console.log(classifyTriangle(0, -1, 0));
 // → "Cạnh không hợp lệ"

console.log(classifyTriangle(3, 4, 5));
 // → "Tam giác vuông"

console.log(classifyTriangle(2, 2, 3));
 // → "Tam giác cân"

console.log(classifyTriangle(2, 2, 2));
 // → "Tam giác đều"

console.log(classifyTriangle(1, 2, 10));
 // → "Không tạo thành tam giác"

console.log(classifyTriangle(5, 7, 11));
 // → ""Tam giác thường""

