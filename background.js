// Function to handle the "save_and_submit" command
function saveAndAppend() {
    
    // Implement your logic to save and submit the record

    // save every field in an array

    console.log("save test");
  }
  
  // Function to handle the "fill_with_previous" command
  function ditto() {

    // Implement your logic to fill the active text field with the value from the previous record

    console.log("ditto test");
  }
  
  // Event listener for the commands
  chrome.commands.onCommand.addListener(function (command) {
    if (command === "save_and_append") {
      saveAndAppend(); // Call the saveAndSubmit function
    } else if (command === "ditto") {
      ditto(); // Call the fillWithPrevious function
    }
  });