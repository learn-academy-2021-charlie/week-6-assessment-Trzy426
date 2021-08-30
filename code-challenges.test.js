// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { typeOf } = require("react-is")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
describe ("describeMyJob", () => {
  test("returns a string name of the person and their occupation", () => {
      expect(describeMyJob(people)).toContain("ford prefect is a hitchhiker", "zaphod beeblebrox is a president of the galaxy", "arthur dent is a radio employee")

  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

// create a function describeMyJob
// map and return from the object value
const describeMyJob = (array) => {
  return array.map(value => `${value.name} is a ${value.occupation}`)
}
// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe ("onlyRemainders", () => {
  test("returns a only remainders", () => {
      expect(onlyRemainders(hodgepodge1)).toContain([2, 0, -1, 0])
      expect(onlyRemainders(hodgepodge2)).toContain([2, 1, -1])
  })
})
// IDK what is going on with this test its passing because   
//expect(received).toContain(expected) // indexOf

    // Expected value: [2, 0, -1, 0]
    // Received array: [2, 0, -1, 0]

// b) Create the function that makes the test pass.
// create a function only reaminders
// filter via typeof
//then return the remainder via %3
const onlyRemainders = (array) => {
  return array.filter(value => typeof value == 'number').map(value => value % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
describe ("cuber", () => {
  test("returns sum of cubed numbers", () => {
      expect(cuber(cubeAndSum1)).toContain(99)
      expect(cuber(cubeAndSum2)).toContain(99)
  })
})
//create function cuber prolly should have said cuberSum
//for each value cube and sum
// return sum
const cuber = (array) => {
    let sum = 0
    array.forEach(value => sum += value ** 3)
    return sum
}
// expect(received).toContain(expected) // indexOf

// Expected value:  99
// Received number: 99
// im also receicing this could i get an explaination on what im doing wrong here?
// b) Create the function that makes the test pass.
