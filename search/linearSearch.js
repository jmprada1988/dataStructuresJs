// let userNames = ["lein", "dairy2345", "sweetprincess", "tommy123"];
// let result = userNames.indexOf("lein");
// console.log(result);
//Linear search in arrays 
// indexOf, includes, find, findIndex

let states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"]

//
//let result = states.indexOf("Virginia");

//Write a function that takes an array and a value, it iterates the array and checks if the current array element is equal to the value, if ot is returns the index at which the element is found else it returns -1;
let numbers = [1,2,3,4,5,6,4,56,67,34,23,34,5,607];

searchInArr = (arr, num) => {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === num) return i;
    }
    return -1;
}
let test = searchInArr(states, "North Carolina");

console.log(states);
