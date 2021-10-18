async function topStories() {
    
    let res = await fetch("http://newsapi.org/v2/top-headlines?country=in&apiKey=c3659c86fbd1421f8865f6cdebf17369");
// 
    let news = await res.json();
    shownews(news.articles);
}
topStories();


//show top 10 news;

function shownews(news) {
    
    let parent = document.getElementById("topstories");
    parent.innerHTML = null;

    news.forEach(n => {

        let div = document.createElement("div");
        div.setAttribute("class","new")
        div.addEventListener("click", () => {
            localStorage.setItem("news", JSON.stringify(n));
            window.location.href ="news.html"
        })

        let img = document.createElement("img");
        img.src = n.urlToImage;

        let author = document.createElement("p")
        author.innerText = "by: "+ n.author;

        let title = document.createElement("h3")
        title.innerText = n.title;

        // let desc = document.createElement("p")
        // desc.innerText = n.description;

        let date = document.createElement("p")
        date.innerText = n.publishedAt.slice(0,10);

        div.append(img, author, title, date);

        parent.append(div)

        
    });
}

function searchNews() {
    let new_search = document.getElementById("searchnews").value;
    localStorage.setItem("search", JSON.stringify(new_search));
    window.location.href = "search.html";
    
}