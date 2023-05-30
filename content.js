function saveAndAppendContent() {

    //save every field value to variable
    var catalog_number = document.getElementById('catalognumber').value;
    var othercatalog_numbers = document.getElementsByName("othercatalognumbers")[0].value;
    var recorded_by = document.getElementsByName("recordedby")[0].value;
    var record_number = document.getElementsByName("recordnumber")[0].value;
    var event_date = document.getElementsByName("eventdate")[0].value;
    var associated_collectors = document.getElementsByName("associatedcollectors")[0].value;
    var verbatim_date = document.getElementsByName("verbatimeventdate")[0].value;
    var identified_by = document.getElementsByName("identifiedby")[0].value;
    var date_identified = document.getElementsByName("dateidentified")[0].value;
    var habitat = document.getElementsByName("habitat")[0].value;
    var substrate = document.getElementsByName("substrate")[0].value;
    var associated_taxa = document.getElementsByName("associatedtaxa")[0].value;
    var verbatim_attributes = document.getElementsByName("verbatimattributes")[0].value;
    var ff_sciname = document.getElementById('ffsciname').value;
    var ff_state = document.getElementById('ffstate').value;
    var ff_county = document.getElementById('ffcounty').value;
    var ff_municipality = document.getElementById('ffmunicipality').value;
    var ff_locality = document.getElementById('fflocality').value;
    var field_notes = document.getElementsByName("fieldnotes")[0].value;

    //saves the values to chrome sync storage
    chrome.storage.sync.set(
        {
            catalog_number: catalog_number,
            othercatalog_numbers: othercatalog_numbers,
            recorded_by: recorded_by,
            record_number: record_number,
            event_date: event_date,
            associated_collectors: associated_collectors,
            verbatim_date: verbatim_date,
            identified_by: identified_by,
            date_identified: date_identified,
            habitat: habitat,
            substrate: substrate,
            associated_taxa: associated_taxa,
            verbatim_attributes: verbatim_attributes,
            ff_sciname: ff_sciname,
            ff_state: ff_state,
            ff_county: ff_county,
            ff_municipality: ff_municipality,
            ff_locality: ff_locality,
            field_notes: field_notes
        }
    )

    //Set the xPath Value for the Add Record Button and results variable
    var xPathStr = "//*[@id='addButtonDiv']/input[2]";
    var results = "TBD'";

    // Find the Add Record button from xpath
    var elemFound = document.evaluate(xPathStr, document, null, 0, null).iterateNext();

    //Click the Add Record Button
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

function dittoContent() {

    let activeField = document.activeElement.name;
    switch (activeField) {

        case "catalognumber":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("catalognumber")[0].value = items.catalog_number;
                }
            )
            break;

        case "othercatalognumbers":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("othercatalognumbers")[0].value = items.othercatalog_numbers;
                }
            )
            break;

        case "recordedby":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("recordedby")[0].value = items.recorded_by;
                }
            )

            break;

        case "recordnumber":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("recordnumber")[0].value = items.record_number;
                }
            )
            break;

        case "eventdate":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("eventdate")[0].value = items.event_date;
                }
            )
            break;

        case "associatedcollectors":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("associatedcollectors")[0].value = items.associated_collectors;
                }
            )
            break;

        case "verbatimeventdate":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("verbatimeventdate")[0].value = items.verbatim_date;
                }
            )
            break;

        case "sciname":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("sciname")[0].value = items.ff_sciname;
                }
            )
            break;

        case "identifiedby":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("identifiedby")[0].value = items.identified_by;
                }
            )
            break;

        case "dateidentified":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("dateidentified")[0].value = items.date_identified;
                }
            )
            break;

        case "stateprovince":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("stateprovince")[0].value = items.ff_state;
                }
            )
            break;

        case "county":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("county")[0].value = items.ff_county;
                }
            )
            break;

        case "municipality":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("municipality")[0].value = items.ff_municipality;
                }
            )
            break;

        case "locality":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("locality")[0].value = items.ff_locality;
                }
            )
            break;

        case "habitat":
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("habitat")[0].value = items.habitat;
                }
            )
            break;

        case "substrate":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("substrate")[0].value = items.substrate;
                }
            )
            break;

        case "associatedtaxa":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("associatedtaxa")[0].value = items.associated_taxa;
                }
            )
            break;

        case "verbatimattributes":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("verbatimattributes")[0].value = items.verbatim_attributes;
                }
            )
            break;

        case "fieldnotes":
            //ditto
            chrome.storage.sync.get(
                (items) => {
                    document.getElementsByName("fieldnotes")[0].value = items.field_notes;
                }
            )
            break;

        default:
            break;
    }

    
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.command === "save_and_append") {
        // run save and append function
        saveAndAppendContent();
        console.log("save test!")

        // //THIS IS HOW YOU RETRIEVE A SINGLE ITEM FROM SYNC STORAGE
        // chrome.storage.sync.get(
        //     (items) => {
        //         console.log(items.habitat)
        //     }
        // )

    } else if (message.command === "ditto") {
        // run ditto function
        dittoContent();
        console.log("ditto test!")
    }
});

//SET DEFAULT VALUES ON PAGE REFRESH (new record) --- WORKS KEEP IN content.js
chrome.storage.sync.get(
    (option) => {
        document.getElementById('catalognumber').value = option.catalogNumberG;
        document.getElementById('ffcountry').value = option.countryG;
        document.getElementsByName("lifestage")[0].value = option.lifeStageG;
        document.getElementsByName("individualcount")[0].value = option.individualCountG;
    }
)