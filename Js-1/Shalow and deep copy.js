let a = {
    name: "Bob",
    protocol: "http",
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', "farid"],
    classroom: {
        teacher: {
            name: "wew",
            age: 18
        }
    }
}


let b = {...a};
{
    b.students = [...a.students];
    b.students = ['ivan', 'andrey', "farid", "SSSS"]
    b.classroom = {...a.classroom};
    b.classroom.teacher = {...a.classroom.teacher};
    b.classroom.teacher.name = "dima";


}

console.log(a, b)