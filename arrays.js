//Defaul for ordered data cost in performance for some operations
let names = ["lein", "lili", "cookie", "proxy"];
let values = [true, {}, [], 2, "great"];

//Access is O(1)
//adding and removing to the end O(1) usually by push.
names.push("rash");

names.push("josh");
console.log(names);

names.pop();

//inserting and at the beginnign it is slower O(n)

console.log(names);


//Searching is  O(n)
//Methods built-in
//push O(1)
//pop O(1)
//shift O(n)
//unshift O(n)
//concat O(n)
//slice O(n)
//splice O(n)
//sort O(n * log N)
//forEach/map/filter/reduce O(n)