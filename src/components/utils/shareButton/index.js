import { Box } from "@material-ui/core";
import underline from '../../../assets/curve.svg';

const ShareButton = ({ color, toggleModal }) => {

    const style = {
        color,
        fontSize: `.7em`,
        textTransform: 'uppercase',
        cursor: 'pointer',
        marginLeft: 20
    }

    return (
        <Box>
            <p type="button" onClick={() => toggleModal} style={style}>Share your own story!</p>
            <img src={underline} style={{ width: 200, marginTop: `-20px` }} alt="some alt"/>
        </Box>
    );
}
 
export default ShareButton;