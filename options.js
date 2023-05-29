// Saves options to chrome.storage
const saveOptions = () => {
    const catalogPrefix = document.getElementById('catalog_prefix').value;
    const lifeStage = document.getElementById('life_stage').value;
    const individualCount = document.getElementById('individual_count').value;
    const country = document.getElementById('country').value;
  
    chrome.storage.sync.set(
      { catalogPrefixG: catalogPrefix, lifeStageG: lifeStage,
      individualCountG: individualCount, countryG: country },
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
      //{ favoriteColor: 'red', likesColor: true },
      (items) => {
        document.getElementById('catalog_prefix').value = items.catalogPrefixG;
        document.getElementById('life_stage').value = items.lifeStageG;
        document.getElementById('individual_count').value = items.individualCountG;
        document.getElementById('country').value = items.countryG;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);