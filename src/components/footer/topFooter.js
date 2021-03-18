import { Button } from '@material-ui/core';
import Paragraph from "../utils/paragraph";
import bannerImg from '../../assets/subscribe-banner 1.png';

const TopFooter = () => {
    return (
        <div className="footer-subscribe">
            <div className="row">
                <div className="col-lg-4 offset-lg-1">
                    <img src={bannerImg} alt="some alt"/>
                </div>
                <div className="col-lg-4 mt-4 offset-lg-1 text-white">
                    <h3>Be a  member <br/> of our community 🎉</h3>
                    <Paragraph text="We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world." color="light"/>
                    <div className="mt-2">
                        <form>
                            <div className="email-input">
                                <input type="email"/>
                                <Button style={{ background: '#fff', fontSize: `.8em` }}>SUBSCRIBE</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>    
    );
}
 
export default TopFooter;