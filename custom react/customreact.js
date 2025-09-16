function customRender(el,container){
    /* -> v1
    const domElement = document.createElement(el.type);
    domElement.innerHTML = el.children;
    domElement.setAttribute('href',el.props.href);
    domElement.setAttribute('target',el.props.target);
    container.appendChild(domElement);
    */
    // -> v2
    const domElement = document.createElement(el.type);
    domElement.innerHTML = el.children;
    for (const prop in el.props) {
        domElement.setAttribute(prop,el.props[prop]); 
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_black',        
    },
    children: 'Click me to visit google',

}
const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer);