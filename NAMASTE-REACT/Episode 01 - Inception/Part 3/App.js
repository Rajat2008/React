


// The object in the second place is a placeholder for the props that can be passed to the React element. In this case.
// These props can be used to customize the behavior or appearance of the element, such as adding classes, styles, or event handlers.
// The props are essentially the attributes you would normally add to an HTML element, but in React, they are passed as a JavaScript object.

// here heading is a React element, not a DOM element. It is a virtual representation of the DOM element which essentially is a JS object.
const heading = React.createElement("h1", {
    id: "heading",
}, "hello world from React!");

// second and third arguments of React.createElement together form the props object.
// The third argument is the children of the element, which can be a string, number, or another React element.
// it can be accesed using the props.children property.
// The first argument is the type of the element, which can be a string (like "h1", "div", etc.) or a React component.  

console.log('--heading--', heading);
/**************************************************************************/

const root = ReactDOM.createRoot(document.getElementById("root"));

/**************************************************************************/

// This line tells React to render the heading React element inside the DOM node with the id "root":  


// Detailed explanation:

// root is the React root created by ReactDOM.createRoot(...). It manages everything rendered inside the <div id="root"></div> in your HTML.
// .render(heading) instructs React to take the virtual DOM element (heading, which is an <h1> with the text "hello world from React!") and display it inside the root container.
// React efficiently updates the real DOM to match the structure of the heading element, handling any changes automatically.
// Summary:
// ********** This line is what actually displays your React content on the web page by rendering the virtual React element into the real DOM.

root.render(heading);


// Differe nce between React and ReactDOM:

// A React node (or React element) is a plain JavaScript object that describes what you want to see on the screen. It is part of React's "virtual DOM"—an in-memory representation of the UI.

// An actual DOM node is a real object in the browser's Document Object Model, representing elements that are rendered and visible on the web page.

// Key differences:

// React node:

// Is a lightweight JS object (e.g., { type: 'h1', props: { ... } })
// Exists only in memory (virtual DOM)
// Describes what should be rendered, not how
// DOM node:

// Is a real browser object (e.g., HTMLHeadingElement)
// Exists in the browser's DOM tree
// Is what the user actually sees and interacts with
// Summary:
// React nodes are blueprints; DOM nodes are the actual, rendered elements in the browser. React updates the virtual DOM first, then efficiently syncs changes to the real DOM.