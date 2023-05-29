  // Event listener for the commands
  chrome.commands.onCommand.addListener(function (command) {
    if (command === "save_and_append") {
      saveAndAppend(); // Call the saveAndSubmit function
    } else if (command === "ditto") {
      ditto(); // Call the fillWithPrevious function
    }
  });


// Function to handle the "save_and_submit" command
function saveAndAppend() {
    // Implement your logic to save and submit the record

    // save every field value to variable
    // var catalog_number = document.getElementById('catalognumber').value;
    // var othercatalog_numbers = document.getElementsByName("othercatalognumbers")[0].value;
    // var recorded_by = document.getElementsByName("recordedby")[0].value;
    // var record_number = document.getElementsByName("recordnumber")[0].value;
    // var event_date = document.getElementsByName("eventdate")[0].value;
    // var associated_collectors = document.getElementsByName("associatedcollectors")[0].value;
    // var verbatim_date = document.getElementsByName("verbatimeventdate")[0].value;
    // var identified_by = document.getElementsByName("identifiedby")[0].value;
    // var date_identified = document.getElementsByName("dateidentified")[0].value;
    // var habitat = document.getElementsByName("habitat")[0].value;
    // var substrate = document.getElementsByName("substrate")[0].value;
    // var associated_taxa = document.getElementsByName("associatedtaxa")[0].value;
    // var verbatim_attributes = document.getElementsByName("verbatimattributes")[0].value;
    // var ff_sciname = document.getElementById('ffsciname').value;
    // var ff_state  = document.getElementById('ffstate').value;
    // var ff_county = document.getElementById('ffcounty').value;
    // var ff_municipality = document.getElementById('ffmunicipality').value;
    // var ff_locality = document.getElementById('fflocality').value;
    // var field_notes = document.getElementsByName("fieldnotes")[0].value;

    // saves the values to chrome storage
    // chrome.storage.local.set(
    //   {
    //     catalog_number:catalog_number,
    //     othercatalog_numbers:othercatalog_numbers,
    //     recorded_by:recorded_by,
    //     record_number:record_number,
    //     event_date:event_date,
    //     associated_collectors:associated_collectors,
    //     verbatim_date:verbatim_date,
    //     identified_by:identified_by,
    //     date_identified:date_identified,
    //     habitat:habitat,
    //     substrate:substrate,
    //     associated_taxa:associated_taxa,
    //     verbatim_attributes:verbatim_attributes,
    //     ff_sciname:ff_sciname,
    //     ff_state:ff_state,
    //     ff_county:ff_county,
    //     ff_municipality:ff_municipality,
    //     ff_locality:ff_locality,
    //     field_notes:field_notes
    //   }, ()
    // )
    console.log("save test");
  }
  
  // Function to handle the "fill_with_previous" command
  function ditto() {

    // Implement your logic to fill the active text field with the value from the previous record
    console.log("ditto test");
  }
  
