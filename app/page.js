import Header from "./header";
import Searach from "./search";
import News_grid from "./news_grid";
import {Artical_data} from './articals_data'
import Footer from "./footer";
let Page=()=>{
  return(
  <>
    <Header/>
    <div className="container">
      <Searach/>
      <h2 className='top_news'>TOP NEWS FROM INDIA</h2>
      <News_grid  img=<img src={Artical_data[0].urlToImage} className='img_1'/>
      title=<h2 className='title'>{Artical_data[0].title}</h2>
      description=<h2 className='description'>{Artical_data[0].description}</h2>
      urls=<h2 className='urls'><a href={Artical_data[0].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
      
      />
    </div>
    <Footer/>
   </>
  );
}
export default Page;