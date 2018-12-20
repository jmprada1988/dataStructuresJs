//Defaul for unordered data
let teacher = {
    firstName: "Lein",
    lastName: "Davir",
    isTeacher: true,
    favNumbers: [1,2,3,4]
}

//the big o for objects is 
//O(1) for insertion, removal and acces
//O(n) for searching

//Methods Object.keys/Object.values/ Object.entries O(n)
//hasOwnProperty O(1)

console.log(Object.keys(teacher));
console.log(Object.values(teacher));
console.log(Object.entries(teacher));

console.log(teacher.hasOwnProperty("firstName"));