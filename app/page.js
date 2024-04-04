"use client";
import { useState, useEffect } from 'react';
import Header from "./header";
import Search from "./search";
import News_row from "./news_row";
import Footer from "./footer";



const Page=()=>{
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery]=useState("");

    class Article{
        constructor( urlToImage,title,description,url){
            this.urlToImage=urlToImage
            this.title=title
            this.description=description
            this.url=url

        };
    };

    useEffect(()=>{
        const fetchHeadlinePromise=fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=19faa973b669406fb5f64770866153bd`);
        fetchHeadlinePromise
            .then(headlineResponse=> headlineResponse.json())
            .then(headlineData=>{
                const fetchHeadlines=headlineData.articles;
                const updateHeadlines=[]
                fetchHeadlines.forEach(headline=>{
                    const newHeadline=new Article(
                        headline.urlToImage,
                        headline.title,
                        headline.description,
                        headline.url
                    );
                    updateHeadlines.push(newHeadline);
                });
                setArticles(updateHeadlines);
                
            });

    },[]);

    const handleClick = (query) => {
        setSearchQuery(query);
        const fetchPromise = fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=19faa973b669406fb5f64770866153bd`);
        fetchPromise
            .then(response => response.json())
            .then(responseData => {
                const fetchedArticles = responseData.articles;
                const updateArticals = [];
                fetchedArticles.forEach(article => {
                    const newArticle = new Article(
                        article.urlToImage,
                        article.title,
                        article.description,
                        article.url
                    );
                    updateArticals.push(newArticle);
                });
                setArticles(updateArticals);
            });
    };
    
        


    let headingText='TOP NEWS FROM INDIA';
    if (searchQuery){
        headingText=`${searchQuery}`
    }

    return (
        <>
            <Header />
            <Search OnSearchQuery={handleClick} />
            <div className="container">
                <h2 className='top_news'>{headingText}</h2>
                
                {0<articles.length &&(
                    <>
                        <News_row article={articles[0]} article1={articles[1]} article2={articles[2]} />
                        <News_row article={articles[3]} article1={articles[4]} article2={articles[5]} />
                        <News_row article={articles[6]} article1={articles[7]} article2={articles[8]} />
                    </>
                )};
                
                
            </div>
            <Footer />
        </>
    );
}

export default Page;
