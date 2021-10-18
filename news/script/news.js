function shownews() {
    let n = JSON.parse(localStorage.getItem("news"));


    let parent = document.getElementById("shownews");
    parent.innerHTML = null;

    

        let div = document.createElement("div");
        div.addEventListener("click", () => {
            localStorage.setItem("news", JSON.stringify(n));
            window.location.href ="news.html"
        })

        let img = document.createElement("img");
        img.src = n.urlToImage;

        let author = document.createElement("p")
        author.innerText = "by- "+ n.author;

        let title = document.createElement("h1")
        title.innerText = n.title;

        let desc = document.createElement("p")
        desc.innerText = n.description;

        let date = document.createElement("p")
        date.innerText = n.publishedAt.slice(0,10);

        div.append(img, author, title, desc, date);

        parent.append(div)

        
    
}
shownews();