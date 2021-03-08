'use strict';

// this keyword testcase

var firstName = 'test1';
// this variable would be added to globe scope

const secondName = 'test2';
// this variable would not be added to globe scope

const test = {
    firstName: 'test3',

    calc: function () {
        console.log(this); // Object test
        console.log(this.firstName); // test3

        const self = this;
        const test1 = function () {
            console.log(this); // undefined
            console.log(self); // Object test
        };

        const test2 = () => {
            console.log(this); // Object test
        };

        test1();
        test2();
    },

    greet: () => {
        console.log(this); // window
        console.log(this.firstName); // test1
        console.log(this.secondName); // undefined
    },
    // Object is not a function scope, so parent of greet would be 'window'

    // So never use arrow function as method
};

test.calc();
test.greet();

// arguments keyword testcase
const addExpr = function (a, b) {
    console.log(arguments); // all arguments passed in as an array
    return a + b;
};
addExpr(2, 5, 3, 7); // [2, 5, 3, 7]

var addArrow = (a, b) => {
    console.log(arguments); // undefined
    return a + b;
}

