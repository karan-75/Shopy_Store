import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return (
        <div className="banner-head">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>convallis iterdum purus adipiscing dis parturient posuere ac a quam a eleifend montes parturient posuere curae tempor.</p>
                </div>
                <img className="img-banner" src={BannerImg} alt="" />
            </div>
        </div>
    )
};

export default Banner;
               
               
               
