export {};

type TRole = "student" | "teacher";

class User {
    public name: string;
    private _email: string;
    protected role: TRole;

    constructor(name: string, email: string, role?: string){
        this._email = email;
        this.name = name;
        role === "teacher" ? this.role = "teacher" : this.role = "student";
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    
    getInfo(){
        console.log(`[GET-INFO] name = ${this.name}, email = ${this._email}, role = ${this.role}`);  
    }
  
}

class Teacher extends User{
    courses: string[];

    constructor(courses: string[]){
        super(name: String, this.email, string);
    }
    
    addcourses(courseName: string): void {
        this.courses.push(courseName);
    }

    printUserInfo(){

    }
}

class Student {

}