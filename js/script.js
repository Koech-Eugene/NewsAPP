// variable declaration
const home = document.getElementById("general");
const politics = document.getElementById("politics")
const business = document.getElementById("business");
const entertainment = document.getElementById("entertainment");
const technology = document.getElementById("tech");
const sports = document.getElementById("sports");
const search = document.getElementById("search");
const newsHeader = document.getElementById("newsHeader");
const newsInfo = document.getElementById("newsInfo");
const searchNews = document.getElementById("newsSearch");
const mybutton = document.getElementById("myBtn")

// Declare variable the apis
// ! Work on fetching the data from one api and filter out data to the respective categories
const api_key = config.apiKey
const generalNews = "https://newsapi.org/v2/everything?q=sources&language=en&apiKey=";
const politicsNews ="https://newsapi.org/v2/top-headlines?langauge=en&category=politics&apiKey="
const businessNews = "https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=";
const entertainentNews =
  "https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=";
const techNews =
  "https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=";
const sportsNews =
  "https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=";
const Search_news = "https://newsapi.org/v2/everything?q=sources&apiKey=";

document.addEventListener("DOMContentLoaded", function () {
    window.onload = function(){
        fetchGeneralNews()
    }
    window.onscroll = function () {
      scrollFunction()
    }
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    mybutton.addEventListener("click", ()=>{
      topFunction()
    })

  // ! look for a method to make one fetch request to be reuasble
  const fetchGeneralNews = async () => {
    const response = await fetch(generalNews + api_key);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      console.log(data);
      displayNews(data);
    } else {
        alert("HTTP Error" + response.status)
    }
  };
  const fetchPoliticsNews = async () => {
    const response = await fetch(politicsNews + api_key);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      console.log(data)
      displayNews(data);
    } else {
        alert("HTTP Error" + response.status)
    }
  };
  const fetchBusinesNews = async () => {
    const response = await fetch(businessNews + api_key);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      //console.log(data)
      displayNews(data);
    } else {
        alert("HTTP Error" + response.status)
    }
  };
  const fetchEntertainmentNews = async () => {
    const response = await fetch(entertainentNews + api_key);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      console.log(data);
      //console.log(data)
      displayNews(data);
    } else {
      alert("HTTP Error" + response.status)
    }
  };
  const fetchTechNews = async () => {
    const response = await fetch(techNews + api_key);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      console.log(data);
      displayNews(data);
    } else {
      alert("HTTP Error" + response.status)
    }
  };
  const fetchSportsNews = async () => {
    const response = await fetch(sportsNews + api_key);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();

      console.log(data);
      displayNews(data);
    } else {
      alert("HTTP Error" + response.status)
    }
  };
  const fetchSearchNews = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${api_key}`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      displayNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
      // Display an error message to the user
    }
  };

  home.addEventListener("click", function () {
    fetchGeneralNews();
  });
  politics.addEventListener("click", function () {
    fetchPoliticsNews();
  });
  business.addEventListener("click", function () {
    fetchBusinesNews();
  });
  entertainment.addEventListener("click", function () {
    fetchEntertainmentNews();
  });
  technology.addEventListener("click", function () {
    fetchTechNews();
  });
  sports.addEventListener("click", function () {
    fetchSportsNews();
  });
  search.addEventListener("submit", function (e) {
    e.preventDefault()
    let searchQuery = searchNews.value
    fetchSearchNews(searchQuery);
  });

  function displayNews(data) {
    newsInfo.innerHTML = "";
    const articles = data.articles;
    const articlesContainer = document.createElement("div");
    articlesContainer.classList.add("container");
    const articlesRow = document.createElement("div");
    articlesRow.classList.add("row");
    articles.forEach((article) => {
      const articleColumn = document.createElement("div");
      articleColumn.classList.add("col-md-4");
      const articleCard = document.createElement("div");
      articleCard.classList.add("card");
      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
      cardHeader.textContent = article.title;
      articleCard.appendChild(cardHeader);
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      if (article.urlToImage) {
        const image = document.createElement("img");
        image.src = article.urlToImage;
        image.classList.add("img-fluid");
        cardBody.appendChild(image);
      }
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = article.description;
      cardBody.appendChild(descriptionElement);
      const linkElement = document.createElement("a");
      linkElement.href = article.url;
      linkElement.textContent = "Read more";
      linkElement.classList.add("btn", "btn-primary");
      cardBody.appendChild(linkElement);

      articleCard.appendChild(cardBody);
      articleColumn.appendChild(articleCard);
      articlesRow.appendChild(articleColumn);
    });

    articlesContainer.appendChild(articlesRow);
    newsInfo.appendChild(articlesContainer);
  }
});
// * TODO  populate the page on refresh, enable the search, add images to the news, add proper css to the page, add a footer, work on the error messages for the fetch request
// *TODO commet my code