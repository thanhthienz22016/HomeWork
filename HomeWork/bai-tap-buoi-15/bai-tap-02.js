function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = [];
        
        for (let j = 1; j <= i; j++) {
            // Ưu tiên 1: Chia hết cho cả 3 và 5 (tức là chia hết cho 15)
            if (j % 15 === 0) {
                row.push("#");
            } 
            else if (isPrime(j)) {
                row.push("*");
            } 
            else {
                row.push(j);
            }
        }
        
        console.log(row.join(" "));

        if (i % 2 === 0) {
            let dashLine = "";
            for (let d = 1; d <= i; d++) {
                dashLine += "-";
            }
            console.log(dashLine);
        }
    }
}

printTriangle(15);