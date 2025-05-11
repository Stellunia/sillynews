console.log("submitNews.js is loaded successfully.");

import { Article } from "./articleLayout.js";

async function fetchArticle(articleUrl) {
    try {
        const res = await fetch(articleUrl);
        const data = await res.json();
        if (!data.articles || data.articles.length === 0) {
            return null;
        }

    const article = data.articles[0];

    return new Article(
        article.strArticleName,
        article.strArticleImage,
        article.strArticleDescription,
        article.strArticleContents,
        article.strArticleAuthor,
        article.strArticleDate,
    );

    } catch (error) {
        console.log(error);
    }
}

function displayArticle(article) {
    const articleName = document.getElementById("articleName");
    const articleImage = document.getElementById("articleImage");
    const articleDescription = document.getElementById("articleDescription");
    const articleContents = document.getElementById("articleContents");
    const articleAuthor = document.getElementById("articleAuthorName");
    const articleDate = document.getElementById("submissionDate");

    articleName.innerText = article.articleName;
    
    const img = document.createElement("img");
    img.setAttribute("src", article.articleImage);
    articleImage.appendChild(img);

    articleDescription.innerText = article.articleDescription;
    articleContents.innerText = article.articleContents;
    articleAuthor.innerText = article.articleAuthor;
    articleDate.innerText = article.articleDate;

}

//document.getElementById("burgrr").addEventListener("click", sidebar_open);

document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-UK", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    document.getElementById("currentDate").textContent = formattedDate;
    document.getElementById("submissionDate").value = now.toISOString();

    const articleDescriptionTextArea = document.getElementById("articleDescription")
    const articleDescriptionCounter = document.getElementById("articleDescriptionCounter");
    
    articleDescriptionTextArea.addEventListener("input", function() {
        const currentLength = this.value.length;
        articleDescriptionCounter.textContent = currentLength;
    
        if (currentLength >= 50) {
            articleDescriptionCounter.style.color = '#ff6600';
        } else {
            articleDescriptionCounter.style.color = '#ffffff';
        }
    });


const imageInput = document.getElementById("articleImage");
const imagePreview = document.getElementById("articleImagePreview");

imageInput.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            imagePreview.src = this.result;
            imagePreview.style.display = "block";
        });

        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = "none";
    }
});

var articleForm = document.getElementById("submitArticleForm");

articleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    const articleNameFetch = document.getElementById("articleNameInput");
    if (!headline) {
        //Error handling?
    }

    const articleImageFetch = document.getElementById("articleImage").files[0];
    if (articleImageFetch) {
        const maxSizeInBytes = 5 * 1024 * 1024;
        if (articleImageFetch.size > maxSizeInBytes) {
            // Error handling?            
        }

        const validFileTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!validFileTypes.includes(articleImageFetch.type)) {
            // Error handling?
        }
    }

    const articleDescriptionFetch = document.getElementById("articleDescription").value.trim();
    // Error handling?

    const articleContentsFetch = document.getElementById("articleContents");
    // Error handling?
    // Minimum size limit?
    // Maximum size limit?

    const articleAuthorFetch = document.getElementById("articleAuthorName");
    // Error handling?

    if (isValid) {
        alert("Submitted article to Silly News, please remain silly.")

        articleForm.requestFullscreen();
        imagePreview.style.display = "none";
        articleDescriptionCounter.textContent = "0";
        
    }
    });
});









//var articleDateFetch = document.date;

/* function fetchArticle(e) {
    var articleName = localStorage.getItem();
    var articleImage = localStorage.getItem();
    var articleDescription = localStorage.getItem();
    var articleContents = localStorage.getItem();
    var articleAuthor = localStorage.getItem();

    articleNameFetch.value = articleName;
    articleImageFetch.value = articleImage;
    articleDescriptionFetch = articleDescription;
    articleContentsFetch = articleContents;
    articleAuthorFetch = articleAuthor;

    return new articleAuthor(

    )
}

function getArticleForm(e) {
    var articleForm = document.getElementById("articleSubmitButton");

    articleForm.style.display = "none";

    var processArticle = document.createElement("span");

    processArticle.appendChild(document.createTextNode("Processing article.."));

    articleForm.parentNode.insertBefore(processArticle, articleForm);
}

function submitArticle() {
    document.getElementById("articleSubmitButton").submit();
} */
