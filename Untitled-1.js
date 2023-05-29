

//POTENTIAL MACRO JAVASCRIPT FOR ORTHOPNET

//get value of active field
document.getElementById(document.activeElement.id).value

//get value of specific field ID
document.getElementById('catalognumber').value

//get value of specific field by NAME
document.getElementsByName("othercatalognumbers")[0].value

//enter value into specific field
document.getElementById('catalognumber').value = "test"

//enter value into ACTIVE field
document.getElementById(document.activeElement.id).value = "test"

//get button, to then use .click()
document.evaluate("//*[@id='addButtonDiv']/input[2]", document, null, 0, null).iterateNext()


//Code to click the Add Record Button on OrthopNet portal and append default data (set default values in variable page)

(function run(pXPathStr) {
    'use strict';

    //Set the xPath Value for the Add Record Button 
    var xPathStr = "//*[@id='addButtonDiv']/input[2]";

    //set default results output
    var returnResults = "TBD";

    //--- GET THE HTML ELEMENT IDENTIFIED BY THE XPATH ---
    var elemFound = document.evaluate(xPathStr, document, null, 0, null).iterateNext();

    // --- SAVE RECORD AND ADD FIELDS ---
    if (elemFound) {

        //Add in Male/Female to field (use two AutoFill profiles for this??)

        //Save all fields as AutoFill variables to use in ditto function


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

    return;

})();