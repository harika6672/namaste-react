import React from 'react'
import { createRoot } from 'react-dom/client';
//React Element, which is an object
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
//React Element using JSX
//Babel Transplies JSX to React Element, which is again an object
const heading1= <h1>hello World from JSX</h1>

//Functional component, is just a noemal function which returns some JSX code

const Title= () => (
  <p>I am title component</p>
)
const x=1
const y=2
// Functional Component which return JSX code
const HeadingComp = () => (
  <div>
    {/* Calling Component inside a component */}
    <Title></Title>
    {/* Calling React Element inside a Component */}
    {heading1}
    {/* Any Js code can be written inside the curly braces in JSx */}
    {x+y} 
    <h1>I am Heading Component</h1>
  </div>
)

const root = createRoot(document.getElementById("root")); //creating root for the application
root.render(<HeadingComp/>);//replaces whatever with this code, inside the root
