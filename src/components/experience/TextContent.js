import { Box } from "@material-ui/core";
import Paragraph from "../utils/paragraph";
import ShareButton from "../utils/shareButton";
import Tag from "../utils/tag";

const TextContent = ({ customer, color, accent, textContent, userType, toggleModal }) => {
    return (
        <Box>
            <h4 style={{ color }}>{ customer }'s Experience</h4>
            <Tag color={ accent || color } text={ userType } bordered={ true }/>
            <Paragraph color={ color } text={ textContent }/>
            <ShareButton color={accent || color} toggleModal={toggleModal}/>
        </Box>
    );
}
 
export default TextContent;