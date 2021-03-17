import './hero-image.css';

const HeroImage = ({ image }) => {
    return (
        <div className="overflow-content" data-aos="fade-left" data-aos-duration="1000">
            <img src={image} alt="image"/>
        </div>
    );
}
 
export default HeroImage;