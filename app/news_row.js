import './news_row.css'
import News_article from './news_article';

const News_row=({article,article1,article2})=>{
    return(
        <>
            <div className='row'>
                <News_article article={article}/>
                <News_article article={article1}/>
                <News_article article={article2}/>
            </div>
        </>
    );
}
export default News_row;