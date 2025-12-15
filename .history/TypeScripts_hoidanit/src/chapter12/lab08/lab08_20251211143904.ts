export {};

class User {
    public name: string;
    private email: string;
    protected role: "student" | "teacher";

    constructor(name: string, email: string, role?: string){
        this.email = email
    }
}