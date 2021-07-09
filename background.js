let hidingToggled = true

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ hidingToggled });
  console.log('Default state set to false');
});

