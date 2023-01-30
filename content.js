console.log("Loaded")

function hideImages() {
    chrome.storage.sync.get("hidingToggled", ({ hidingToggled }) => {
        if (hidingToggled) {
            var images = document.getElementsByTagName('img');
            for (var element in images) {
                if (images[element].classList != undefined) {
                    images[element].parentNode.classList.add("imageHover");
                }
            };
        }
    });
};
setInterval(hideImages, 500)