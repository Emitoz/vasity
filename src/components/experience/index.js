import { Box } from '@material-ui/core';
import TextContent from './TextContent';
import HeroImage from "../utils/hero-image";
import './experience.module.css';

const Experience = ({ background, order, color, accent, textContent, image, customer, userType, toggleModal }) => {

    const expStyle = {
        background: background
    }

    return (
        <Box style={expStyle}>
            <div className="container pt-5">    
                { order !== 'image-first' ? 
                    <div className="row experience-row">
                        <div className="col-lg-4">
                            <TextContent 
                                customer={customer} 
                                userType={userType} 
                                color={color} 
                                accent={accent}
                                textContent={textContent}
                                toggleModal={toggleModal} 
                                />
                        </div>
                        <div className="col-lg-6 offset-lg-2">
                            <HeroImage image={image}/>
                        </div>
                    </div>
                    :
                    <div className="row" >
                        <div className="col-lg-6">
                            <HeroImage image={image}/>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <TextContent 
                                customer={customer} 
                                userType={userType} 
                                color={color} 
                                textContent={textContent} 
                                />
                        </div>
                    </div>
                }
            </div>
        </Box>
    );
}
 
export default Experience;