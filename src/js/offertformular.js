import '../css/offertformular.scss'

// we observe the changes on the text in the submit button that is hidden
// and apply that text to the button text that is visible
const submitButtonText = document.querySelector("#offer-submit .button-text");
const submitButton = document.querySelector("#offer-submit-button");

function updateDivContent() {
  submitButtonText.textContent = submitButton.value;
}

// Observe for changes to the button text
const observer = new MutationObserver(updateDivContent);
observer.observe(submitButton, { attributes: true, attributeFilter: ['value'] });

updateDivContent();