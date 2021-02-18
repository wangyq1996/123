# The Complete JavaScript Course 2021: From Zero to Expert!

* [Course Notes](#course-notes)

1. - [x] Welcome, Welcome, Welcome!
2. - [x] JavaScript Fundamentals - Part1
3. - [ ] JavaScript Fundamentals - Part2
4. - [x] How to Navigate This Course
5. - [ ] Developer Skills & Editor Setup
6. - [ ] HTML & CSS Crash Course
7. - [ ] JavaScript in the Browser: DOM and Events Fundamentals
8. - [ ] How JavaScript Works Behind the Scences
9. - [ ] Data Structures, Modern Operators and Strings
10. - [ ] A Closer Look at Functions
11. - [ ] Working With Arrays
12. - [ ] Numbers, Dates, Intl and Timers
13. - [ ] Advanced DOM and Events
14. - [ ] Object-Oriented Programming (OOP) With
JavaScript
15. - [ ] Mapty App: OOP, Geolocation, External
Libraries, and More!
16. - [ ] Asynchronous JavaScript: Promises,
Async/Await, and AJAX
17. - [ ] Modern JavaScript Development: Modules,
Tooling, and Functional
18. - [ ] Forkify App: Building a Modern Application
19. - [ ] Setting Up Git and Deployment
20. - [ ] The End!

## **Course Notes**
### **Catalog:**
-  [**JS Fundamentals**](#js-fundamentals)
    - [Primitive Data Types](#primitive-data-types)
    - [Let, const & var](#let,-const-&-var)
    - [Truthy & falsy values](#truthy-&-falsy-values)
    - [Ways to declare functions](#ways-to-declare-functions)
### **JS Fundamentals:**
#### Primitive Data Types:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol(ES6): Value that is unique
- BigInt(ES2020): Larger intergers than Number

#### Let, const & var:
- let
- const
- var

#### Truthy & falsy values:
- 5 falsy values:
    - 0
    - ''
    - undefined
    - null
    - NaN

#### Ways to declare functions
- **Function Declaration:** 
    ```
    function calcAge1(birthYear) {
        return 2021 - birthYear;
    }
    ```
    Function declaration can be called **before** the declaration.
- **Function Expression:**
    ```
    const calcAge2 = function (birthYear) {
        return 2021 - birthYear;
    };
    ```
- **Arrow Function:**
    ```
    const calcAge3 = (birthYear) => {
        return 2021 - birthYear;
    };
    ```
    Arrow function doesn't have **'this'** keyword.
