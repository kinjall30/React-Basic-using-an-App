//export { square, add };
//export {square, add, sub as default};
export default sub;
console.log('utils.js is running');

// export const square = (x) =>{
//     return x*x;
// }
const square = (x) =>{
  return x*x;
}

const add = (a,b) => {
  return a+b;
}

const sub = (a,b) => {
  return a-b;
}
