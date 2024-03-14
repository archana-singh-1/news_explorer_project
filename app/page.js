import Header from "./header";
import Search from "./search";
import News_row from "./news_row";
import Footer from "./footer";
import  article_data  from './article_data.js';

const Page = () => {
    return (
        <>
            <Header />
            <Search />
            <div className="container">
                <h2 className='top_news'>TOP NEWS FROM INDIa</h2>
                <News_row article={article_data[0]} article1={article_data[1]} article2={article_data[2]} />
                <News_row article={article_data[3]} article1={article_data[4]} article2={article_data[5]} />
                <News_row article={article_data[6]} article1={article_data[7]} article2={article_data[8]} />
            </div>
            <Footer />
        </>
    );
}

export default Page;
