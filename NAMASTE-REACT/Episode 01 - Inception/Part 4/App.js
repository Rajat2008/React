
    // <div id="parent">
    //     <div id="child">
    //         <h1>
    //             I am an h1 tag
    //         </h1>
    //         <h2>
    //              I am an h2 tag
    //         </h2>       
    //     </div>
    // </div>




// Here parent is a rect element(which in itself is a plain JS object) and it is converted to an HTML element in reactDOM.render method
// If we need to have multiple children in a parent element, we need to wrap them in an array
// React.createElement(type, props, children)
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        [React.createElement("h1",{},"I am an h1 tag"),
         React.createElement("h2",{},"I am an h2 tag"),
        ]
    ));


console.log('--heading--', parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // This will render parent element in the root element. 
// Whatever is already present in the root element will replaced by the new elemenmt. 
// Anything above and below the root element will not be affected.

// This is the reason why react is called a library and not a framework.
// React is a library because it does not impose any restrictions on how you should structure your code.
// It can work with any part of the page that you give as root element. It does need to applied to the entire application.