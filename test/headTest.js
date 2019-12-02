const head = require("../head.js")
const assertEqual = require("../assertEqual.js")

assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,5,6,7]), 5);
assertEqual(head(["Anisa","Hello", "Lighthouse", "Labs"]), "Hello");