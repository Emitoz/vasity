import { Box } from "@material-ui/core";
import Testimonial from "../testimonial";
import getUsers from '../../data/users';

const Testimonials = ({ showLocation }) => {
    const users = getUsers();

    return (
        <Box>
            <div className="container my-5">
                <div className="row">
                    {
                        users.map(user => (
                            <div key={user.name} className="col-lg-4">
                                <Testimonial user={user} showLocation={showLocation}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Box>
    );
}
 
export default Testimonials;