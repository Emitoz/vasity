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
            <a type="button" onClick={() => toggleModal} style={style}>Share your own story!</a>
            <img src={underline} style={{ width: 200, marginTop: `-20px` }} alt="image"/>
        </Box>
    );
}
 
export default ShareButton;