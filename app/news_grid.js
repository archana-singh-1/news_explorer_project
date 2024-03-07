import './news_row.css'
let News_grid=(props)=>{
    return(
        <>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                </div>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                        
                
                </div>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                </div>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                </div>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                </div>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                </div>
                <div className="col-sm-12 col-md-4">
                    {props.img}
                    {props.title}
                    {props.description}
                    {props.urls}
                </div>
            </div>


            
        </>
    );
}
export default News_grid;