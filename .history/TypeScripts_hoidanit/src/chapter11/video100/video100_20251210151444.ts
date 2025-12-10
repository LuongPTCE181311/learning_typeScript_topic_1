export {};

type TRole = string | number;

type TSuperRole = "USER" | "SUPERADMIN" | "ADMIN";

const user: TRole = "USER";
const admin: TRole = "ADMIN";
const supperAdmin: TRole = 1;

const otherUser: TSuperRole = "ADMIN";


enum RoleEnum {
    USER,
    SUPERADMIN,
    ADMIN
}


const myRole1: RoleEnum = RoleEnum.ADMIN;
const myRole: RoleEnum = RoleEnum.ADMIN;
console.log(">> enum myRole");
