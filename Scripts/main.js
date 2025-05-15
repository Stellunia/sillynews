import { createArticleElement } from "./displayArticles.js";
import { getArticlesFromLocalStorage } from "./localStorageSave.js";

console.log("main.js is loaded successfully.");
export function sidebar_open() {
    document.getElementById("sillynewsSidebar").style.display = "flex";
}

export function sidebar_close() {
    document.getElementById("sillynewsSidebar").style.display = "none";
}

document.getElementById("burgrr").addEventListener("click", sidebar_open);

document.getElementById("sidebar-items").addEventListener("click", sidebar_close);

function renderArticles() {
    const articlesToRender = getArticlesFromLocalStorage();
    articlesToRender.forEach(article => {
        createArticleElement(article);
    });
}

window.addEventListener("DOMContentLoaded", () => { 
    renderArticles();
    
});