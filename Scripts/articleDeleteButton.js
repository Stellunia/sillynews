
export function enableDeletion() {
    const elements = Array.from(document.getElementsByTagName('button')).filter(el => el.id === 'article-delete-button');
    elements.forEach(element => {
        element.style.display = "flex";
        console.log("enableDeletion calls for each article. (Predefined ones not able to be deleted).");
        //element.addEventListener("click", disableDeletion);
    })
}

export function disableDeletion() {
    const elements = Array.from(document.getElementsByTagName('button')).filter(el => el.id === 'article-delete-button');
    elements.forEach(element => {
        element.style.display = "none";
        console.log("disableDeletion calls made for each article. Disabled buttons that would allow for removal.");
        // Add logic to delete the specific ID of the article where the button was pressed
    })
}

document.getElementById("about-footer").addEventListener("click", enableDeletion);

/* const elements = Array.from(document.getElementsByTagName('button')).filter(el => el.id === 'article-delete-button');
elements.forEach(element => {

    console.log("disableDeletion works");
}) */

/* window.addEventListener("DOMContentLoaded", () => { 
    
}); */