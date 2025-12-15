export {};

class User {
    public name: string;
    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    protected role: "student" | "teacher";

    constructor(name: string, email: string, role?: string){
        this._email = email;
        this.name = name;
        role === "teacher" ? this.role = "teacher" : this.role = "student";
    }

    
}