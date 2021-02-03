import * as m from 'mithril';
import { StudentFormComponent ,Student} from './components/FormComponent';
import {TableComponent} from './components/TableComponent';

// class studentLists{
//     students: Student[]

//     addStudent(newStudent: Student){
//         this.students.push(newStudent);
//     }

//     editStudent(student: Student, studentIndex: number){
//         this.students[studentIndex] = student;
//     }

//     deleteStudent(student:Student){
//         let deleteStudentIndex: number;
//         deleteStudentIndex = studentList.indexOf(student);
//         this.students.splice(deleteStudentIndex,1);
//     }
// }
let studentList: Student[] = [];
let isFormShown = false;

function MainComponent(): m.Component<{}>{
    let student : Student = {
        firstName: "",
        lastName: ""
    }

    let deleteStudentIndex: number;
    return {
        view(vnode){
            return [
                (studentList.length != 0) ?
                 m(TableComponent,{
                    studentList,
                    onEditSave: (editStudent: Student, studentIndex: number) => {
                        studentList[studentIndex] = editStudent; 
                    },
                    onDelete: (deleteStudent: Student) => {
                        deleteStudentIndex = studentList.indexOf(deleteStudent);
                        studentList.splice(deleteStudentIndex,1);
                    }
                 }): "",
                (isFormShown)? 
                m(StudentFormComponent, {
                    student,
                    onUpdated: (newStudent: Student) => {
                        studentList.push(newStudent);
                        isFormShown = false;
                    }
                }) : 
                m("button.btn btn-primary.mt-4",{
                    onclick: event => {
                        isFormShown = true;
                    }
                }, "Add Student")

                
            ]
        }
    }
}

let divElem = document.getElementById("app");
if(divElem != null) {
    m.mount(divElem, MainComponent);
}
