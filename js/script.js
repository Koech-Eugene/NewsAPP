// variable declaration
const home = document.getElementById("general")
const busines = document.getElementById("business")
const entertainment = document.getElementById("entertainment")
const technology = document.getElementById("technology")
const sports = document.getElementById("sports")
const search = document.getElementById("search")
const newsHeader = document.getElementById("newsHeader")
const newsInfo = document.getElementById("newsInfo")
const searchNews = document.getElementById("newsSearch")

// Get the apis 
const api_Key = "eddebd9279ad454c8f0975735f3909b4"
const generalNews = "https://newsapi.org/v2/top-headlines/sources?apiKey="
const businessNews ="https://newsapi.org/v2/top-headlines/sources?category=business&apiKey="
const entertainentNews ="https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey="
const techNews = "https://newsapi.org/v2/top-headlines/sources?category=technology&apiKey="
const sportsNews = "https://newsapi.org/v2/top-headlines/sources?category=spors&apiKey="
const Search_news = "https://newsapi.org/v2/everything?q="