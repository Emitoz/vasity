import { company, products, careers, getInTouch } from '../../data/siteLinks';
import fbIcon from '../../assets/fb.png';
import igIcon from '../../assets/ig.png';
import twIcon from '../../assets/tw.png';
import inIcon from '../../assets/in.png';

const BottomFooter = () => {
    return (
        <div className="bottom-footer text-white mt-5">
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="row">
                        <div className="col-6">
                            <h6>{ company.header }</h6>
                            <ul>
                                { company.links.map((link, index) => <li key={index}>{ link }</li>) }
                            </ul>
                        </div>
                        <div className="col-6">
                            <h6>{ products.header }</h6>
                            <ul>
                                { products.links.map((link, index) => <li key={index}>{ link }</li>) }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 mt-4">
                    <div className="row">
                        <div className="col-6">
                            <h6>{ careers.header }</h6>
                            <ul>
                                { careers.links.map((link, index) => <li key={index}>{ link }</li>) }
                            </ul>
                        </div>
                        <div className="col-6">
                            <h6>{ getInTouch.header }</h6>
                            <ul>
                                { getInTouch.links.map((link, index) => <li key={index}>{ link }</li>) }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <h6>Join our community</h6>
                    <ul>
                        <li className="social">
                            <ul className="social-links">
                                <li><img src={ fbIcon } alt="fb"/></li>
                                <li><img src={ igIcon } alt="ig"/></li>
                                <li><img src={ twIcon } alt="tw"/></li>
                                <li><img src={ inIcon } alt="in"/></li>
                            </ul>
                        </li>
                        <li>Email Newsletter</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default BottomFooter;