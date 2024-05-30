chrome.runtime.sendMessage('getImageUrl', imageUrl => {
\    const profilePictures = document.querySelectorAll('img.update-components-actor__avatar-image');
    profilePictures.forEach(img => {
        img.src = imageUrl;
        img.srcset = imageUrl; 
    });
});
