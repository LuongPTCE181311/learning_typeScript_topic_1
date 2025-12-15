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
    courses: string[] = [];

    constructor(name: string, email: string, role: TRole){
        super(name, email, role);
    }
    
    addcourses(courseName: string): void {
        this.courses.push(courseName);
    }

    printUserInfo(){
        const courseName = this.courses.join(",")
        console.log(`[Teacher] ${this.name} - Courses Taught: ${courseName}`);
        
    }
}

class Student extends User{
    enrolledCourses: string[] = [];
     
    constructor(name: string, email: string){
        super(name, email);
    }

    enroll(courseName: string){
        this.enrolledCourses.push(courseName);
    }

    printUserInfo(){
        const courseName = this.enrolledCourses.join(",")
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${courseName}`);
        
    }

}

const hoidanit = new Student("Hoidanit", "hoidanit@email.com");
hoidanit.enroll("TypeScript Pro");

const eric = new Teacher("Eric", "eric@email.com", "teacher");
eric.addCourse("React");

printUserInfo(hoidanit);
// 👉 Output:
// [Student] Hoidanit - Enrolled Courses: TypeScript Pro

printUserInfo(eric);
// 👉 Output:
// [Teacher] Eric - Courses Taught: React
