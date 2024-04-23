// Saves options to chrome.storage
const saveOptions = () => {
    const catalogNumber = document.getElementById('catalog_prefix').value;
    const lifeStage = document.getElementById('life_stage').value;
    const individualCount = document.getElementById('individual_count').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const disposition = document.getElementById('disposition').value;
    const preparations = document.getElementById('preparations').value;

    chrome.storage.sync.set(
      { catalogNumberG: catalogNumber, lifeStageG: lifeStage,
      individualCountG: individualCount , countryG: country, 
      stateG: state, dispositionG: disposition, preparationsG: preparations},
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      (items) => {
        document.getElementById('catalog_prefix').value = items.catalogNumberG;
        document.getElementById('life_stage').value = items.lifeStageG;
        document.getElementById('individual_count').value = items.individualCountG;
        document.getElementById('country').value = items.countryG;
        document.getElementById('state').value = items.stateG;
        document.getElementById('disposition').value = items.dispositionG
        document.getElementById('preparations').value = items.preparationsG
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);