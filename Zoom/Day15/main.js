let n = 7; // Bạn muốn in ra 7 số

let so_truoc = 0;
let so_hien_tai = 1;

console.log("Dãy số Fibonacci của bạn là:");

for (let i = 1; i <= n; i++) {
    // 1. In số hiện tại ra trước
    console.log(so_truoc); 

    // 2. Tính số tiếp theo bằng tổng 2 số trước nó
    let so_tiep_theo = so_truoc + so_hien_tai; 

    // 3. Tiến lên một bước (Chuyền giá trị)
    so_truoc = so_hien_tai;       // Số trước tiến lên thành số hiện tại
    so_hien_tai = so_tiep_theo;   // Số hiện tại tiến lên thành số vừa tính xong
}