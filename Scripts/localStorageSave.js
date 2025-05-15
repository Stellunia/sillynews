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

export function deleteDis(article) {
    if (!article instanceof Article) {
        alert("EAT MY ENTIRE library YOU walross")
        throw new Error("Cannot delete what isn't an article.")
    }
    const currentArticles = getArticlesFromLocalStorage();
    const elementIndex = currentArticles.findIndex(x => x.articleId === article.articleId);
    const newArticles = currentArticles.toSpliced(elementIndex,1);
    localStorage.setItem(articlesKey.JSON.stringify(currentArticles));
}