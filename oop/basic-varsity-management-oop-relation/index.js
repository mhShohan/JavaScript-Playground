const { Guardian, Student, Teacher } = require('./Person');
const Contact = require('./Contact');
const Department = require('./Department');
const Exam = require('./Exam');
const Subject = require('./Subject');

// create new Contact
const contact = new Contact({ email: 'a@a.com', phone: '127192', address: 'gopalganj' });

//create new Guardian
const guardian = new Guardian('Mr.x', 'business', 100000);
guardian.contact = contact.contact;

//create new Subject
const subject = new Subject('EEE101', 3.00);
const subject1 = new Subject('EEE102', 3.00);
const subject2 = new Subject('EEE103', 3.00);

// create new department
const department = new Department('EEE');
department.addSubjects(subject);
department.addSubjects(subject1);
department.addSubjects(subject2);

// create new Student
const student = new Student('shohan', department.departmentDetails);

//create new Exam
const exam1 = new Exam('EEE101', 55, 'EEE');
const exam2 = new Exam('EEE102', 65, 'EEE');
const exam3 = new Exam('EEE103', 75, 'EEE');

student.addExam(exam1.examDetails);
student.addExam(exam2.examDetails);
student.addExam(exam3.examDetails);

student.fee = 2000;

student.guardian = guardian.guardianDetails;
student.contact = new Contact({ email: 'shohan@gmail.com', phone: '12312312', address: 'dhaka' }).contact;
// console.log(student.use);

// console.log(guardian.use);


const teacher = new Teacher('bbb', department.departmentDetails, 100000, subject.subjectDetails);

department.addTeacher(teacher);
console.log(teacher.department);
