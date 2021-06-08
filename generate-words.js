console.log("Let's go!");

const fs = require("fs");

const required = "h";
const optionals = "apybirtdl";

const regex = new RegExp(`^[${required}${optionals}]+$`);

const dictionary = fs
  .readFileSync(`./data/master-words.txt`, { encoding: "utf8" })
  .split("\n");

let matches = dictionary
  .filter((word) => word.length >= 4)
  .filter((word) => word.includes(required))
  .filter((word) => word.match(regex));

matches = matches
  .sort((a, b) => a.length - b.length)
  .map((word) => word.toUpperCase());

// console.log(matches);

console.log(JSON.stringify(matches, null, 2));
