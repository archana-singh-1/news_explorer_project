import './news_row.css'
import {Artical_data} from './articals_data'
let News_row=()=>{
    return(
        <>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[0].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[0].title}</span><br/>
                    <span className='description'>{Artical_data[0].description}</span><br/>
                    <span className='urls'><a href={Artical_data[0].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></span>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[1].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[1].title}</span><br/>
                    <span className='description'>{Artical_data[1].description}</span><br/>
                    <span className='urls'><a href={Artical_data[1].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></span>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[2].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[2].title}</span><br/>
                    <span className='description'>{Artical_data[2].description}</span><br/>
                    <span className='urls'><a href={Artical_data[2].url}>Read full artical <img src="arrow.png"className='arrow_img'/></a></span>
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[3].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[3].title}</span><br/>
                    <span className='description'>{Artical_data[3].description}</span><br/>
                    <span className='urls'><a href={Artical_data[3].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></span>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[4].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[4].title}</span><br/>
                    <span className='description'>{Artical_data[4].description}</span><br/>
                    <span className='urls'><a href={Artical_data[4].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></span>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[5].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[5].title}</span><br/>
                    <span className='description'>{Artical_data[5].description}</span><br/>
                    <span className='urls'><a href={Artical_data[5].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></span>
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[6].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[6].title}</span><br/>
                    <span className='description'>{Artical_data[6].description}</span><br/>
                    <span className='urls'><a href={Artical_data[6].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></span>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[7].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[7].title}</span><br/>
                    <span className='description'>{Artical_data[7].description}</span><br/>
                    <span className='urls'><a href={Artical_data[7].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></span>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[8].urlToImage} className='img_1'/>
                    <span className='title'>{Artical_data[8].title}</span><br/>
                    <span className='description'>{Artical_data[8].description}</span><br/>
                    <span className='urls'><a href={Artical_data[8].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></span>
                </div>
            </div>


            
        </>
    );
}
export default News_row;