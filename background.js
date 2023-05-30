// Function to handle the "save_and_submit" command
function saveAndAppend() {
    // Send a message to the content script only if the desired webpage URL matches
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentURL = tabs[0].url;
        if (currentURL.includes("https://fauna.ansp.org/OrthopNet/collections/editor/occurrenceeditor.php")) {
            chrome.tabs.sendMessage(tabs[0].id, { command: "save_and_append" });
        }
    });
}

// Function to handle the "fill_with_previous" command
function ditto() {
    // Send a message to the content script only if the desired webpage URL matches
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentURL = tabs[0].url;
        if (currentURL.includes("https://fauna.ansp.org/OrthopNet/collections/editor/occurrenceeditor.php")) {
            chrome.tabs.sendMessage(tabs[0].id, { command: "ditto" });
        }
    });
}

// Event listener for the commands
chrome.commands.onCommand.addListener(function (command) {
    if (command === "save_and_append") {
        console.log("Save and append command executed");
        saveAndAppend(); // Call the saveAndSubmit function
    } else if (command === "ditto") {
        ditto(); // Call the fillWithPrevious function
        console.log("ditto command executed");
    }
    return true;
}
);

//Event listener for tab updates

