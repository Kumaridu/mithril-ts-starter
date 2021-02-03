import * as m from 'mithril';
import { Student } from './FormComponent';

function rowComponent(): m.Component<{
    student: Student, index: number, onEdit: (student: Student) => number
    onEditSave: (editStudent: Student) => void, onDelete: (deleteStudent: Student) => void
}> {

    let isEdit = false;
    let studentEditIndex: number;
    return {
        view(vnode) {
            return (isEdit && vnode.attrs.index == studentEditIndex) ?
                m("tr", [
                    m("td", [
                        m("input[type=text].form-control", {
                            onchange: function (event) {
                                vnode.attrs.student.firstName = event.target.value
                            },
                            value: vnode.attrs.student.firstName
                        })
                    ]),
                    m("td", [
                        m("input[type=text].form-control", {
                            onchange: function (event) {
                                vnode.attrs.student.lastName = event.target.value
                            },
                            value: vnode.attrs.student.lastName
                        })
                    ]),
                    m("td", [
                        m("button.btn btn-primary", {
                            onclick: function (event) {
                                event.preventDefault();
                                isEdit = false;
                                let student: Student = {
                                    firstName: vnode.attrs.student.firstName,
                                    lastName: vnode.attrs.student.lastName
                                }
                                vnode.attrs.onEditSave(student)
                            }
                        }, "Save Changes")
                    ]),
                ]) :
                m("tr", [
                    m("td", vnode.attrs.student.firstName),
                    m("td", vnode.attrs.student.lastName),
                    m("td", m("button.btn btn-primary", {
                        onclick: function (event) {
                            isEdit = true;
                            studentEditIndex = vnode.attrs.onEdit(vnode.attrs.student);
                        }
                    }, "Edit")),
                    m("td", m("button.btn btn-primary", {
                        onclick: function (event) {
                            let deleteConfirm: boolean;
                            deleteConfirm = confirm("Are you sure to delete");
                            if (deleteConfirm == true) {
                                vnode.attrs.onDelete(vnode.attrs.student);
                            }
                        }
                    }, "Delete"))
                ])
        }
    }
}


export function TableComponent(): m.Component<{
    studentList: Student[]
    onEditSave: (editStudent: Student, studentIndex: number) => void, onDelete: (deleteStudent: Student) => void
}> {

    let studentIndex: number;
    return {
        view(vnode) {
            return m("table", { class: "table" }, [
                m("tr", [
                    m("th", "FirstName"), m("th", "LastName"), m("th")
                ]),
                vnode.attrs.studentList.map((student, index) =>
                    m(rowComponent, {
                        student,
                        index,
                        onEdit: (editStudent: Student) => {
                            studentIndex = vnode.attrs.studentList.indexOf(editStudent);
                            return studentIndex;
                        },
                        onEditSave: (editStudent: Student) => {
                            vnode.attrs.onEditSave(editStudent, studentIndex);
                        },
                        onDelete: (deleteStudent: Student) => {
                            vnode.attrs.onDelete(deleteStudent);
                        }
                    })
                )
            ])
        }
    }
}