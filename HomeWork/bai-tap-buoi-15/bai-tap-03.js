function analyzeClass(scores) {
    let validScores = 0;
    let invalidScores = 0;
    let counts = { xuatSac: 0, gioi: 0, kha: 0, trungBinh: 0, yeu: 0 };
    let max = null;
    let min = null;
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
        
        if (typeof score !== 'number' || score < 0 || score > 10 || isNaN(score)) {
            invalidScores++;
            continue; 
        }

        validScores++;
        sum += score;

        if (max === null || score > max) max = score;
        if (min === null || score < min) min = score;

        if (score >= 9) counts.xuatSac++;
        else if (score >= 8) counts.gioi++;
        else if (score >= 6.5) counts.kha++;
        else if (score >= 5) counts.trungBinh++;
        else counts.yeu++;
    }

    if (validScores === 0) {
        return {
            soDiemKhongHopLe: invalidScores,
            soHocSinhHopLe: 0,
            xuatSac: 0, gioi: 0, kha: 0, trungBinh: 0, yeu: 0,
            diemCaoNhat: null,
            diemThapNhat: null,
            diemTrungBinh: 0,
            nhanXet: "Không có dữ liệu hợp lệ"
        };
    }

    let avg = sum / validScores;
    avg = Math.round(avg * 100) / 100;

    let khaTroLen = counts.xuatSac + counts.gioi + counts.kha;
    let nhanXet = "Lớp học ở mức ổn";
    
    if (khaTroLen > validScores / 2) {
        nhanXet = "Lớp học tốt";
    } else if (counts.yeu > validScores / 2) {
        nhanXet = "Cần cải thiện";
    }

    return {
        soDiemKhongHopLe: invalidScores,
        soHocSinhHopLe: validScores,
        xuatSac: counts.xuatSac,
        gioi: counts.gioi,
        kha: counts.kha,
        trungBinh: counts.trungBinh,
        yeu: counts.yeu,
        diemCaoNhat: max,
        diemThapNhat: min,
        diemTrungBinh: avg,
        nhanXet: nhanXet
    };
}

const test1 = [9, 7, -2, 5.5, 10, 4, 11, 6.5, 8];
console.log(analyzeClass(test1));