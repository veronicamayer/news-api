const countrySelect = document.getElementById("countries");
const newsContainer = document.getElementById("news");
const topNewsContainer = document.getElementById("topNews");
const categoryButtons = document.querySelectorAll("button");
const search = document.querySelector("#search");
const searchInput = document.querySelector("input");

countrySelect.addEventListener("change", () => {
    param = `country=${countrySelect.value}`;
    searchInput.value = "";
    fetchNews(param);
});

search.addEventListener("submit", (event) => {
    event.preventDefault();
    countrySelect.value = "";
    param = `q=${searchInput.value}`;
    fetchNews(param);
});

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        countrySelect.value = "";
        searchInput.value = "";
        const param = `category=${button.dataset.category}`;
        fetchNews(param);
    });
});

function fetchNews(param) {
    const url = `http://newsapi.org/v2/top-headlines?${param}&apiKey=208bec6edc4c4396a8698c61fafda89a`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            newsContainer.innerHTML = "";
            topNewsContainer.innerHTML = "";

            let counter = 0;

            data.articles.forEach((entry) => {
                if (entry.title.includes("�")) {
                    return;
                } else if (entry.description == null) {
                    return;
                } else if (entry.description.includes("�")) {
                    return;
                }

                const author = entry.author;
                const content = entry.content;
                const description = entry.description;
                let publishedAt = new Date(entry.publishedAt);
                publishedAt = publishedAt.toDateString();
                const titleVar = entry.title;
                const url = entry.url;
                const urlToImage =
                    entry.urlToImage != null
                        ? entry.urlToImage
                        : "https://i.pinimg.com/736x/4f/71/f2/4f71f29c0d155d8f5d929eaa6a9d1fbb.jpg";

                const article = document.createElement("article");

                if (counter < 3) {
                    document.querySelector("#topNews").appendChild(article);
                } else {
                    document.querySelector("#news").appendChild(article);
                }

                counter++;

                const img = document.createElement("img");
                img.src = urlToImage;
                img.classList.add("cardImgTop");
                img.onerror = function () {
                    this.src =
                        "https://i.pinimg.com/736x/4f/71/f2/4f71f29c0d155d8f5d929eaa6a9d1fbb.jpg";
                };
                article.appendChild(img);

                const divOuter = document.createElement("div");
                divOuter.classList.add("outer");
                article.appendChild(divOuter);

                const divInner = document.createElement("div");
                divInner.classList.add("inner");
                divOuter.appendChild(divInner);

                if (
                    author != null &&
                    author.indexOf("www") === -1 &&
                    author.includes("�") == false
                ) {
                    const icon = document.createElement("img");
                    icon.src = "./assets/img/person.png";
                    icon.classList.add("icon");
                    divInner.appendChild(icon);

                    const h3 = document.createElement("h3");
                    h3.textContent = author;
                    divInner.appendChild(h3);
                }

                const h1 = document.createElement("h1");
                h1.innerText = titleVar;
                article.appendChild(h1);

                const p = document.createElement("p");
                p.innerText = description;
                article.appendChild(p);

                const span = document.createElement("span");
                span.innerText = publishedAt;
                article.appendChild(span);

                const a = document.createElement("a");
                a.innerText = "Read Article";
                a.href = url;
                a.target = "_blank";
                article.appendChild(a);
            });
        });
}

fetchNews("category=general");

window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var header = document.querySelector("header");
    header.style.paddingTop = 30 - scrollPosition / 5 + "px";
    header.style.paddingBottom = 30 - scrollPosition / 5 + "px";
});
