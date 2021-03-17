import { Button } from '@material-ui/core';

import logo from '../../assets/Vasiti-Logo-black 1.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="nav py-3">
            <div className="container">
                <div className="logo">
                    <img src={logo} style={{ height: 30 }} alt="some alt"/>
                </div>
                <ul className="float-right">
                    <li>About us</li>
                    <li>Stories</li>
                    <li>Contact us</li>
                    <li>Login</li>
                    <li>
                        <Button>Sign up</Button>
                    </li>
                </ul>
            </div>
            <hr/>
            <hr/>
            <div className="sub-nav">
                <div className="container">
                    <ul className="text-center">
                        <li>Market place</li>
                        <li>Wholesale center</li>
                        <li>Seller center</li>
                        <li>Services</li>
                        <li>Internships</li>
                        <li>Events</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;