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

    
}