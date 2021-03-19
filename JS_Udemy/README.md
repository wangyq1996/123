# The Complete JavaScript Course 2021: From Zero to Expert!

-   [Course Notes](#course-notes)

1.  -   [x] Welcome, Welcome, Welcome!
2.  -   [x] JavaScript Fundamentals - Part1
3.  -   [x] JavaScript Fundamentals - Part2
4.  -   [x] How to Navigate This Course
5.  -   [x] Developer Skills & Editor Setup
6.  -   [x] HTML & CSS Crash Course
7.  -   [x] JavaScript in the Browser: DOM and Events Fundamentals
8.  -   [x] How JavaScript Works Behind the Scences
9.  -   [ ] Data Structures, Modern Operators and Strings
10. -   [ ] A Closer Look at Functions
11. -   [ ] Working With Arrays
12. -   [ ] Numbers, Dates, Intl and Timers
13. -   [ ] Advanced DOM and Events
14. -   [ ] Object-Oriented Programming (OOP) With
            JavaScript
15. -   [ ] Mapty App: OOP, Geolocation, External
            Libraries, and More!
16. -   [ ] Asynchronous JavaScript: Promises,
            Async/Await, and AJAX
17. -   [ ] Modern JavaScript Development: Modules,
            Tooling, and Functional
18. -   [ ] Forkify App: Building a Modern Application
19. -   [ ] Setting Up Git and Deployment
20. -   [ ] The End!

## **Course Notes**

### **Catalog:**

-   [**JS Fundamentals**](#js-fundamentals)
    -   [Primitive Data Types](#primitive-data-types)
    -   [Let, const & var](#let-const--var)
    -   [Truthy & falsy values](#truthy-&-falsy-values)
    -   [Ways to declare functions](#ways-to-declare-functions)
    -   [Execution Context](#execution-context)
-   [**DOM and Events**](#dom-and-events)
    -   ['keypress' vs 'keydown' / 'keyup'](#keypress-vs-keydown--keyup)
-   [**Arrays, Morden Operators & Strings**](#arrays,-morden-operators-&-strings)
    -   [Spread & REST Syntax (...)](#spread-&-rest-syntax-(...))

## **JS Fundamentals:**

### Primitive Data Types:

-   Number
-   String
-   Boolean
-   Undefined
-   Null
-   Symbol(ES6): Value that is unique
-   BigInt(ES2020): Larger intergers than Number

### Let, const & var:

-   let
-   const
-   var

### Truthy & falsy values:

-   5 falsy values:
    -   0
    -   ''
    -   undefined
    -   null
    -   NaN

### Ways to declare functions:

-   Function Declaration:
    ```
    function calcAge1(birthYear) {
        return 2021 - birthYear;
    }
    ```
    Function declaration can be called **before** the declaration.
-   Function Expression:
    ```
    const calcAge2 = function (birthYear) {
        return 2021 - birthYear;
    };
    ```
-   Arrow Function:
    ```
    const calcAge3 = (birthYear) => {
        return 2021 - birthYear;
    };
    ```
    **Arrow functions** do not have arguments object & own 'this'

### Execution Context:

-   Variable Environment:

    -   let, const and var declarations
    -   Functions
    -   arguments object

        testcases:

        ```
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
        ```

    -   Hoisting:

        Make some types of variables accessible **before** they actually declared.

        |                               | Hoisted?                               | Initial value                             | Scope    |
        | ----------------------------- | -------------------------------------- | ----------------------------------------- | -------- |
        | Function declarations         | ✅ YES                                 | Actual function                           | Block    |
        | var                           | ✅ YES                                 | undefined                                 | Function |
        | let & const                   | 🚫 NO                                  | \<uninitialized>,Temporal Dead Zone (TDZ) | Block    |
        | Function expressions & arrows | 🤷 Depends if using var or let / const |

-   Scope chain:

    -   3 types of scope:
        -   Global scope
        -   Function scope
        -   Block scope (ES6)
            > only 'let' & 'const', 'var' will be function / global scope

-   'this' keyword:

    Special variable created for every execution context. **this** is **NOT** static. It depends on **how** the function is called, and its value is only assigned when the function **is actually called.**

    4 ways calling function:

    -   Method 👉 this = \<Object that is calling the method>
    -   Simple function call 👉 this = undefined (If not strict mode, this would be 'window')
    -   Arrow functions 👉 this = \<this of surrounding function (lexical this)> (would be 'window' if in globe scope)
    -   Event listener 👉 this = \<DOM element that the handler is attached to>

    testcases:

    ```
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
    ```

## **DOM and Events:**

### 'keypress' vs 'keydown' / 'keyup':

-   'keypress':

    'keypress' evnet is fired when a key that **produces a character value** is pressed down. Don't produce value when 'alt', 'shift' etc fired.

    > **Deprecated: This feature is no longer recommended.**

-   'keydown' / 'keyup':

    'keydown' / 'keyup' event is fired for **all** keys.

## **Arrays, Morden Operators & Strings**

### Spread & REST Syntax (...):

-   Spread syntax:

    Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (Shallow Copy).

    Iterables: arrays, strings, maps, sets. NOT Objects.

    > **Object can use spread operators since ES2018**

    ```
        // Arrays
        const arr2 = [7, 8, 9];
        const newArr = [1, 2, ...arr2]; // [1, 2, 7, 8, 9]

        // String
        const str = 'Yuqi';
        console.log(str); // Y, u, q, i

        // Objects
        const obj = {
            a: 1,
            b: 2,
        };

        const newObj = { ...obj, c: 3 };
        console.log(newObj); // {a: 1, b: 2, c: 3}
    ```

-   REST operator:

    Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

    ```
        // Arrays
        const arr = [1, 2 ,7, 8, 9];
        const [a, b, ...newArr] = arr;
        console.log(newArr); // [7, 8, 9]

        // Functions
        const add = (...args) => console.log(args);
        add(1, 2, 3, 4); // [1, 2, 3, 4]
    ```

