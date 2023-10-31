console.log("Bienvenidos al Search!");


// get each H1 from the tags articles
let articles = document.querySelectorAll("article h1");
//eachArticle = articles.querySelectorAll("h1");

// get the input from the search
let input = document.querySelector("input");

// get the button from the search
let button = document.querySelector("button");

// get the div where the results will be shown
let results = document.querySelector(".results");

// search the input from each article
function search() {
    // let search = input.value.toLowerCase();
    // for (let i = 0; i < eachArticle.length; i++) {
    //     let article = eachArticle[i].innerHTML.toLowerCase();
    //     if (article.indexOf(search) >= 0) {
    //         eachArticle[i].style.display = "block";
    //     } else {
    //         eachArticle[i].style.display = "none";
    //     }
    // }
}

// show the results
function showResults() {
    results.style.display = "block";
}

//console.log(eachArticle);


// get the content of each h1 inside the article tag
for (let i = 0; i < articles.length; i++) {
    //console.log("encontre artículo")
    let article = articles[i].innerHTML;
    console.log(i + " " + article);
}
