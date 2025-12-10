export {};

type TRole = string | number;

type TSuperRole = "USER" | "SUPERADMIN" | "ADMIN";

const user: TRole = "USER";
const admin: TRole = "ADMIN";
const supperAdmin: TRole = 1;

const otherUser: TRole = ""