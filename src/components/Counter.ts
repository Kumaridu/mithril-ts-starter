import * as m from 'mithril';

interface Attrs {
    initialValue: number;
}

export function Counter(): m.Component<Attrs> {
    let count = 0;

    return {
        oninit(vnode) {
            count = vnode.attrs.initialValue;
        },
        view(vnode) {
            return m('.counter',
                m('span', `count: ${count} `),

                m('button', { 
                    onclick: () => {count++;} 
                }, '+'),
                
                m('button', {
                    onclick: () => {count--;} 
                }, '-')
            );
        }
    };
}