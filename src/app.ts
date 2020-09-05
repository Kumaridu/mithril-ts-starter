import * as m from 'mithril';

interface CounterComponentAttrs {
    initialCount:number
}

function CounterComponent(): m.Component<CounterComponentAttrs> {
    let currentCount:number = 0;

    return {
        oninit(vnode) {
            currentCount = vnode.attrs.initialCount;
        },

        view(vnode) {
            return m("div", 
                [
                    m("span", "Count : " + currentCount),
                    m("button", {
                        onclick: () => {
                            currentCount++;
                        }
                    }, "+"),
                    m("button", {
                        onclick: () => {
                            currentCount--;
                        }
                    }, "-")
                ]
            );
        }
    }
}

function MainComponent(): m.Component<{}> {
    return {
        view(vnode) {
            return [
                m("h1", "Counter App"),
                m(CounterComponent, {initialCount:0})
            ];
        }
    }
}

let divElem = document.getElementById("app");
if(divElem != null) {
    //m.render(divElem, "Hello World");
    m.mount(divElem, MainComponent);
}
