class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  handleAddOne() {
    this.setState((prevState) =>{
      return {
        count: prevState.count +1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) =>{
      return {
        count: prevState.count -1
      };
    });
  }
  handleReset() {
    this.setState((prevState) =>{
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCount();
// }

// const subOne = () => {
//     count--;
//     renderCount();
// }

// const reset = () => {
//     count = 0;
//     renderCount();
// }

// const appRoot = document.getElementById('app')
// const renderCount = () => {
//     const templet = ( 
//         <div>
//         <h1> Count: { count } < /h1> 
//         <button onClick = { addOne } > +1 < /button> 
//         <button onClick = { subOne } > -1 < /button> 
//         <button onClick = { reset } > Reset < /button> 
//         </div>
//     );

//     ReactDOM.render(templet, appRoot)

// }
// renderCount();