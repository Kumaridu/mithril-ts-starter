import * as m from 'mithril';

export interface Student{
    firstName:string;
    lastName: string
}

let studentsList: Student[]

export function StudentFormComponent(): m.Component<Student>{
    let firstname : string;
    let lastName: string;
   return {
       oninit(vnode){
        firstname = vnode.attrs.firstName;
        firstname = vnode.attrs.lastName;
       },
       view(vnode){
           return [
               m("form",[
                   m("div.form-group",[
                       m("lable",{for:"firstName"}, "FirstName"),
                       m("input[type=text].form-control",{
                           id:"firstName",
                           value:vnode.attrs.firstName,
                           oninput: function(event){
                             console.log(vnode.attrs.firstName);
                           }
                       })
                   ]),
                   m("div.form-group",[
                       m("label",{for:"lastName"},"LastName"),
                       m("input[type=text].form-control",{
                           id:"lastName",
                           value:vnode.attrs.lastName,
                           oninput: function(event){
                             console.log(vnode.attrs.lastName);
                           }
                       })
                   ]),
                   m("button.btn btn-primary",{
                       onclick: function(event){
                           event.preventDefault();
                           if(vnode.attrs.firstName != null && vnode.attrs.lastName != null){
                               console.log(vnode.attrs.firstName)
                           }
                       }
                   },"Save")
               ])
           ]
       }
   } 
}

export function TableComponent() : m.Component<Student>{
    return{
        view(vnode){
            return m("table.table",[
                m("tr",[
                    m("th","FirstName"),m("th","LastName"),m("th")
                ])//,
                // vnode.attrs.studentList.map((student,index) =>
                //  m("h1", student)
                // )
            ])
        }
    }
}