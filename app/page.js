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
      <News_row/>
    </div>
    <Footer/>
    


  </>
  );
}
export default Page;