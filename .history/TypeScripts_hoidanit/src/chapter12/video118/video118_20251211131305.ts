export {};
class Person {
    gender: string | undefined;
}

class NhanVien {
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

class LapTrinhVien {
    skill: string;

}