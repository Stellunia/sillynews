import { disableDeletion } from "./articleDeleteButton.js";
import { Article } from "./articleLayout.js";
import { deleteDis } from "./localStorageSave.js";

export function createArticleElement(article) {
    const newArticle = whateverTheShit(article);
    const newsContainer = document.getElementById("news-container");

    let targetNewsGrid = newsContainer.children[0];

    if (targetNewsGrid.children.length >= 5) {
        const newsGrid = document.createElement("div");
        newsGrid.classList.add("news-grid");
        targetNewsGrid = newsGrid;

        newsContainer.prepend(targetNewsGrid);
    }
    targetNewsGrid.prepend(newArticle);
    // newsContainer = main article container
    //      newsGrid = article lines container (only 5)
    //          articleContainer = singular article container
    //              articleImage + articleOverlay
    //                                  h2 + p + button
}

function whateverTheShit(article) {
    if (!article instanceof Article) {
        alert("Article failed to display")
        throw new Error("the article failed to display - Error type is that it's (very) incorrect.")
    }
    const articleColumn = document.createElement("div");
    articleColumn.classList.add("article-column");
    const articleNameIdentifier = article.articleTitle;
    const articleIdIdentifier = article.articleId;
    articleColumn.setAttribute("name", articleIdIdentifier)

    const articleContainer = document.createElement("div");
    articleContainer.classList.add("article-container");

    const newsImage = document.createElement("img");
    newsImage.classList.add("article-image");
    newsImage.setAttribute("src", article.articleImage);

    const articleOverlay = document.createElement("div");
    articleOverlay.classList.add("article-overlay");

    const articleText = document.createElement("h2");
    articleText.innerHTML = article.articleTitle;

    const articleDescript = document.createElement("p");
    articleDescript.innerHTML = article.articleDescription;

    const articleDeleteButton = document.createElement("button");
    articleDeleteButton.classList.add("article-delete-button");
    articleDeleteButton.setAttribute("style", "display:none");
    articleDeleteButton.setAttribute("id", "article-delete-button");
    articleDeleteButton.setAttribute("name", articleIdIdentifier);
    articleDeleteButton.addEventListener("click", disableDeletion);
    articleDeleteButton.addEventListener("click", function(e) {deleteDis(articleIdIdentifier)});
    //element.addEventListener("click", disableDeletion);
    //articleDeleteButton.id.add("article-delete-button");
    //articleDeleteButton.style.display.add("display:none");

    articleOverlay.appendChild(articleText);
    articleOverlay.appendChild(articleDescript);
    articleOverlay.appendChild(articleDeleteButton);
    articleContainer.appendChild(newsImage);
    articleContainer.appendChild(articleOverlay);
    articleColumn.appendChild(articleContainer);
    return articleColumn;
}