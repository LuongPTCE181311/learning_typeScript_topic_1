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
    student: TStudent[];
}

const registerStudentToCourse = (student: TStudent, course: )