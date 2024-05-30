const imageUrl = chrome.runtime.getURL('newProfilePicture.png');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'getImageUrl') {
        sendResponse(imageUrl);
    }
});
