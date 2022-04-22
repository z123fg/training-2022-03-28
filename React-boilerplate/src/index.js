
/* 
    Reactjs is library help you render the page

    React(react): is used to create virtual dom (definition of component, create virtual dom based on jsx)
    ReactDOM(react-dom): is used to render the real dom based on the virtual dom (render real dom based on virtual using diffing algo)

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

    boilerplate: starter kit; create-react-app(CRA), Nextjs(server-side-render), Gatsby(static page);



    ecma(european computer mamufacture association): ecmascript,es6, es5, es2015,es2017,es2019, jsx

    jsx is a syntax sugar prvided by react only;
    async wait, spread operator, rest operator, class
    js is a script language, interpreted language, diff than the compiling language;
    chrome: google v8, firefox: spiderMonkey, nodejs: chrome v8


    React: library, framework; //context api, hooks //axios, redux, saga, react router
    // collaboration of babel, webpack, react, react-dom, sass, styled-component
    Angular: framework // angular cli, router, httpclient, observable, ngrx, service
    Vuejs:framework;

    node.js: javascript runtime without browser;

    npm registry

    babel: it is used to transpile es6 into es5, jsx to es5;

    modularization: require.js, common.js(node.js), amd, system.js, es module

    webpack(bundler): resolve import export. 

    for react project, you need babel to transpile all the files first and then use webpack to bundle them into one file

    tree-shaking, minify, uglify
*/
import React from "react"
import ReactDOM from "react-dom"
import HelloMessage from "./components/HelloMessage";

console.log(React.createElement("div", null, "Hello ", "Taylor")); //virtual dom

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<HelloMessage name="Taylor"/>);//<HelloMessage name="Taylor" />