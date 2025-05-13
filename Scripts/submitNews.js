console.log("submitNews.js is loaded successfully.");
    console.log(articleSubmitButton)
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
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    document.getElementById("currentDate").textContent = formattedDate;
    const articleDateFetch = document.getElementById("submissionDate").value = now.toISOString();

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
});

var articleForm = document.getElementById("submitArticleForm");

function saveArticleData() {
    localStorage.setItem("articleNameInput", articleNameFetch.value);
    localStorage.setItem("articleImage", articleImageFetch.value);
    localStorage.setItem("articleDescription", localStorage.value);
    localStorage.setItem("articleContents", localStorage.value);
    localStorage.setItem("articleAuthorName", localStorage.value);
    localStorage.setItem("submissionDate", localStorage.value);
}


window.addEventListener("DOMContentLoaded", () => {
    console.log("the event listener heard a fart");
    let isValid = false;

    const articleNameFetch = document.getElementById("articleNameInput");
    const articleImageFetch = document.getElementById("articleImage").files[0]; // problem child
    const articleDescriptionFetch = document.getElementById("articleDescription");
    const articleContentsFetch = document.getElementById("articleContents");
    const articleAuthorFetch = document.getElementById("articleAuthorName");
    //const articleDateFetch = document.getELementById("submissionDate");


    if (!articleNameFetch && !articleDescriptionFetch && !articleContentsFetch && !articleAuthorFetch) {
        console.log("big poopy was spotted, not a fard, red alert");
        alert("Please fill in all fields.")
        //isValid = false;
        return;
    } /* else { */

    const validFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validFileTypes.includes(articleImageFetch.type)) { // can't read what's undefined HAH HAHAHAHAHA
            console.log("IMAGE REQUIRED??? WHAT IS THIS, 1984???");
            alert("A valid image is required.");
            //isValid = false;
            return;
    }

    const maxSizeInBytes = 5 * 1024 * 1024;
    if (articleImageFetch.size > maxSizeInBytes) {
            console.log("IMAGE SIZE IS TOO BIG HOW ABOUT YOU FIT THESE TIDD-");
            alert("The image is too large, maximum size is 5MB.");
            //isValid = false;  
            return;
    } else {
        console.log("the promised land of ACTUAL FUCKING FUNCTIONALITY");
        isValid = true;
    }



/*         } else {
            alert("An error occured trying to upload the image.")
            //isValid = false;
        } 
    }*/
/*     if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("articleSubmitButton").click();
    } */
/*     if (!articleNameFetch) {
        alert("An article headline is required.");
        isValid = false;
    } else {
        isValid = true;
    }




    if (!articleDescriptionFetch) {
        alert("An article description is required.");
        isValid = false;
    } else {
        isValid = true;
    }


    if (!articleContentsFetch) {
        alert("The article's content is required.");
        isValid = false;
    } else {
        isValid = true;
    }

    // Minimum size limit?
    // Maximum size limit?


    if (!articleAuthorFetch || data.articles.articleAuthorFetch === 0) {
        alert("Who wrote this article, silly?");
        isValid = false;
    } else {
        isValid = true;
    }

    if (!articleDateFetch) {
        alert("An error with the date occured, please try again.")
        isValid = false;
    } else {
        isValid = true;
    } */
    console.log("SOMEHOW WE ENDED UP HERE AFTER ALL");
    const articleSubmitButton = document.getElementById("articleSubmitButton");

    articleSubmitButton.addEventListener("click", function (event) {
        console.log("SUBMIT BUTTON WORKS YOU DUM BICH")
        if (isValid) {
            saveArticleData();
            alert("Submitted article to Silly News, please remain silly.")
            //articleForm.requestFullscreen();
            imagePreview.style.display = "none";
            //articleDescriptionCounter.textContent = "0";

        } else if (!isValid) {
            console.log(articleNameFetch.value);
            console.log(articleImageFetch);
            console.log(articleDescriptionFetch.value);
            console.log(articleContentsFetch.value);
            console.log(articleAuthorFetch.value);
            console.log(isValid);
            alert("There are a few things missing before you can get silly..")
        }
    })

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
