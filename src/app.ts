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

// let students : Student[] = [
//     {firstName:'sindhu',lastName:'kumari'},
//     {firstName:'lin',lastName:'Hlaing'}
// ];

let students: Student[] = [];

function MainComponent(): m.Component<{}>{
    return {
        view(vnode){
            return [
                m(StudentFormComponent, {
                    firstName:'',
                    lastName: ''
                })
            ]
        }
    }
}

let divElem = document.getElementById("app");
if(divElem != null) {
    m.mount(divElem, MainComponent);
}
