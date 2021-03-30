'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

// Destruct objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Mutating variables
let a = 111;
let b = 999;
const obj = {
    a: 23,
    b: 7,
    c: 14,
};
({ a, b } = obj);
console.log(a, b); // 23, 7

const arr = [2, 3, 4];
// Destruct arrays
let [x, y] = arr;
console.log(x, y); // 2 3

// Using destruct arrays to switch values
[x, y] = [y, x];
console.log(x, y); // 3 2

// Spread operator
const arr2 = [7, 8, 9];
const newArr = [1, 2, ...arr2]; // [1, 2, 7, 8, 9]

// Iterables: arrays, strings, maps, sets. NOT Objects
const str = 'Yuqi';
console.log(str); // Y, u, q, i

const obj1 = {
    a: 1,
    b: 2,
};

const newObj = { ...obj1, c: 3 };

const arr3 = [1, 2, 7, 8, 9];
const [aa, bb, ...newArr1] = arr3;
console.log(newArr1); // [7, 8, 9]

const add = (...args) => console.log(args);
add(1, 2, 3, 4);

const staff = [1, 2, 3, 1, 2];
const set = [...new Set(staff)];
console.log(set);
