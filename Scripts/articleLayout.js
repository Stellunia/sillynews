export class Article {
    constructor(articleTitle, articleImage, articleDescription, articleContents, articleAuthor, articleDate) {
        if (!articleDate instanceof Date) {
            alert("Date error happened")
            throw new Error("Date error, cannot create an ID")
        }
        this.articleId = articleDate.UTC();
        this.articleTitle = articleTitle;
        this.articleImage = articleImage;
        this.articleDescription = articleDescription;
        this.articleContents = articleContents;
        this.articleAuthor = articleAuthor;
        this.articleDate = articleDate;
    }
}