
/* 
    Reactjs is library help you render the page

    React: is used to create virtual dom (definition of component, create virtual dom based on jsx)
    ReactDOM: is used to render the real dom based on the virtual dom (render real dom based on virtual using diffing algo)

    virtual dom: 
    representation of real dom from react,
    every time react try to rerender the page, it will create a new virtual dom,
    react will try to compare the new virtual dom and the previous virtual dom, using diffing algorithm
    try to figure out the most efficient way to render the page.

    1. user interact with your page, triggering some event, changing state
    2. react will create virtual dom based on the state change
    3. react will compare this virtual dom with the previous virtual dom
    4. react knows which part shuold be change on the page based on the comparison
    5. react try to render the part of the page(real dom) that has to be rerendered, instead of rerendering the whole page
*/


class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(React.createElement(HelloMessage, { name: "Taylor" }));