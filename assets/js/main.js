const countrySelect = document.getElementById("countries");
const newsContainer = document.getElementById("news");
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
    let general = [];
    const generalURL = `https://newsapi.org/v2/top-headlines?category=general&apiKey=5bde0cb7365f4794bb27c73391b0b635`;

    fetch(generalURL)
        .then((response) => response.json())
        .then((data) => {
            // Populate the business array
            data.articles.forEach((entry) => {
                general.push(entry);
            });

            let business = [];
            const businessURL = `https://newsapi.org/v2/top-headlines?category=business&apiKey=5bde0cb7365f4794bb27c73391b0b635`;

            fetch(businessURL)
                .then((response) => response.json())
                .then((data) => {
                    // Populate the business array
                    data.articles.forEach((entry) => {
                        business.push(entry);
                    });

                    let entertainment = [];
                    const entertainmentURL = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=5bde0cb7365f4794bb27c73391b0b635`;

                    fetch(entertainmentURL)
                        .then((response) => response.json())
                        .then((data) => {
                            // Populate the business array
                            data.articles.forEach((entry) => {
                                entertainment.push(entry);
                            });

                            let health = [];
                            const healthURL = `https://newsapi.org/v2/top-headlines?category=health&apiKey=5bde0cb7365f4794bb27c73391b0b635`;

                            fetch(healthURL)
                                .then((response) => response.json())
                                .then((data) => {
                                    // Populate the business array
                                    data.articles.forEach((entry) => {
                                        health.push(entry);
                                    });

                                    let science = [];
                                    const scienceURL = `https://newsapi.org/v2/top-headlines?category=science&apiKey=5bde0cb7365f4794bb27c73391b0b635`;

                                    fetch(scienceURL)
                                        .then((response) => response.json())
                                        .then((data) => {
                                            // Populate the business array
                                            data.articles.forEach((entry) => {
                                                science.push(entry);
                                            });

                                            let sports = [];
                                            const sportsURL = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=5bde0cb7365f4794bb27c73391b0b635`;

                                            fetch(sportsURL)
                                                .then((response) =>
                                                    response.json()
                                                )
                                                .then((data) => {
                                                    // Populate the business array
                                                    data.articles.forEach(
                                                        (entry) => {
                                                            sports.push(entry);
                                                        }
                                                    );

                                                    let technology = [];
                                                    const technologyURL = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=5bde0cb7365f4794bb27c73391b0b635`;

                                                    fetch(technologyURL)
                                                        .then((response) =>
                                                            response.json()
                                                        )
                                                        .then((data) => {
                                                            // Populate the business array
                                                            data.articles.forEach(
                                                                (entry) => {
                                                                    technology.push(
                                                                        entry
                                                                    );
                                                                }
                                                            );

                                                            const url = `https://newsapi.org/v2/top-headlines?${param}&apiKey=5bde0cb7365f4794bb27c73391b0b635`;

                                                            fetch(url)
                                                                .then(
                                                                    (
                                                                        response
                                                                    ) =>
                                                                        response.json()
                                                                )
                                                                .then(
                                                                    (data) => {
                                                                        newsContainer.innerHTML =
                                                                            "";

                                                                        data.articles.forEach(
                                                                            (
                                                                                entry
                                                                            ) => {
                                                                                if (
                                                                                    entry.description &&
                                                                                    entry.description.includes(
                                                                                        "�"
                                                                                    )
                                                                                ) {
                                                                                    // Skip this entry because it contains the unreadable character
                                                                                    return;
                                                                                }

                                                                                const author =
                                                                                    entry.author;
                                                                                const content =
                                                                                    entry.content;
                                                                                const description =
                                                                                    entry.description;
                                                                                let publishedAt =
                                                                                    new Date(
                                                                                        entry.publishedAt
                                                                                    );
                                                                                publishedAt =
                                                                                    publishedAt.toDateString();
                                                                                const titleVar =
                                                                                    entry.title;
                                                                                const url =
                                                                                    entry.url;
                                                                                const urlToImage =
                                                                                    entry.urlToImage !=
                                                                                    null
                                                                                        ? entry.urlToImage
                                                                                        : "https://i.pinimg.com/736x/4f/71/f2/4f71f29c0d155d8f5d929eaa6a9d1fbb.jpg";

                                                                                const article =
                                                                                    document.createElement(
                                                                                        "article"
                                                                                    );
                                                                                document
                                                                                    .querySelector(
                                                                                        "#news"
                                                                                    )
                                                                                    .appendChild(
                                                                                        article
                                                                                    );

                                                                                const img =
                                                                                    document.createElement(
                                                                                        "img"
                                                                                    );
                                                                                img.src =
                                                                                    urlToImage;
                                                                                img.classList.add(
                                                                                    "cardImgTop"
                                                                                );
                                                                                img.onerror =
                                                                                    function () {
                                                                                        this.src =
                                                                                            "https://i.pinimg.com/736x/4f/71/f2/4f71f29c0d155d8f5d929eaa6a9d1fbb.jpg";
                                                                                    };
                                                                                article.appendChild(
                                                                                    img
                                                                                );

                                                                                const divOuter =
                                                                                    document.createElement(
                                                                                        "div"
                                                                                    );
                                                                                divOuter.classList.add(
                                                                                    "outer"
                                                                                );
                                                                                article.appendChild(
                                                                                    divOuter
                                                                                );

                                                                                const divInner =
                                                                                    document.createElement(
                                                                                        "div"
                                                                                    );
                                                                                divInner.classList.add(
                                                                                    "inner"
                                                                                );
                                                                                divOuter.appendChild(
                                                                                    divInner
                                                                                );

                                                                                if (
                                                                                    author !=
                                                                                        null &&
                                                                                    author.indexOf(
                                                                                        "www"
                                                                                    ) ===
                                                                                        -1
                                                                                ) {
                                                                                    const icon =
                                                                                        document.createElement(
                                                                                            "img"
                                                                                        );
                                                                                    icon.src =
                                                                                        "./assets/img/Free_Person_Icon_Vector-01-3.jpg";
                                                                                    icon.classList.add(
                                                                                        "icon"
                                                                                    );
                                                                                    divInner.appendChild(
                                                                                        icon
                                                                                    );

                                                                                    const h3 =
                                                                                        document.createElement(
                                                                                            "h3"
                                                                                        );
                                                                                    h3.textContent =
                                                                                        author;
                                                                                    divInner.appendChild(
                                                                                        h3
                                                                                    );
                                                                                }

                                                                                const h1 =
                                                                                    document.createElement(
                                                                                        "h1"
                                                                                    );
                                                                                h1.innerText =
                                                                                    titleVar;
                                                                                article.appendChild(
                                                                                    h1
                                                                                );

                                                                                const p =
                                                                                    document.createElement(
                                                                                        "p"
                                                                                    );
                                                                                p.innerText =
                                                                                    description;
                                                                                article.appendChild(
                                                                                    p
                                                                                );

                                                                                const span =
                                                                                    document.createElement(
                                                                                        "span"
                                                                                    );
                                                                                span.innerText =
                                                                                    publishedAt;
                                                                                article.appendChild(
                                                                                    span
                                                                                );

                                                                                const a =
                                                                                    document.createElement(
                                                                                        "a"
                                                                                    );
                                                                                a.innerText =
                                                                                    "Read Article";
                                                                                a.href =
                                                                                    url;
                                                                                article.appendChild(
                                                                                    a
                                                                                );

                                                                                const isGeneral =
                                                                                    general.some(
                                                                                        (
                                                                                            generalEntry
                                                                                        ) => {
                                                                                            return (
                                                                                                generalEntry.title ===
                                                                                                entry.title
                                                                                            );
                                                                                        }
                                                                                    );
                                                                                const isBusiness =
                                                                                    business.some(
                                                                                        (
                                                                                            businessEntry
                                                                                        ) => {
                                                                                            return (
                                                                                                businessEntry.title ===
                                                                                                entry.title
                                                                                            );
                                                                                        }
                                                                                    );
                                                                                const isEntertainment =
                                                                                    entertainment.some(
                                                                                        (
                                                                                            entertainmentEntry
                                                                                        ) => {
                                                                                            return (
                                                                                                entertainmentEntry.title ===
                                                                                                entry.title
                                                                                            );
                                                                                        }
                                                                                    );

                                                                                const isHealth =
                                                                                    health.some(
                                                                                        (
                                                                                            healthEntry
                                                                                        ) => {
                                                                                            return (
                                                                                                healthEntry.title ===
                                                                                                entry.title
                                                                                            );
                                                                                        }
                                                                                    );

                                                                                const isScience =
                                                                                    science.some(
                                                                                        (
                                                                                            scienceEntry
                                                                                        ) => {
                                                                                            return (
                                                                                                scienceEntry.title ===
                                                                                                entry.title
                                                                                            );
                                                                                        }
                                                                                    );

                                                                                const isSports =
                                                                                    sports.some(
                                                                                        (
                                                                                            sportsEntry
                                                                                        ) => {
                                                                                            return (
                                                                                                sportsEntry.title ===
                                                                                                entry.title
                                                                                            );
                                                                                        }
                                                                                    );

                                                                                const isTechnology =
                                                                                    technology.some(
                                                                                        (
                                                                                            technologyEntry
                                                                                        ) => {
                                                                                            return (
                                                                                                technologyEntry.title ===
                                                                                                entry.title
                                                                                            );
                                                                                        }
                                                                                    );

                                                                                if (
                                                                                    isGeneral
                                                                                ) {
                                                                                    const h2 =
                                                                                        document.createElement(
                                                                                            "h2"
                                                                                        );
                                                                                    h2.innerText =
                                                                                        "# General";
                                                                                    divOuter.appendChild(
                                                                                        h2
                                                                                    );
                                                                                } else if (
                                                                                    isBusiness
                                                                                ) {
                                                                                    const h2 =
                                                                                        document.createElement(
                                                                                            "h2"
                                                                                        );
                                                                                    h2.innerText =
                                                                                        "# Business";
                                                                                    divOuter.appendChild(
                                                                                        h2
                                                                                    );
                                                                                } else if (
                                                                                    isEntertainment
                                                                                ) {
                                                                                    const h2 =
                                                                                        document.createElement(
                                                                                            "h2"
                                                                                        );
                                                                                    h2.innerText =
                                                                                        "# Entertainment";
                                                                                    divOuter.appendChild(
                                                                                        h2
                                                                                    );
                                                                                } else if (
                                                                                    isHealth
                                                                                ) {
                                                                                    const h2 =
                                                                                        document.createElement(
                                                                                            "h2"
                                                                                        );
                                                                                    h2.innerText =
                                                                                        "# Health";
                                                                                    divOuter.appendChild(
                                                                                        h2
                                                                                    );
                                                                                } else if (
                                                                                    isScience
                                                                                ) {
                                                                                    const h2 =
                                                                                        document.createElement(
                                                                                            "h2"
                                                                                        );
                                                                                    h2.innerText =
                                                                                        "# Science";
                                                                                    divOuter.appendChild(
                                                                                        h2
                                                                                    );
                                                                                } else if (
                                                                                    isSports
                                                                                ) {
                                                                                    const h2 =
                                                                                        document.createElement(
                                                                                            "h2"
                                                                                        );
                                                                                    h2.innerText =
                                                                                        "# Sports";
                                                                                    divOuter.appendChild(
                                                                                        h2
                                                                                    );
                                                                                } else if (
                                                                                    isTechnology
                                                                                ) {
                                                                                    const h2 =
                                                                                        document.createElement(
                                                                                            "h2"
                                                                                        );
                                                                                    h2.innerText =
                                                                                        "# Technology";
                                                                                    divOuter.appendChild(
                                                                                        h2
                                                                                    );
                                                                                }
                                                                            }
                                                                        );
                                                                    }
                                                                );
                                                        });
                                                });
                                        });
                                });
                        });
                });
        });
}

fetchNews("category=general");
