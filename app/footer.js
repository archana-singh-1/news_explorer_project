import './footer.css';

let Footer=()=>{
    return(
        <>
            <div className='footer'>
                <div className='footer_line'></div>
                <div className='footer_text'>NewsAPI<img src="Ellipse.png" className="circle_img" />Org is not responsible for the content of external sites.</div>

                <div className="footer-div d-block d-lg-none">
                <div className="footer-text">NewsAPI<img src="Ellipse.png" className="circle-footer_img" />Org</div>
                <div className="txt"> is not responsible for <br></br>the content of external <br></br>sites.</div>
                </div>
            </div>
            
        </>


    )
}
export default Footer;