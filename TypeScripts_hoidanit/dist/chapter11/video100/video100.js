const user = "USER";
const admin = "ADMIN";
const supperAdmin = 1;
const otherUser = "ADMIN";
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["SUPERADMIN"] = "SUPERADMIN";
    RoleEnum["ADMIN"] = "ADMIN";
})(RoleEnum || (RoleEnum = {}));
const myRole1 = RoleEnum.USER;
const myRole2 = RoleEnum.ADMIN;
console.log(">> enum myRole1 = ", myRole1);
console.log(">> enum myRole2 = ", myRole2);
export {};
