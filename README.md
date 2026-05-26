# Interactive Portfolio Website

## Project Overview
This project is an interactive personal portfolio website created using HTML, CSS, and JavaScript as part of an internship task. It presents Murshida P's profile, skills, projects, and contact information in a modern, responsive layout with multiple JavaScript-powered interactions.

## Objective
The goal of this project is to enhance a styled portfolio website by adding JavaScript functionality such as form validation, DOM manipulation, event handling, reusable functions, localStorage support, and interactive UI features.

## Features
- Responsive portfolio design
- JavaScript form validation
- Real-time input validation
- Error and success messages
- Dark mode toggle
- Dark mode saved with localStorage
- Scroll-to-top button
- Active navigation highlight
- Typing text effect
- Interactive skills section
- DOM manipulation
- Event listeners
- Reusable JavaScript functions

## Technologies Used
- HTML5
- CSS3
- JavaScript
- LocalStorage
- DOM API

## Folder Structure
```text
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    └── profile.jpeg
```

## JavaScript Concepts Used
- DOM selection: Elements are selected using `getElementById()`, `querySelector()`, and `querySelectorAll()`.
- DOM manipulation: Classes, text content, and form messages are updated dynamically.
- Event listeners: Used for `submit`, `input`, `click`, `scroll`, and `DOMContentLoaded`.
- Form validation: Separate checks ensure each field is valid before success is shown.
- Reusable functions: Functions like `selectElement()`, `showError()`, `showSuccess()`, `validateEmail()`, `toggleDarkMode()`, `savePreference()`, `typeText()`, and `updateActiveNav()` are reused throughout the project.
- Conditional statements: Used to decide whether fields are valid, dark mode should be enabled, and buttons should appear.
- String validation: `trim()`, length checks, and regular expressions are used to validate user input.
- `classList` methods: `add()`, `remove()`, and `toggle()` are used to manage UI state.
- localStorage: Stores the dark mode preference so it remains after refresh.
- `setTimeout()`: Powers the typing effect animation.
- Scroll events: Control the scroll-to-top button and active navigation highlighting.

## Form Validation Logic
- Name must be at least 3 characters.
- Email must match a valid email format.
- Message must be at least 10 characters.
- Invalid inputs display error messages below each field.
- Valid inputs receive success styling.
- Valid form submission displays a success message after `event.preventDefault()` stops the default form submission.

## Interactive Elements
- Dark mode toggle: Switches between light and dark themes and saves the user's preference using localStorage.
- Scroll-to-top button: Appears after scrolling and smoothly returns the user to the top of the page.
- Active navigation highlight: Updates the current navigation link based on the visible section.
- Typing effect: Rotates role text such as `Web Developer`, `Frontend Developer`, and `JavaScript Learner`.
- Skill card click descriptions: Clicking a skill card updates a description panel with related information.

## Setup Instructions
1. Clone or download the project.
2. Open the folder in VS Code.
3. Open `index.html` in a browser.
4. Test all JavaScript features.

## Testing Evidence
- Submit the form with all fields empty and confirm that error messages appear.
- Enter a name shorter than 3 characters and confirm the name error appears.
- Enter an invalid email and confirm the email error appears.
- Enter a message shorter than 10 characters and confirm the message error appears.
- Enter valid form data and confirm the success message appears.
- Toggle dark mode and refresh the page to confirm the preference is saved.
- Scroll down and confirm the scroll-to-top button appears.
- Click the scroll-to-top button and confirm the page scrolls smoothly to the top.
- Scroll through the page and confirm the active navigation link changes by section.
- Click skill cards and confirm the skill description updates.
- Test the layout on a mobile screen and confirm the design remains responsive.

## Screenshots
- Homepage: `Add screenshot here`
- Dark mode: `Add screenshot here`
- Form validation errors: `Add screenshot here`
- Success message: `Add screenshot here`
- Mobile view: `Add screenshot here`
- Skill interaction: `Add screenshot here`

## Author
Murshida P
