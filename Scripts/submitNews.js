console.log("submitNews.js is loaded successfully.");
console.log(articleSubmitButton)
import { Article } from "./articleLayout.js";
import { getArticlesFromLocalStorage, saveArticleToLocalStorage } from "./localStorageSave.js"




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

document.addEventListener("DOMContentLoaded", function () {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-UK", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    document.getElementById("currentDate").textContent = formattedDate;
    const articleDateFetch = document.getElementById("submissionDate").value = now.toISOString();

    const articleDescriptionTextArea = document.getElementById("articleDescription")
    const articleDescriptionCounter = document.getElementById("articleDescriptionCounter");

    articleDescriptionTextArea.addEventListener("input", function () {
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

    imageInput.addEventListener("change", function () {
        const file = this.files[0];
        console.log(file);
        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                imagePreview.src = this.result;
                imagePreview.style.display = "block";
            });

            reader.readAsDataURL(file);
        } else {
            imagePreview.style.display = "none";
        }
    });
});


function valideFileType() {
    const inputElement = document.getElementById("articleImage");
    const files = inputElement.files;
    if (files.length == 0) {
        return false;
    } else {
        const filename = files[0].name;

        const extension = filename.substr(filename.lastIndexOf("."));

        const allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png)$/i;

        const isAllowed = allowedExtensionsRegx.test(extension);

        if (isAllowed) {
            alert("Image file detected.")
        } else {
            alert("Invalid file type.");
            return false;
        }
    }
}

const validFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png"];

function isValidateFileType(file) {
    return validFileTypes.includes(file.type);
}

function resetForm() {
    const articleForm = document.getElementById("submitArticleForm");
    articleForm.reset();
    return false;
}

window.addEventListener("DOMContentLoaded", () => {
    console.log("The event listened heard its call when the site was loaded.");
    let isValid = false;

    const articleNameFetch = document.getElementById("articleNameInput");
    const articleImageFetch = document.getElementById("articleImage"); // problem child
    const articleDescriptionFetch = document.getElementById("articleDescription");
    const articleContentsFetch = document.getElementById("articleContents");
    const articleAuthorFetch = document.getElementById("articleAuthorName");
    //const articleDateFetch = document.getELementById("submissionDate");

    async function getBase64Img(img) {
        if (!img) {
            alert("this isn't an image at all, I've been lied to >:(");
            return;
        }
        const fr = new FileReader()
        fr.readAsDataURL(img)
        return new Promise ((resolve) => {
                fr.onload = function(e) {
                resolve(e.target.result);
            }
        })
    }
        const DateOfArticleToId = Date.now();
        //this.articleId = DateOfArticleToId;
    async function getFormValues() {
        return {artId: Date.now(), 
            name:articleNameFetch.value,
            image: await getBase64Img(articleImageFetch.files[0]),
            description: articleDescriptionFetch.value,
            contents: articleContentsFetch.value,
            author: articleAuthorFetch.value,
            date: Date.now()};
    }

    articleSubmitButton.addEventListener("click", async function (event) {
        if (!articleNameFetch || !articleDescriptionFetch || !articleContentsFetch || !articleAuthorFetch) {
            console.log("Missing information - please fill in the form.");
            alert("Please fill in all fields of the form.")
            //isValid = false;
            return;
        } /* else { */

        console.log(articleImageFetch.files[0]);
        if (!isValidateFileType(articleImageFetch.files[0])) { // can't read what's undefined HAH HAHAHAHAHA
            console.log(articleImageFetch.files[0]);
            console.log("No image found, please attach a valid image.");
            alert("A valid image is required.");
            //isValid = false;
            return;
        }

        const maxSizeInBytes = 5 * 1024 * 1024;
        if (articleImageFetch.size > maxSizeInBytes) {
            console.log("Image size is too big, please use a file smaller than 5MB.");
            alert("The image is too large, maximum size is 5MB.");
            //isValid = false;  
            return;
        } else {
            console.log("isValid returns true, article submission is proceeding.");
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
        console.log("Passed checks to allow attempt at submitting article.");
        const articleSubmitButton = document.getElementById("articleSubmitButton");


        console.log("Submit button call heard, all is functional.")
        if (isValid) {

            console.log(articleImageFetch.files[0]);

            const {  artId,  name, image, description, contents, author, date } = await getFormValues();
            const article = new Article( artId,  name, image, description, contents, author, date)
            console.log(image);
            console.log(article);
            console.log(date);
            console.log(artId);

            saveArticleToLocalStorage(article);
            console.log(saveArticleToLocalStorage);
            //saveArticleData();
            alert("Submitted article to Silly News, please remain silly.")
            //articleForm.requestFullscreen();
            const imagePreview = document.getElementById("articleImagePreview");
            imagePreview.style.display = "none";
            //articleDescriptionCounter.textContent = "0";
            resetForm();

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










//const articleDateFetch = document.date;

/* function fetchArticle(e) {
    const articleName = localStorage.getItem();
    const articleImage = localStorage.getItem();
    const articleDescription = localStorage.getItem();
    const articleContents = localStorage.getItem();
    const articleAuthor = localStorage.getItem();

    articleNameFetch.value = articleName;
    articleImageFetch.value = articleImage;
    articleDescriptionFetch = articleDescription;
    articleContentsFetch = articleContents;
    articleAuthorFetch = articleAuthor;

    return new articleAuthor(

    )
}

function getArticleForm(e) {
    const articleForm = document.getElementById("articleSubmitButton");

    articleForm.style.display = "none";

    const processArticle = document.createElement("span");

    processArticle.appendChild(document.createTextNode("Processing article.."));

    articleForm.parentNode.insertBefore(processArticle, articleForm);
}

function submitArticle() {
    document.getElementById("articleSubmitButton").submit();
} */
