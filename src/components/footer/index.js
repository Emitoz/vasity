import TopFooter from './topFooter';
import './footer.css';
import BottomFooter from './bottomFooter';

const Footer = () => {
    return (
        <footer style={{ background: '#25201D' }}>
            <div className="container pb-5">
                <TopFooter />
                <BottomFooter />
            </div>
        </footer>
    );
}
 
export default Footer;