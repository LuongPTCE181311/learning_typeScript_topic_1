export {};

class SinhVien {
    name: string | undefined;
    id: number | undefined;
    sleep(){
        console.log("di ngu: ", this.name, "id :");
    }
}

const sinhvien1 = new SinhVien();
sinhvien1.name = "Pham Thanh Luong";
sinhvien1.id = 181311;
sinhvien1.sleep();

console.log("=======================");
const sinhvien2 = new SinhVien();
sinhvien2.name = "Nhu Y";
sinhvien2.id = 181311;
sinhvien2.sleep();