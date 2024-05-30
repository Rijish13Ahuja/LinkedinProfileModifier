function replaceProfilePictures() {
    const newImageUrl = 'https://images.app.goo.gl/X74M7g131D2qNoEJ9';
    
    try {
        const profilePictures = document.querySelectorAll('img.update-components-actor__avatar-image');

        if (profilePictures.length === 0) {
            console.log('No profile pictures found.');
        }

        profilePictures.forEach(img => {
            img.src = newImageUrl;
            img.srcset = newImageUrl; 
        });

        console.log(`Replaced ${profilePictures.length} profile pictures.`);
    } catch (error) {
        console.error('Error replacing profile pictures:', error);
    }
}

window.addEventListener('load', replaceProfilePictures);
setInterval(replaceProfilePictures, 2000);
