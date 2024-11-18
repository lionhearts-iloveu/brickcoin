// Load and display saved options when the page loads
function loadOptions() {
    chrome.storage.sync.get(["country", "language"]).then((items) => {
      document.getElementById("country").value = items.country || "";
      document.getElementById("language").value = items.language || "";
    });
  }
  
  // Save the current values
  function saveOptions() {
    const country = document.getElementById("country").value;
    const language = document.getElementById("language").value;
    chrome.storage.sync.set({ country, language }).then(() => {
      alert("Options saved!");
    });
  }
  
  // Restore default values if needed
  function restoreDefaults() {
    chrome.storage.sync.set({
      country: "lu",
      language: "en"
    }).then(loadOptions);
  }
  
  document.getElementById("save").addEventListener("click", saveOptions);
  document.getElementById("restore").addEventListener("click", restoreDefaults);
  
  document.addEventListener("DOMContentLoaded", loadOptions);
  