console.log("📄 Document Object Manipulation Tutorial");

// =============== 🌍 WINDOW OBJECT =================
// The `window` object is the global object in the browser.
// It represents the browser window/tab.
console.log(window); // Logs window object (contains document, location, alert, etc.)

// =============== 📑 DOCUMENT OBJECT =================
// `document` is part of the window object.
// Represents the webpage loaded into the browser (DOM tree).
console.log(document);            // Logs the full HTML document
console.dir(document);            // Interactive tree structure of DOM

// =============== DOM TREE STRUCTURE ===============
// Visual representation of the DOM:
// window
//   └── document
//         ├── <html>
//         │     ├── <head>
//         │     │     └── <title>, <meta>, ...
//         │     └── <body>
//         │           └── <div>
//         │                ├── <h1>
//         │                └── <p>
// Each element can have children, text nodes, attributes, etc.

// ============ 👀 COMMON SELECTORS IN DOM ==================

// 1️⃣ getElementById - Selects single element by ID
const heading = document.getElementById('heading');
console.log(heading);
heading.innerText = "Updated Heading with ID";

// 2️⃣ getElementsByClassName - Selects multiple elements with given class
const items = document.getElementsByClassName('list-item');
console.log(items); // HTMLCollection
items[0].style.color = 'red';

// 3️⃣ getElementsByTagName - Selects all elements of a given tag
const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);
allParagraphs[0].innerText = "First paragraph changed.";

// 4️⃣ querySelector - Selects the first element matching a CSS selector
const firstBox = document.querySelector('.box'); // .class or #id
firstBox.style.border = '2px solid green';

// 5️⃣ querySelectorAll - Selects all elements matching a CSS selector
const allBoxes = document.querySelectorAll('.box');
allBoxes.forEach(box => box.style.backgroundColor = 'lightblue');

// ============= ✍️ TEXT & HTML CONTENT ===================

// innerText – Gets/sets the visible text of an element
heading.innerText = "New Visible Heading"; // only visible content given
document.textContent // fetches all hidden + visible data
document.innerHTML// gives code with html tag
// textContent – Gets all the text (including hidden)
console.log(heading.textContent);

// innerHTML – Gets/sets HTML content inside an element
heading.innerHTML = "<span style='color:red'>HTML Injected</span>";

// ============= 🔧 ATTRIBUTES & CLASSES ==================

// getAttribute / setAttribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://openai.com');

// classList methods
heading.classList.add('new-class');
heading.classList.remove('old-class');
heading.classList.toggle('toggle-class');

// ============= 🎯 STYLING ELEMENTS ===================
const title = document.getElementById('title');
title.style.backgroundColor = 'yellow';
title.style.padding = '10px';
title.style.fontSize = '24px';

// ============ 🧲 CREATING AND ADDING ELEMENTS ============
const newDiv = document.createElement('div');
newDiv.innerText = "I am a new div";
newDiv.className = "dynamic-div";
document.body.appendChild(newDiv); // Adds to end of <body>

// ============ ❌ REMOVING ELEMENTS ===================
const toRemove = document.getElementById('remove-me');
toRemove.remove();

// ============ 📣 EVENTS ==============================

const btn = document.getElementById('click-btn');
btn.addEventListener('click', function () {
    alert('Button clicked!');
});

// Mouseover
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'orange';
});

// ============ 🧠 DOMContentLoaded ======================
// Best practice: wait until HTML is fully loaded before running DOM code

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    // Safe place to start manipulating
});


// console.log(window) // returns all componenet of teh window/ tab of brwser
// console.log(document)-> returns html document
// console.dir(document) -> returns any hidden file with html doc


