export {};

class User {
    public name: string;
    private _email: string;
    protected role: "student" | "teacher";

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
        console.log("Name is: ", this.name);
        
    }
}

class Teacher extends User{
    courses: string[];
    
    addcourses(coursename: string): void {
        this.courses
    }
}