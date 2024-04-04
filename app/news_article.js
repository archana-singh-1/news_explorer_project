const News_article = ({article})=>{
    return (
        <>
            <div className="col-sm-12 col-md-4">
                <img src={article.urlToImage} className='img_1' alt={article.title} />
                <p className='title'>{article.title}</p>
                <p className='description'>{article.description}</p>
                <a href={article.url}>Read full article <img src="arrow.png" className='arrow' alt="Read full article" /></a>
            </div>
        </>
    );
};

export default News_article;
 