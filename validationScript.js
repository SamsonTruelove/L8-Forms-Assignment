//
// Samson Truelove
// 06/19/2023
// Forms Assignment
//

// Performs the Following:
// 1. Fetches User Input From Form
// 2. Validates Input According to Regular Expression Using Regex
// 3. Print Error and Doesn't Submit or Print Confirmation and Submit
document.addEventListener('DOMContentLoaded', (event) => {

  // Fetching Input Field Element
  const inputField = document.getElementById('inputField');

  // Event Listener for Form to Submit Event.
  const form = document.getElementById('myForm');
  form.addEventListener('submit', function (event) {

    // Fetching Input Field Value
    let inputValue = inputField.value;

    // Using Regular Expression Pattern for Alphanumeric Input
    const regex = /^[a-z0-9]+$/i;

    // Validating if Input Matches the Regular Pattern
    if (!regex.test(inputValue)) {
      alert("Input must be alphanumeric."); // Invalid Input

      // Prevents Form from Submitting
      event.preventDefault();

    } else {
      alert("Input is valid. Form is 'submitted'."); // Valid Input
    }
  });
});
