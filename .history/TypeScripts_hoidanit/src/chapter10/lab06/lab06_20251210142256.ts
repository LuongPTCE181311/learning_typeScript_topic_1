export {};

type TStudent = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: number | string;
}

type TCourse = {
    courseId: number;
    title: string;
    price: number;
    student?: TStudent[];
}

const student1: TStudent = {
    id: 1,
    name: "thanh luong",
    email: "pluongp1243@gmail.com",
    isPremium: true,
    contact: "pluongp1243@gmail.com"
}

const student2: TStudent = {
    id: 2,
    name: "nhu Y",
    email: "NhuY123@gmail.com",
    isPremium: true,
    contact: "NhuY123@gmail.com"
}

const course: TCourse = {
    courseId: 1,
    title: "MAD302",
    price: 320000,
}

const registerStudentToCourse = (student: TStudent, course: TCourse) => {

}

const print