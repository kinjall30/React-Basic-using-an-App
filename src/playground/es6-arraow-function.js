// const square = function(x) {
//     return x * x;
// };
// console.log(square(3))

// const sqrArrow = (x) => {
//     return x * x;
// }
//OR

// const sqrArrow = (x) => x * x; // explicitely return we need not write return statement
// console.log(sqrArrow(9))

// es6-arrow-function part 2

//argument objects - no longer bound with arrow  function
// const add = function(a, b) {
//     console.log(arguments);
//     return a + b;
// }

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(3, 10))


//this keyword - no longer bound
const user = {
    name: 'Abie',
    cities: ['delhi', 'vadodara'],
    printPlacesLived() {
        return this.cities.map((city) => {
            return city;
        });

        // console.log(this.name);
        // console.log(this.cities)
        //const that = this;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });

    }
};
user.printPlacesLived();