import './news_row.css'
import {Artical_data} from './articals_data'
let News_row=()=>{
    return(
        <>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[0].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[0].title}</h2>
                    <h2 className='description'>{Artical_data[0].description}</h2>
                    <h2 className='urls'><a href={Artical_data[0].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[1].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[1].title}</h2>
                    <h2 className='description'>{Artical_data[1].description}</h2>
                    <h2 className='urls'><a href={Artical_data[1].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[2].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[2].title}</h2>
                    <h2 className='description'>{Artical_data[2].description}</h2>
                    <h2 className='urls'><a href={Artical_data[2].url}>Read full artical <img src="arrow.png"className='arrow_img'/></a></h2>
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[3].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[3].title}</h2>
                    <h2 className='description'>{Artical_data[3].description}</h2>
                    <h2 className='urls'><a href={Artical_data[3].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[4].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[4].title}</h2>
                    <h2 className='description'>{Artical_data[4].description}</h2>
                    <h2 className='urls'><a href={Artical_data[4].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[5].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[5].title}</h2>
                    <h2 className='description'>{Artical_data[5].description}</h2>
                    <h2 className='urls'><a href={Artical_data[5].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[6].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[6].title}</h2>
                    <h2 className='description'>{Artical_data[6].description}</h2>
                    <h2 className='urls'><a href={Artical_data[6].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[7].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[7].title}</h2>
                    <h2 className='description'>{Artical_data[7].description}</h2>
                    <h2 className='urls'><a href={Artical_data[7].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
                </div>
                <div className="col-sm-12 col-md-4">
                    <img src={Artical_data[8].urlToImage} className='img_1'/>
                    <h2 className='title'>{Artical_data[8].title}</h2>
                    <h2 className='description'>{Artical_data[8].description}</h2>
                    <h2 className='urls'><a href={Artical_data[8].url}>Read full artical <img src="arrow.png" className='arrow_img'/></a></h2>
                </div>
            </div>


            
        </>
    );
}
export default News_row;