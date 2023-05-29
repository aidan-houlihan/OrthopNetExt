// // Listen for keypress events
// document.addEventListener("keydown", function (event) {
//   // Check the key pressed for each function
//   if (event.ctrlKey && event.shiftKey && event.key === "l") {
//     //saveAndSubmit(); // Execute saveAndSubmit function when 's' key is pressed
//     document.getElementById('catalognumber').value = "test";
//   } else if (event.ctrlKey && event.shiftKey && event.key === "o") {
//     fillWithPrevious(); // Execute fillWithPrevious function when 'f' key is pressed
//   }
// });


//set defautlt ...G values from options.js
// chrome.storage.local.get(['catalogumberG'], function (result) {
//   console.log("cat number is default is set to " + result.catalogNumberG)
// });

// Function to save values and submit the form
function saveAndSubmit() {

  //Set the xPath Value for the Add Record Button 
  var xPathStr = "//*[@id='addButtonDiv']/input[2]";

  //set default results output
  var returnResults = "TBD";

  // Perform actions to save the values and submit the form
  // Replace the following code with the appropriate logic for your webpage
  
  //--- GET THE HTML ELEMENT IDENTIFIED BY THE XPATH ---
  var elemFound = document.evaluate(xPathStr, document, null, 0, null).iterateNext();

  if (elemFound) {
    //--- CLICK ON THE LINK --- TURNED OFF FOR TESTING
    //elemFound.click();
    alert("clicked the button!");
  }

  else {
    //--- ERROR:  ELEMENT WAS NOT FOUND ---
    returnResults = '[ERROR] Element NOT FOUND for XPath:\n' + xPathStr;
    alert(returnResults);
  }
}

// Function to fill current field with previous record's value and move to next field
function fillWithPrevious() {
  // Get the active text field
  const activeField = document.activeElement;

  // Find the previous record's value for the same field
  // Replace the following code with the appropriate logic for retrieving previous record's value
  const previousValue = "Previous Value";

  // Set the value of the active field to the previous record's value
  if (activeField && activeField.tagName === "INPUT" && activeField.type === "text") {
    activeField.value = previousValue;

    // Move to the next field
    activeField.nextElementSibling?.focus();
  } else {
    console.log("No active text field found.");
  }
}