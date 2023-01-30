// Get saved hidingToggled flag from storage
chrome.storage.sync.get("hidingToggled", ({hidingToggled}) =>
{
  document.getElementById("hideState").checked = hidingToggled;
});

// Save hidingToggled flag to storage on change
document.getElementById("hideState").addEventListener("click", changeHideState);
function changeHideState()
{
  hidingToggled = document.getElementById("hideState").checked
  chrome.storage.sync.set({hidingToggled})
}
