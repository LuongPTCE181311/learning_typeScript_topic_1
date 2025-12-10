export {};

type TRole = string | number;

type TSuperRole = "USER" | "SUPERADMIN" | "ADMIN";

const user: TRole = "USER";
const admin: TRole = "ADMIN";
const supperAdmin: TRole = 1;

const otherUser: TSuperRole = "ADMIN";


enum RoleEnum {
    USER = "USER",
    SUPERADMIN = "SUPERADMIN",
    ADMIN
}


const myRole1: RoleEnum = RoleEnum.USER;
const myRole2: RoleEnum = RoleEnum.ADMIN;
console.log(">> enum myRole1 = ", myRole1);
console.log(">> enum myRole2 = ", myRole2);
