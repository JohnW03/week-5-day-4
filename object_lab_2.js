//Task 2.1

const studentPrototype = {
    name: "Student",
    grade: 100,
    conduct: "S",
    attendance: function() {
        console.log(this.name + ": Present!");
    }
};

 //Task 2.2

function Student(name, grade, conduct) {
    this.name = name;
    this.grade = grade;
    this.conduct = conduct;
}

Student.prototype.attendance = function() {
    console.log(this.name + ": Present!");
};

//Task 3

class StudentClass {
    constructor(name, grade, conduct) {
        this.name = name;
        this.grade = grade;
        this.conduct = conduct;
    }
    
    attendance() {
        console.log(this.name + ": Present!");
    }
}

//Task 4

let Students = [];
Students.push(new StudentClass("Alice", 95, "S"));
Students.push(new StudentClass("Bob", 88, "N"));
Students.push(new StudentClass("Charlie", 76, "S"));
Students.push(new StudentClass("David", 100, "E"));
Students.push(new StudentClass("Eve", 92, "S"));
Students.push(new StudentClass("Frank", 67, "N"));

//Task 5

function filterA(student) {
    return student.grade >= 90 && student.grade <= 100;
}
function filterB(student) {
    return student.grade >= 80 && student.grade < 90;
}
function filterC(student) {
    return student.grade >= 70 && student.grade < 80;
}
function filterD(student) {
    return student.grade >= 60 && student.grade < 70;
}
function filterF(student) {
    return student.grade < 60;
}

let gradeA = Students.filter(filterA);
let gradeB = Students.filter(filterB);
let gradeC = Students.filter(filterC);
let gradeD = Students.filter(filterD);
let gradeF = Students.filter(filterF);

//Task 6
Students.map(function(student) {
    student.attendance();
});
