# 🧮 Simple JavaScript Calculator

This is a basic calculator web app built using **HTML**, **CSS**, and **JavaScript**. It supports basic arithmetic operations like addition, subtraction, multiplication, and division.

## 🚀 Features

- Simple user interface
- Button-based input
- Prevents multiple consecutive operators
- Prevents starting expression with an operator
- Catches invalid expressions using `try...catch`
- Handles clear (`C`) and evaluate (`=`) functionality
- Error handling for invalid inputs

## 📁 Folder Structure
calculator
┣ 📄 index.html
┣ 📄 style.css
┗ 📄 script.js
## 🧠 Code Highlights

- Prevents entering two operators in a row (e.g., `5++5`)
- Prevents starting with an operator
- Catches `eval()` errors safely
- Uses event listeners to capture button clicks
- Handles clear and evaluate logic using conditionals

### 🔒 Input Validation Logic

```javascript
// If input starts with operator, ignore
if (operators.includes(input) && value === "") {
  // Skip
}

// If last input is operator and next is also operator, replace last
if (operators.includes(lastChar) && operators.includes(current)) {
  // Replace operator
}

🛠 Technologies Used
	•	HTML
	•	CSS
	•	JavaScript (Vanilla)

💡 To-Do / Improvements
	•	Add keyboard support
	•	Add decimal point validation
	•	Add backspace button
	•	Improve UI with better styling
	•	Add scientific functions
