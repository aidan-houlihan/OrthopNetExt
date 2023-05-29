
// Function to save values and submit the form
function saveAndSubmit() {

    //Set the xPath Value for the Add Record Button 
    var xPathStr = "//*[@id='addButtonDiv']/input[2]";

    //set default results output
    var returnResults = "TBD";

    // Retrieve all text fields on the page by id or name
    const textFields = Array[
        document.getElementById('catalognumber').value,
        document.getElementsByName("othercatalognumbers")[0].value,
        document.getElementsByName("recordedby")[0].value,
        document.getElementsByName("recordnumber")[0].value,
        document.getElementsByName("eventdate")[0].value,
        document.getElementsByName("associatedcollectors")[0].value,
        document.getElementsByName("verbatimeventdate")[0].value,
        document.getElementsByName("identifiedby")[0].value,
        document.getElementsByName("dateidentified")[0].value,
        document.getElementsByName("habitat")[0].value,
        document.getElementsByName("substrate")[0].value,
        document.getElementsByName("associatedtaxa")[0].value,
        document.getElementsByName("verbatimattributes")[0].value,
        document.getElementById('ffsciname').value,
        document.getElementById('ffstate').value,
        document.getElementById('ffcounty').value,
        document.getElementById('ffmunicipality').value,
        document.getElementById('fflocality').value,
        document.getElementsByName("fieldnotes")[0].value
    ];
  
    // Perform actions to save the values and submit the form
    // Replace the following code with the appropriate logic for your webpage
    console.log("Saving field values:", fieldValues);

    //--- GET THE HTML ELEMENT IDENTIFIED BY THE XPATH ---
    var elemFound = document.evaluate(xPathStr, document, null, 0, null).iterateNext();

    // --- SAVE RECORD AND ADD FIELDS ---
    if (elemFound) {

        //Add in Male/Female to field (use two AutoFill profiles for this??)

        //--- CLICK ON THE LINK --- TURNED OFF FOR TESTING
        //elemFound.click();
        alert("clicked the button!");

        //--- Append values to Catalog Number (and set cursor to end, do last), Country, Life Stage, Count ---
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

  // Listen for keypress events
document.addEventListener("keydown", function(event) {
    // Check the key pressed for each function
    if (event.ctrlKey && event.shiftKey && event.key==="l") {
      //saveAndSubmit(); // Execute saveAndSubmit function when 's' key is pressed
      document.getElementById('catalognumber').value = "test";
    } else if (event.ctrlKey && event.shiftKey && event.key==="o") {
      fillWithPrevious(); // Execute fillWithPrevious function when 'f' key is pressed
    }
  });

  document.getElementById('catalognumber').value = "test";
  

