async function showResult() {

    let search = JSON.parse(localStorage.getItem("search"));
    console.log(search);
    let res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=c3659c86fbd1421f8865f6cdebf17369`);
         

    let news = await res.json();
    console.log(news)


    let parent = document.getElementById("topstories");
    parent.innerHTML = null;

    news.articles.forEach(n => {

        let div = document.createElement("div");
        div.addEventListener("click", () => {
            localStorage.setItem("news", JSON.stringify(n));
            window.location.href ="news.html"
        })

        let img = document.createElement("img");
        img.src = n.urlToImage;

        let author = document.createElement("p")
        author.innerText = "by-"+n.author;

        let title = document.createElement("h3")
        title.innerText = n.title;

        // let desc = document.createElement("p")
        // desc.innerHTML = n.description;

        let date = document.createElement("p")
        date.innerText = n.publishedAt.slice(0,10);

        div.append(img, author, title, date);

        parent.append(div)

        
    });
}
showResult();