'use strict'; //use strict mode of JS

// Function declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => {
    return 2021 - birthYear;
};
