// Different groups of characters that can be used in the password.
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=[]{};:,.<>/?";

// STEP 1: Select all the important elements from the HTML.
const passwordDisplay = document.getElementById('password-display');
const copyBtn = document.getElementById('copy-btn');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const includeLower = document.getElementById('include-lower');
const includeUpper = document.getElementById('include-upper');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate-btn');


// STEP 2: Update password length on the screen in real-time.
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});


// STEP 3: Write a function that will generate the password.
function generatePassword() {
    // 1) Start with an empty string that will become the pool
    let charPool = "";

    // 2) Create a "character pool" based on which checkboxes are selected.
    if (includeLower.checked) {
        charPool += lowercase;
    }
    if (includeUpper.checked) {
        charPool += uppercase;
    }
    if (includeNumbers.checked) {
        charPool += numbers;
    }
    if (includeSymbols.checked) {
        charPool += symbols;
    }

    // 3) If no options are selected, show a message.
    if (charPool === "") {
        passwordDisplay.textContent = "Select at least 1 option!";
        return;
    }

    // 4) Otherwise, generate the password
    let password = "";
    const length = lengthSlider.value;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    // 5) Display the final password on the screen.
    passwordDisplay.textContent = password;
}


// Copy to Clipboard
copyBtn.addEventListener("click", () => {
    // Don't copy the error message
    if (passwordDisplay.textContent === "Click Generate" || passwordDisplay.textContent === "Select at least 1 option!") {
        return;
    }
    navigator.clipboard.writeText(passwordDisplay.textContent);
    copyBtn.textContent = "✅";
    setTimeout(() => (copyBtn.textContent = "📋"), 900);
});


// STEP 4: Add an event listener for the "Generate Password" button.
generateBtn.addEventListener('click', generatePassword);