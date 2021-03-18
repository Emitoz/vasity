import { Box } from "@material-ui/core";
import Tag from "../utils/tag";
import Paragraph from "../utils/paragraph";
import './testimonial.css';

const Testimonial = ({ user, showLocation }) => {

    const text = 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.';

    return (
        <Box>
            <div className="testimonial">
                <img src={user.image} style={{ height: 150, width: 150 }} alt="some alt"/>
                <h5 className="mt-3">{ user.name }</h5>
                <div>
                    {showLocation && <small style={{ color: '#535353', fontSize: `.7em`, marginRight: 20 }}>{user.location}</small>}
                    <Tag color={user.type === 'customer' ? '#0D019A': '#049A01'} text={user.type} bordered={false}/>
                </div>
                <Paragraph text={text} color="dark"/>
            </div>
        </Box>
    );
}
 
export default Testimonial;