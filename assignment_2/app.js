

// assignment 2

// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


function addNumber(n) {
  return function(x) {
    return x + n;
  }
}
let addFive = addNumber(5);
let result = addFive(10);
console.log(result); // Output: 15




// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.



function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  }
  
  if (arr[0] === val) {
    return true;
  }
  
  return searchArray(arr.slice(1), val);
}


let myArray = [1, 2, 3, 4, 5, 6];
let result = searchArray(myArray, 5);
console.log(result); // Output: true



// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


function addParagraph(text) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = text;
  
  let body = document.querySelector('body');
  body.appendChild(newParagraph);
}





// . Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item

function addListItem(text) {
  const newListItem = document.createElement('li');
  newListItem.textContent = text;
  
  let list = document.querySelector('ul');
  list.appendChild(newListItem);
}








// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.



function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}


<body>
  <h1 id="myHeading">My Heading</h1>
  <button onclick="changeBackgroundColor(document.getElementById('myHeading'), 'red')">Change color to red</button>
</body>



// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


function saveToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

let myObj = { name: 'John', age: 30 };

saveToLocalStorage('myObject', myObj);



// . Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


function getFromLocalStorage(key) {
  let obj = localStorage.getItem(key);
  return JSON.parse(obj);
}


let myObj = getFromLocalStorage('myObject');
console.log(myObj);



// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


function saveObjectToLocalStorage(obj) {
  // Loop through each property of the object
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      // Save the property to localStorage using the property name as the key
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
  }

  // Create a new object to hold the retrieved properties
  const retrievedObj = {};

  // Loop through each property in localStorage
  for (let i = 0; i < localStorage.length; i++) {
    // Get the key and value of the current localStorage item
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));

    // Add the key-value pair to the retrieved object
    retrievedObj[key] = value;
  }

  // Return the retrieved object
  return retrievedObj;
}


let myObj = { name: 'John', age: 30, city: 'New York' };

let retrievedObj = saveObjectToLocalStorage(myObj);

console.log(retrievedObj);
