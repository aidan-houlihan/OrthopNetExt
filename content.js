
function saveAndAppendContent() {

  //alert("save and append start");

  //check if the record number is the right length (15 characters)
  if(document.getElementById('catalognumber').value.length != 15){
    alert("It looks like the record number might be mistyped, try again before saving!")
  }

  //check if the dates are entered correctly
  else if (document.getElementsByName('eventdate')[0].value == ''){
    alert("It looks like the date is not entered. If no date, use 0000-00-00!")
  }

  //check if a species name is entered before saving, if none alert the user and don't save
  else if (document.getElementById('ffsciname').value == '') {
    alert("No species name! Enter one before saving!")
  }

  //check if sex and entered correctly
  else if (document.getElementsByName('sex')[0].value != "Male" && document.getElementsByName('sex')[0].value != "Female" && 
             document.getElementsByName('lifestage')[0].value == "Adult" && document.getElementsByName('sex')[0].value != "Unknown"){
    alert("The sex might not be entered correctly. Please use Male, Female, or Unknown, if nymph leave blank!")
  }

  //if there is a species name entered, save normally
  else {

    //alert("save append checked");

    //save every field value to variable
    var catalog_number = document.getElementById('catalognumber').value;
    var other_cat_number_tag = document.querySelector("#identifierBody > div > div:nth-child(1) > input.idNameInput").value;
    var other_cat_number_value = document.querySelector("#identifierBody > div > div:nth-child(2) > input").value;
    var recorded_by = document.getElementsByName("recordedby")[0].value;
    var record_number = document.getElementsByName("recordnumber")[0].value;
    var event_date = document.getElementsByName("eventdate")[0].value;
    var end_date = document.getElementsByName("eventdate2")[0].value;
    var associated_collectors = document.getElementsByName("associatedcollectors")[0].value;
    var verbatim_date = document.getElementsByName("verbatimeventdate")[0].value;
    var identified_by = document.getElementsByName("identifiedby")[0].value;
    var id_references = document.getElementsByName("identificationreferences")[0].value;
    var id_remarks = document.getElementsByName("identificationremarks")[0].value;
    var date_identified = document.getElementsByName("dateidentified")[0].value;
    var habitat = document.getElementsByName("habitat")[0].value;
    var substrate = document.getElementsByName("substrate")[0].value;
    var associated_taxa = document.getElementsByName("associatedtaxa")[0].value;
    var verbatim_attributes = document.getElementsByName("verbatimattributes")[0].value;
    var ff_sciname = document.getElementById('ffsciname').value;
    //var author = document.getElementsByName("author")[0].value;
    //var family = document.getElementsByName("family")[0].value;
    var ff_state = document.getElementById('ffstate').value;
    var ff_county = document.getElementById('ffcounty').value;
    var ff_municipality = document.getElementById('ffmunicipality').value;
    var ff_locality = document.getElementById('fflocality').value;
    //var field_notes = document.getElementsByName("fieldnotes")[0].value;
    var sex = document.getElementsByName("sex")[0].value;

    //saves the values to chrome sync storage
    chrome.storage.sync.set(
      {
        catalog_number: catalog_number,
        other_cat_number_tag: other_cat_number_tag,
        other_cat_number_value: other_cat_number_value,
        recorded_by: recorded_by,
        record_number: record_number,
        event_date: event_date,
        end_date: end_date,
        associated_collectors: associated_collectors,
        verbatim_date: verbatim_date,
        identified_by: identified_by,
        id_references: id_references,
        id_remarks: id_remarks,
        date_identified: date_identified,
        habitat: habitat,
        substrate: substrate,
        associated_taxa: associated_taxa,
        verbatim_attributes: verbatim_attributes,
        ff_sciname: ff_sciname,
        //author: author,
        //family: family,
        ff_state: ff_state,
        ff_county: ff_county,
        ff_municipality: ff_municipality,
        ff_locality: ff_locality,
        //field_notes: field_notes,
        sex: sex
      }

    )

    //console.log("saved");

    //Set the xPath Value for the Add Record Button and results variable
    var xPathStr = "/html/body/div/table/tbody/tr/td[1]/div/div/form/div[1]/div/button";
    var returnResults = "TBD";

    // Find the Add Record button from xpath
    var elemFound = document.evaluate(xPathStr, document, null, 0, null).iterateNext();

    //Click the Add Record Button
    if (elemFound) {
      //--- CLICK ON THE LINK --- TURNED OFF FOR TESTING
      
      elemFound.click();
      //console.log("click");
      //alert("clicked the button!");
    }

    else {
      //--- ERROR:  ELEMENT WAS NOT FOUND ---
      returnResults = '[ERROR] Element NOT FOUND for XPath:\n' + xPathStr;
      alert(returnResults);
    }
  }
}

