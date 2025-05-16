import { createArticleElement } from "./displayArticles.js";
import { getArticlesFromLocalStorage } from "./localStorageSave.js";

    //document.getElementById("article-delete-button").addEventListener("click", disableDeletion);
/* let elements = document.querySelectorAll("article-delete-button");

let clickEvent = () => {
    console.log("CLICK HEARD");
}
elements.forEach((item) => {
    item.addEventListener("click", disableDeletion);
}) */
/* const addListenersToArticleButtons = document.querySelectorAll("#article-delete-button");
for (const i = 0; i < addListenersToArticleButtons.length; i++) {
    addListenersToArticleButtons.addEventListener("click", disableDeletion)
} */

/*     const elements = Array.from(document.getElementsByTagName('button')).filter(el => el.id === 'article-delete-button');
    elements.forEach(element => {
        element.style.display = "none";
        console.log("disableDeletion works");
    }) */

/*     const buttons = document.querySelectorAll("#article-delete-button");
        buttons.forEach(function(button) {
            button.addEventListener("click", disableDeletion())
        })
     document.querySelectorAll("article-delete-button").forEach(item => {
        item.addEventListener("click", disableDeletion => {
            
        })
    }) */

function renderArticles() {
    const articlesToRender = getArticlesFromLocalStorage();
    articlesToRender.forEach(article => {
        createArticleElement(article);
    });
}

window.addEventListener("DOMContentLoaded", () => { 
    renderArticles();
});

