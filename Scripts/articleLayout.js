export class Article {
    constructor(articleId, articleTitle, articleImage, articleDescription, articleContents, articleAuthor, articleDate) {
        if (!articleDate instanceof Date) {
            alert("Error: Something went wrong with the date, try again or something.")
            throw new Error("Date error, something went awry - articleDate is not an instanceof Date.")
        }
        this.articleId = articleId;
        this.articleTitle = articleTitle;
        this.articleImage = articleImage;
        this.articleDescription = articleDescription;
        this.articleContents = articleContents;
        this.articleAuthor = articleAuthor;
        this.articleDate = articleDate;
    }
}