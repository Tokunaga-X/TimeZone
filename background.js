chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    timeZones: [
      { tz: "UTC", label: "UTC" },
      { tz: "America/New_York", label: "New York" },
      { tz: "Asia/Shanghai", label: "China" },
    ],
  });
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "_execute_action") {
    chrome.action.openPopup(); // Open the popup programmatically
  }
});
