import Header from "./header";
import Searach from "./search";
import News_row from "./news_row";
import Footer from "./footer";
let Page=()=>{
  return(
  <>
    <Header/>
    <div className="container">
      <Searach/>
      <span className='top_news'>TOP NEWS FROM INDIA</span>
      <News_row/>
    </div>
    <Footer/>
    


  </>
  );
}
export default Page;