function dittoContent() {

  //alert("at ditto start");

  let activeField = document.activeElement.name;
  //console.log(activeField)
  switch (activeField) {

    case "catalognumber":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          //document.getElementsByName("catalognumber")[0].value = items.catalog_number;
          document.querySelector("#identifierBody > div > div:nth-child(1) > input.idNameInput").focus();
        }
      )
      break;

    case "idname[]":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.querySelector("#identifierBody > div > div:nth-child(1) > input.idNameInput").value = items.other_cat_number_tag;
          document.querySelector("#identifierBody > div > div:nth-child(2) > input").focus();
        }
      )
      break;

    case "idvalue[]":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.querySelector("#identifierBody > div > div:nth-child(2) > input").value= items.other_cat_number_value;
          document.getElementsByName("recordedby")[0].focus();
        }
      )
      break;

    case "recordedby":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("recordedby")[0].value = items.recorded_by;
          document.getElementsByName("recordnumber")[0].focus();
        }
      )

      break;

    case "recordnumber":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("recordnumber")[0].value = items.record_number;
          document.getElementsByName("eventdate")[0].focus();
        }
      )
      break;

    case "eventdate":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("eventdate")[0].value = items.event_date;
          document.getElementsByName("eventdate2")[0].focus();
        }
      )
      break;
      
    case "eventdate2":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("eventdate2")[0].value = items.end_date;
          document.getElementsByName("associatedcollectors")[0].focus();
        }
      )
      break;
      
    case "associatedcollectors":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("associatedcollectors")[0].value = items.associated_collectors;
          document.getElementsByName("verbatimeventdate")[0].focus();
        }
      )
      break;

    case "verbatimeventdate":
      //ditto
        chrome.storage.sync.get(
          (items) => {
            document.getElementsByName("verbatimeventdate")[0].value = items.verbatim_date;
            document.getElementsByName("sciname")[0].focus();
          }
        )
      break;

    case "sciname":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementById('ffsciname').value = items.ff_sciname;
          //document.getElement
          document.getElementsByName("identifiedby")[0].focus();
        }
      )
      break;

    case "identifiedby":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("identifiedby")[0].value = items.identified_by;
          document.getElementsByName("dateidentified")[0].focus();
        }
      )
      break;

    case "dateidentified":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("dateidentified")[0].value = items.date_identified;
          document.getElementsByName("identificationreferences")[0].focus();
        }
      )
      break;

    case "identificationreferences":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("identificationreferences")[0].value = items.id_references;
          document.getElementsByName("identificationremarks")[0].focus();
        }
      )
      break;

    case "identificationremarks":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("identificationremarks")[0].value = items.id_remarks;
          document.getElementsByName("stateprovince")[0].focus();
        }
      )
      break;

    case "stateprovince":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("stateprovince")[0].value = items.ff_state;
          document.getElementsByName("county")[0].focus();
        }
      )
      break;

    case "county":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("county")[0].value = items.ff_county;
          document.getElementsByName("municipality")[0].focus();
        }
      )
      break;

    case "municipality":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("municipality")[0].value = items.ff_municipality;
          document.getElementsByName("locality")[0].focus();
        }
      )
      break;

    case "locality":
      //ditto
      //if nothing in locality, paste ditto value, then go to sex if nothing in habitat, else go to habitat
      if(document.getElementsByName("locality")[0].value == ''){
        chrome.storage.sync.get(
          (items) => {
            document.getElementsByName("locality")[0].value = items.ff_locality;
            if(items.habitat == ''){
              document.getElementsByName("sex")[0].focus();
            }
            else{
              document.getElementsByName("habitat")[0].focus();
            }
          }
        )
      }
      //if there's already something in locality, then go to sex if no habitat, otherwise go to habitiat
      else{ 
        chrome.storage.sync.get(
          (items) => {
            if(items.habitat == ''){
              document.getElementsByName("sex")[0].focus();
            }
            else{
              document.getElementsByName("habitat")[0].focus();
            }
          }
        )
        
      }

      break;

    case "habitat":
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("habitat")[0].value = items.habitat;
          document.getElementsByName("substrate")[0].focus();
        }
      )
      break;

    case "substrate":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("substrate")[0].value = items.substrate;
          document.getElementsByName("associatedtaxa")[0].focus();
        }
      )
      break;

    case "associatedtaxa":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("associatedtaxa")[0].value = items.associated_taxa;
          document.getElementsByName("verbatimattributes")[0].focus();
        }
      )
      break;

    case "verbatimattributes":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("verbatimattributes")[0].value = items.verbatim_attributes;
          document.getElementsByName("sex")[0].focus();
        }
      )
      break;

    case "fieldnotes":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("fieldnotes")[0].value = items.field_notes;
          document.getElementsByName("sex")[0].focus();
        }
      )
      break;
    case "sex":
      //ditto
      chrome.storage.sync.get(
        (items) => {
          document.getElementsByName("sex")[0].value = items.sex;
        }
      )
      break;

    default:
      break;
  }

}

