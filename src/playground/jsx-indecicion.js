console.log("App.js is running!");

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;
// var template = (
//     <div>
//         <h1> Indecision App</h1>
//         <p>Hi there</p>
//         <ol>
//             <li>coffee</li>
//             <li>hot coffee</li>
//             <li>coffee</li>
//         </ol>
//     </div>
// );

// var username = "Kinjal";
// var templatetwo = (
//     <div>
//         <h1>{username.toUpperCase()}</h1>
//         <p>Age: 20</p>
//         <p>Location: Malibu</p>
//     </div>
// );

// var user = {
//     name: 'abc',
//     age: 12,
//     location: 'india',
//     mess: 'I am 18 above'
// };

// function getLocation(location){
//     if(location){
//         return <p>Location : {location}</p>
//     }
//     else{
//         return undefined;
//     }
// }
// var templatee = (
//     <div>
//         <p>{user.name ? user.name : 'Anymous'}</p>
//         <p>Age: {user.age}</p>
//         {getLocation(user.location)}
//         {user.age>=18 && <p>Message: {user.mess}</p>}
//     </div>
// );

// var count = 0;
// const addOne = () => {
//     console.log(addOne);
// };
// var templet = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick= {addOne}>+1</button>

//     </div>
// );

console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })
      }
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
