import HeroImage from '../utils/hero-image';
import Paragraph from '../utils/paragraph';
import image from '../../assets/man-and-woman.png';

const Hero = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h2 data-aos="fade-right" data-aos-duration="1000" className="mt-lg-5 mb-4" style={{ fontWeight: 700 }}>Amazing <br/> Experiences from Our Wonderful Customers</h2>
                    <Paragraph color="dark" text="Here is what customers and vendors are saying about us, you can share your stories with us too."/>
                </div>
                <div className="col-lg-6 ">
                    <HeroImage image={image}/>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;