// ================  Bài 1  ===========================

// const products = [
//   { id: 1, name: "MacBook Pro", price: 2000, category: "Laptop" },
//   { id: 2, name: "iPhone 15", price: 1000, category: "Phone" },
//   { id: 3, name: "Bàn phím cơ", price: 150, category: "Accessories" },
//   { id: 4, name: "Màn hình Dell", price: 500, category: "Monitor" },
// ];

// const orders = [
//   { orderId: "ORD01", productId: 2, quantity: 2, status: "completed" },
//   { orderId: "ORD02", productId: 1, quantity: 1, status: "pending" },
//   { orderId: "ORD03", productId: 4, quantity: 3, status: "completed" },
//   { orderId: "ORD04", productId: 3, quantity: 1, status: "canceled" },
//   { orderId: "ORD05", productId: 2, quantity: 1, status: "completed" },
// ];

// const completedOrderDetails = orders.filter(order => order.status === "completed")
// .map(order => {
//     const calculatoredProduct = products.find(p => p.id === order.productId)
//     return {
//         idDonHang: order.orderId,
//         tenSanPham: calculatoredProduct.name,
//         tongTien: calculatoredProduct.price * order.quantity
//     }
// })

// console.log(completedOrderDetails);

// ================  END  ===========================

const text = "javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server";

// Hàm 1: getWords(text)
// Tách đoạn văn thành mảng các từ.
function getWords(text) {
   return text.split(" ");
}
// console.log(getWords(text));

// Hàm 2: countWord(text, word)
// Đếm số lần xuất hiện của một từ trong đoạn văn (phân biệt chữ hoa/thường).
function countWord(text, word) {
    return getWords(text).filter(w => w === word).length;
}
// console.log(countWord(text, "javascript"));


// Hàm 3: getUniqueWords(text)
// Trả về mảng các từ không trùng lặp, sắp xếp theo thứ tự alphabet.
function getUniqueWords(text) {
     return [...new Set(getWords(text))].sort();
}

// console.log(getUniqueWords(text));

// Hàm 4: getTopWords(text, n)
// Trả về mảng n từ xuất hiện nhiều nhất, mỗi phần tử là object { word, count }, sắp xếp theo count giảm dần.
function getTopWords(text, n) {
    const words = getWords(text);

    const wordCountObj = words.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] = acc[curr] + 1; 
        } else {
            acc[curr] = 1;            
        }
        return acc; 
    }, {});

    const wordCountArray = Object.keys(wordCountObj).map(tuKhóa => {
        return {
            word: tuKhóa,
            count: wordCountObj[tuKhóa]
        };
    });

    wordCountArray.sort((a, b) => b.count - a.count);
    // wordCountArray.sort((a, b) => a.count - b.count);

    
    return wordCountArray.slice(0, n);
}


// console.log(getTopWords(text, 3));

// [
//   { word: 'javascript', count: 3 },
//   { word: 'trình', count: 2 },
//   { word: 'chạy', count: 2 }
// ]


// Hàm 5: highlight(text, word)
// Trả về chuỗi gốc nhưng mỗi lần xuất hiện từ word được bọc trong **...**.
// Ví dụ: "javascript" → "**javascript**"
// const highlight = (text, word) => {
//     return text.split(word).join(`**${word}**`);
// }

// console.log(highlight(text, "javascript"));

// Test hàm mới
function highlight(text, word) {
    return text.replaceAll(word, `**${word}**`);

}
console.log(highlight(text, "javascript"));


// highlight(text, "javascript")
// "**javascript** là ngôn ngữ lập trình phổ biến **javascript** chạy trên trình duyệt và **javascript** cũng chạy trên server"