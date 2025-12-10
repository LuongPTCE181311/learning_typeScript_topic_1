const student1 = {
    id: 1,
    name: "thanh luong",
    email: "pluongp1243@gmail.com",
    isPremium: true,
    contact: "pluongp1243@gmail.com"
};
const student2 = {
    id: 2,
    name: "nhu Y",
    email: "NhuY123@gmail.com",
    isPremium: true,
    contact: "NhuY123@gmail.com"
};
const course1 = {
    courseId: 1,
    title: "MAD302",
    price: 320000,
    student: []
};
const course2 = {
    courseId: 1,
    title: "NPM302",
    price: 300000,
    student: []
};
const registerStudentToCourse = (student, course) => {
    course.student.push(student);
};
const printCourseInfo = (course) => {
    console.log(`
        Ten khoa hoc: ${course.title}
        So hoc vien da dang ky: ${course.student.length}
        `);
    if (course.student.length > 0) {
        console.log("Liet ke tung hoc vien: ");
        course.student.forEach((student) => {
            console.log("ten hoc sinh: ", student.name);
        });
    }
    else {
        console.log("Chua co hoc vien nao");
    }
};
registerStudentToCourse(student1, course1);
registerStudentToCourse(student2, course1);
printCourseInfo(course1);
console.log("====================");
printCourseInfo(course2);
export {};
