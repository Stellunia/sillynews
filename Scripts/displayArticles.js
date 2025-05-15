import { Article } from "./articleLayout.js";

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
    //                                  h2 + p
}

function whateverTheShit(article) {
    if (!article instanceof Article) {
        alert("oopsie poopsie there's been a fucky wucky")
        throw new Error("the article failed to display - Error type is that it's fucking icnorrect.")
    }
    const articleColumn = document.createElement("div");
    articleColumn.classList.add("article-column");

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

    articleOverlay.appendChild(articleText);
    articleOverlay.appendChild(articleDescript);
    articleContainer.appendChild(newsImage);
    articleContainer.appendChild(articleOverlay);
    articleColumn.appendChild(articleContainer);
    return articleColumn;
}