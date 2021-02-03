// import * as m from 'mithril';

// interface CounterComponentAttrs {
//     initialCount:number
// }

// function CounterComponent(): m.Component<CounterComponentAttrs> {
//     let currentCount:number = 0;

//     return {
//         oninit(vnode) {
//             currentCount = vnode.attrs.initialCount;
//         },

//         view(vnode) {
//             return m("div", 
//                 [
//                     m("span", "Count : " + currentCount),
//                     m("button", {
//                         onclick: () => {
//                             currentCount++;
//                         }
//                     }, "+"),
//                     m("button", {
//                         onclick: () => {
//                             currentCount--;
//                         }
//                     }, "-")
//                 ]
//             );
//         }
//     }
// }

// function MainComponent(): m.Component<{}> {
//     return {
//         view(vnode) {
//             return [
//                 m("h1", "Counter App"),
//                 m(CounterComponent, {initialCount:0})
//             ];
//         }
//     }
// }

// let divElem = document.getElementById("app");
// if(divElem != null) {
//     //m.render(divElem, "Hello World");
//     m.mount(divElem, MainComponent);
// }

import * as m from 'mithril';
import { StudentFormComponent , TableComponent, Student} from './components/Student';

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
