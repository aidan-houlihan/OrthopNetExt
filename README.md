# OrthopNetExt

#### This is a Google Chrome Extension designed to speed up the processing of OrthopNet specimens at the Academy of Natural Sciences of Drexel University.

# The extension (OrthopNetExt) has three main functions:

1. Introduce keyboard shortcuts where possible to reduce mouse/trackpad interactions (saving, record ditto-ing)
2. To pre-fill default values (user set) that are ubiquitous across all or large groups of specimens. 
3. To allow for ditto-ing of the previous record's value of a particular field. 

Keep in mind, this extension was made excusivley for OrthopNet databasing, and so the field IDs and webpage interactions are bespoke, so this
will not work with other Symbiota portals without reformatting the field/button names, ditto-ing logic. That being said, the main framework is viable to
be used with similar portals.

## Installation Instructions:

1. Download and unzip the OrthopNetExt folder. (click the green "Code" button dropdown arrow and select "Download ZIP")
2. Save the folder to a place where you can easily access it (Desktop etc.)
3. Navigate to Google Chrome extension manager: chrome://extensions/ 
4. At the top right, turn on Developer mode.
5. Click "Load unpacked" from the upper left corner.
6. Find and select the OrthopNetExt-master folder.

### The extension should now be added and can now be accessed from the puzzle piece icon in the upper right of the Chrome menu bar.

## Using the Extension:

#### Adding Default Values (these will be filled in the associated text fields everytime a new record is loaded or the page is refreshed)

1. Click the puzzle piece icon in the drop down menu then click the pin icon next to the OrthopNetExt extension.
2. Right click on the "O" icon and select the the options page. This will open up a new tab where you can input your default values
3. Fill in any defaults that you want (ANSP-ENT- for catalog prefix, United States for country, etc.) and hit save, these can be changed at any time, 
   just refresh the record page to update the values after hitting "save".
   
#### Add New Record:

1. While in the New Occurence editor (the editor for previously added records is not affected by the extension), the "Add Record" button can be
    activated using the shortcut "Control+Shift+9". This will add the current record, open another record, and pre-fill the user-set default values.
2. The keyboard shortcut can be set in via the Google Chrome extension manager: chrome://extensions/  (click the three line menu in the upper left
    corner and select keyboard shortcuts, just be sure not to set the shortcut to something alrready used by your system or browser).

##### Note: This extension also includes some data-cleaning capablities and will alert you to data fields that need to added/amended before saving!

#### Field Ditto-ing

1. To ditto the field value from the previous record, use the keyboard shortcut "Control-Shift-0". This will insert the previous record's value for 
    the active field (from a list of supported fields, see below) and advance to the next field.
2. This can be continued for each field aand if there is no previous record data for a particular field, the command will advance to the next field.

### Note: to make previous records available to this command, the Add New Record command must be used, simply pressing the webpage button will not work!
      
### Fields Available to Ditto (contact Aidan Houlihan ah3789@drexel.edu if other fields are required)

Other Cat. #'s\
Collector\
Number\
Date\
Associated Collectors\
Verbatim Date\
Scientific Name (will autofill other data)\
Identified By\
Identified Date\
ID References\
ID Remarks\
State/Province\
County\
Municipality\
Locality\
Habitat\
Substrate\
Associated Taxa\
Description\
Field Notes\
Sex

### Note: follwing the locality field, if there is no previous data in the Misc. section, it will advance to "Sex"

## That should be about it for getting up and running! Feel free to edit the shortcuts/code for your copy of the extension in any way!

## Please contact Aidan Houlihan (ah3789@drexel.edu) with any questions/comments/concerns!


  
   
   
   
   
   
