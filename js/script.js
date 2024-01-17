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
const generalNews = "https://newsapi.org/v2/top-headlines/sources?apiKey="
const businessNews ="https://newsapi.org/v2/top-headlines/sources?category=business&apiKey="
const entertainentNews ="https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey="
const techNews = "https://newsapi.org/v2/top-headlines/sources?category=technology&apiKey="
const sportsNews = "https://newsapi.org/v2/top-headlines/sources?category=spors&apiKey="
const Search_news = "https://newsapi.org/v2/everything?q="
let newsArray = []
document.addEventListener("DOMContentLoaded", function(){
    const fetchGeneralNews = async()=>{
        const response = await fetch(generalNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            newsArray = data
            console.log(newsArray)
        }else{
            
        }
    }
    const fetchBusinesNews = async()=>{
        const response = await fetch(businessNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            newsArray = data
            console.log(newsArray)
        }else{
            
        }
    }
    const fetchEntertainmentNews = async()=>{
        const response = await fetch(entertainentNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            newsArray = data
            console.log(newsArray)
        }else{
            
        }
    }
    const fetchTechNews= async()=>{
        const response = await fetch(techNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            newsArray = data
            console.log(newsArray)
        }else{
            
        }
    }
    const fetchSportsNews= async()=>{
        const response = await fetch(sportsNews+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            newsArray = data
            console.log(newsArray)
        }else{
            
        }
    }
    const fetchSearchNews= async()=>{
        const response = await fetch(Search_news+api_key)
        if (response.status >= 200 && response.status <300){
            const data = await response.json()
            newsArray = data
            console.log(newsArray)
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

})