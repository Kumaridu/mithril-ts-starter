import * as m from 'mithril';

export interface Student{
    firstName:string;
    lastName: string
}

export function StudentFormComponent(): m.Component<{student: Student, onUpdated: (student: Student) => void}>{
    let studentForm: Student = {
        firstName:"",
        lastName:""
    };
    
   return {
    oninit(vnode) {
        studentForm.firstName = vnode.attrs.student.firstName;
        studentForm.lastName = vnode.attrs.student.lastName;
      }, 
       view(vnode){
           return [
               m("form",[
                   m("div.form-group",[
                       m("lable",{for:"firstName"}, "FirstName"),
                       m("input[type=text].form-control",{
                           id:"firstName",
                           onchange: function(event){
                            console.log(studentForm);
                            studentForm.firstName = event.target.value;
                            },
                            value:studentForm.firstName
                       })
                   ]),
                   m("div.form-group",[
                       m("label",{for:"lastName"},"LastName"),
                       m("input[type=text].form-control",{
                           id:"lastName",
                           onchange: function(event){ 
                            studentForm.lastName = event.target.value;
                           },
                           value:studentForm.lastName
                       })
                   ]),
                   m("button.btn btn-primary",{
                       onclick: function(event){
                           event.preventDefault();
                           if(studentForm != null){
                               let newStudent: Student = {
                                     firstName: studentForm.firstName,
                                     lastName:  studentForm.lastName
                               }
                               vnode.attrs.onUpdated(newStudent);
                           }
                       }
                   },"Save")
               ])
           ]
       }
   } 
}