function updateIframeSrc(newGeorefValues) {
  var iframe = document.getElementById('Iframe1');
  var src = iframe.src;
  var newSrc = src.replace(/georef=[^&]*/, 'georef=' + newGeorefValues);
  iframe.src = newSrc;
}
// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.command === "save_and_append") {
    // run save and append function
    saveAndAppendContent();
    //console.log("save test!")

  } else if (message.command === "ditto") {
    // run ditto function
    dittoContent();
    //console.log("ditto test!")
  }
});

//Save and append the values if the add record button is pressed

// document.evaluate("//*[@id='addButtonDiv']/input[2]", document, null, 0, null).iterateNext().addEventListener(
//   "click", saveOnButtonClick()
//   );

//SET DEFAULT VALUES ON PAGE REFRESH (new record) --- WORKS KEEP IN content.js

try{

  var occurenceElement = document.getElementById("ui-id-1"); //Should be "New Occurrence Record"


  if (!occurenceElement){
    throw new Error("Element with ID 'ui-id-1' not found.");
  }

  var newOccurence = occurenceElement.innerText;

} catch (error){
  console.error(error.message)
}

//change the src iframe link to alter the options so it generates the polygon
try{
  var geoElement = document.title; //should be "GEOLocate Tool"

  if (!geoElement){
    throw new Error("Element with ID 'title' not found.");
  }

  console.log(geoElement);

  if(geoElement == "GEOLocate Tool"){

    window.onload = function() {
      updateIframeSrc('run|true|true|true|true|false|false|false|0');
      };

  }

} 
catch (error){
  console.error(error.message)
}


//Also add check to see if on a georeferencing page, and if so then check the check box in options to do error polygon
if (newOccurence == "New Occurrence Record") {
  console.log("occurence match");
  chrome.storage.sync.get(
    (option) => {
      document.getElementById('catalognumber').value = option.catalogNumberG;
      document.getElementById('ffcountry').value = option.countryG;
      document.getElementById('ffstate').value = option.stateG;
      document.getElementsByName("lifestage")[0].value = option.lifeStageG;
      document.getElementsByName("individualcount")[0].value = option.individualCountG;
      document.getElementsByName("disposition")[0].value = option.dispositionG;
      document.getElementsByName("preparations")[0].value = option.preparationsG;
    }
  )

  //generate UUID and put it in the occurenceID field
  //document.getElementsByName("occurrenceid")[0].value = self.crypto.randomUUID();

  //Open ID remarks field

  //Set the xPath Value for the toggle ID Remarks Button and results variable
  var idRemarkStr = "//*[@id='idrefToggleDiv']";
  var results = "TBD'";

  // Find the Add Record button from xpath
  var elemFound = document.evaluate(idRemarkStr, document, null, 0, null).iterateNext();

  //Click the Add Record Button
  if (elemFound) {
    //--- CLICK ON THE LINK --- TURNED OFF FOR TESTING
    elemFound.click();
    //alert("clicked the button!");
  }

  else {
    //--- ERROR:  ELEMENT WAS NOT FOUND ---
    returnResults = '[ERROR] Element NOT FOUND for XPath:\n' + idRemarkStr;
    alert(returnResults);
  }
  //Set Focus to Catalog Number Field
  document.getElementById('catalognumber').focus();
}

else {
  console.log("on the wrong page!");
}

//document.addEventListener('DOMContentLoaded', setDefaults);
