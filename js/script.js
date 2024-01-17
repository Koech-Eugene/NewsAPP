// variable declaration
const home = document.getElementById("general")
const business = document.getElementById("business")
const entertainment = document.getElementById("entertainment")
const technology = document.getElementById("tech")
const sports = document.getElementById("sports")
const search = document.getElementById("search")
const newsHeader = document.getElementById("newsHeader")
const newsInfo = document.getElementById("newsInfo")
const searchNews = document.getElementById("newsSearch")

// Get the apis 
const api_key = "eddebd9279ad454c8f0975735f3909b4"
const generalNews = "https://newsapi.org/v2/top-headlines/sources?language=en&apiKey="
const businessNews ="https://newsapi.org/v2/top-headlines/sources?language=en&category=business&apiKey="
const entertainentNews ="https://newsapi.org/v2/top-headlines/sources?language=en&category=entertainment&apiKey="
const techNews = "https://newsapi.org/v2/top-headlines/sources?language=en&category=technology&apiKey="
const sportsNews = "https://newsapi.org/v2/top-headlines/sources?language=en&category=sports&apiKey="
const Search_news = "https://newsapi.org/v2/everything?q=bitcoin"

document.addEventListener("DOMContentLoaded", function(){
    // ! look for a method to make one fetch request to be reuasble
    const fetchGeneralNews = async()=>{
        const response = await fetch(generalNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            console.log(data)
            displayNews(data)
        }else{
            
        }
        
    }
    const fetchBusinesNews = async()=>{
        const response = await fetch(businessNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            //console.log(data)
            displayNews(data)
        }else{
            
        }
       
    }
    const fetchEntertainmentNews = async()=>{
        const response = await fetch(entertainentNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            console.log(data)
            //console.log(data)
            displayNews(data)
        }else{
            
        }
       
    }
    const fetchTechNews= async()=>{
        const response = await fetch(techNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            console.log(data)
            displayNews(data)
        }else{
            
        }

    }
    const fetchSportsNews= async()=>{
        const response = await fetch(sportsNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()

            console.log(data)
            displayNews(data)
        }else{
            
        }
    }
    const fetchSearchNews= async()=>{
        const response = await fetch(Search_news+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            //console.log(data)
            displayNews(data)
        }else{
            
        }
    }


    home.addEventListener("click", function(){
        fetchGeneralNews()
    })
    business.addEventListener("click", function(){
        fetchBusinesNews()
    })
    entertainment.addEventListener("click", function(){
        fetchEntertainmentNews()
    })
    technology.addEventListener("click", function(){
        fetchTechNews()
    })
    sports.addEventListener("click", function(){
        fetchSportsNews()
    })
    search.addEventListener("click", function(){
        fetchSearchNews()
    })
    

function displayNews(data) {
    // Clear existing news content
    newsInfo.innerHTML = "";
    // Extract the sources array from the response data
    const sources = data.sources;
    // Create a container for the sources using Bootstrap grid
    const sourcesContainer = document.createElement("div");
    sourcesContainer.id = "sourceList";
    sourcesContainer.classList.add("container"); // Bootstrap container class
    // Create a row for the sources
    const sourcesRow = document.createElement("div");
    sourcesRow.classList.add("row"); // Bootstrap row class
       // Loop through each source and create its card element
    sources.forEach(source => {
      // Create a card column
      const sourceColumn = document.createElement("div");
      sourceColumn.classList.add("col-md-4"); // Bootstrap column class
  
      // Create a card
      const sourceCard = document.createElement("div");
      sourceCard.classList.add("card"); // Bootstrap card class
  
      // Create and append card header
      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
      cardHeader.textContent = source.name;
      sourceCard.appendChild(cardHeader);
  
      // Create and append card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      // Create and append description element (optional)
      if (source.description) {
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = source.description;
        cardBody.appendChild(descriptionElement);
      }
  
      // Create and append link element
      const linkElement = document.createElement("a");
      linkElement.href = source.url;
      linkElement.textContent = "Visit Website";
      linkElement.classList.add("btn", "btn-primary"); // Bootstrap button classes
      cardBody.appendChild(linkElement);
  
      sourceCard.appendChild(cardBody);
      sourceColumn.appendChild(sourceCard);
      sourcesRow.appendChild(sourceColumn);
    });
  
    sourcesContainer.appendChild(sourcesRow);
    newsInfo.appendChild(sourcesContainer);
  }
  
/**
 * TODO  populate the page on refresh, enable the search, add images to the news, add proper css to the page, add a footer, work on the error messages for the fetch request
 * 
 
 */
})