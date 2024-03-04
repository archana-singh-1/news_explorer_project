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
      <div className='top_news'>TOP NEWS FROM INDIA</div>
      <News_row/>
    </div>
    <Footer/>
    


  </>
  );
}
export default Page;