const heading=React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "hello world using React!"
    );
console.log(heading)//it prints the object and not the the element here itself
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//here it returns the element by this functions