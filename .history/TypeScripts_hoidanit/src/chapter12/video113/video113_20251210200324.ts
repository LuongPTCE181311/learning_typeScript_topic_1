export {};

class SinhVien {
    name: string | undefined;
    id: number | undefined;
    sleep(){
        console.log("di ngu", this.name);
    }
}

const sinhvien1 = new SinhVien();

sinhvien1.name = ""