// Store Data in LocalStorage
// window.localStorage is inferred
localStorage.setItem("first_name", "Dmitriy");
localStorage.setItem("age", 38); //integer is allowed but will be converted to string

// Get Date from LocalStorage
let first_name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(first_name, age);

// Updating Data via setItem or dot notation
localStorage.setItem("first_name", "Dima")
localStorage.age = "Thirty Eight"

// Deleting Data From LocalStorage
localStorage.deleteItem("first_name")

// Delete All Items from LocalStorage
localStorage.clear()

//Storing Object in LocalStorage
const todos = [
  { text: "First", also: "One" },
  { text: "Second", also: "Two" },
  { text: "Three", also: "Three" },
];

// JavaScript Array of Objects => JSON String

console.log(JSON.stringify(todos))

localStorage.setItem(todos, JSON.stringify(todos))
let retrieveTodos = localStorage.getItem(todos)

console.log(JSON.parse(retrieveTodos))