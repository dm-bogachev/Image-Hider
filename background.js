let hidingToggled = true
let unHoverOpacity = 0.05

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ hidingToggled });
  chrome.storage.sync.set({ unHoverOpacity });
  console.log('Default state set to false');
});

