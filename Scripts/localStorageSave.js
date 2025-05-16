import { Article } from "./articleLayout.js";

const articlesKey = "SAVED-ARTICLES";

export function saveArticleToLocalStorage(article) {
    if (!article instanceof Article) {
        return;
    }

    const savedArticles = localStorage.getItem(articlesKey);
    const parsedArticles = savedArticles ? JSON.parse(savedArticles): []
    let result;

    if (Array.isArray(parsedArticles)) {
        result = [...parsedArticles,article];
    } else {
        result = [article]
    }

    localStorage.setItem(articlesKey,JSON.stringify(result));
}

export function getArticlesFromLocalStorage() {
    const savedArticles = localStorage.getItem(articlesKey);
    const parsedArticles = savedArticles ? JSON.parse(savedArticles): []

    return parsedArticles;
}

/* function checkName(x) {
    return x = document.getElementById("article-delete-button").articleTitle;
    console.log(checkName)
} */

export function deleteDis(id) {
   
    const currentArticles = getArticlesFromLocalStorage();
    const elementIndex = currentArticles.findIndex(x => (x.articleId === id)/* x.articleId === article.articleId */);

    console.log(elementIndex)
    console.log(id)
    if (elementIndex < 0) {
        alert("Error deleting article.");
        return;
    }
    const newArticles = currentArticles.toSpliced(elementIndex,1);
    localStorage.setItem(articlesKey, JSON.stringify(newArticles));

    //const elementName = document.querySelector(articleName)
}