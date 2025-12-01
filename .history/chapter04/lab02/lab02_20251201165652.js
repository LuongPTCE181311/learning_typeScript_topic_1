console.log("lab 02");

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const tinhTrungBinh = (toan, van, anh) => (a + b + c) / 3;

const xeploai = (diemTB) => {
    if(diemTB >= 9){
        return "Xuat Xac";
    }else if (diemTB >= 8 && diemTB < 9){
        return "Gioi";
    }else if(diemTB >= 6.5 && diemTB < 8){
        return "Kha";
    }else{
        return "Trung Binh";
    }
}

console.log(`
Diem trung Binh: ${}
    `);
