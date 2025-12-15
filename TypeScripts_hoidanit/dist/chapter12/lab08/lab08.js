class User {
    constructor(name, email, role) {
        this._email = email;
        this.name = name;
        role === "teacher" ? this.role = "teacher" : this.role = "student";
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    getInfo() {
        console.log(`[GET-INFO] name = ${this.name}, email = ${this._email}, role = ${this.role}`);
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.courses = [];
    }
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.courses.join(",");
        console.log(`[Teacher] ${this.name} - Courses Taught: ${courseName}`);
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        this.enrolledCourses = [];
    }
    enroll(courseName) {
        this.enrolledCourses.push(courseName);
    }
    printUserInfo() {
        const courseName = this.enrolledCourses.join(",");
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${courseName}`);
    }
}
const hoidanit = new Student("Hoidanit", "hoidanit@email.com");
hoidanit.enroll("TypeScript Pro");
const eric = new Teacher("Eric", "eric@email.com", "teacher");
eric.addCourse("React");
hoidanit.printUserInfo();
// 👉 Output:
// [Student] Hoidanit - Enrolled Courses: TypeScript Pro
eric.printUserInfo();
export {};
// 👉 Output:
// [Teacher] Eric - Courses Taught: React
