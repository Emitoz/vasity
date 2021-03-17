import Hero from "./hero";
import Experience from "./experience";
import Testimonials from "./testimonial-list";
import experienceImage1 from "../assets/two-ladies.png";
import experienceImage2 from "../assets/shopping.png";

const Main = ({toggleModal}) => {
    return (
        <>
            <Hero />

            <Experience 
                background="#222222"
                order="image-first"
                color="#ffffff"  
                textContent="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
                customer="Tolu & Joy"
                userType="customer"
                image={experienceImage1}
                onClick={toggleModal}
            />

            <Testimonials showLocation={true}/>

            <Experience 
                background="#FFF8F5"
                order=""
                color="dark" 
                accent="#FF5C00" 
                textContent="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
                customer="Josiah"
                userType="vendor"
                image={experienceImage2}
                onClick={toggleModal}
            />

            <Testimonials />
        </>
    );
}
 
export default Main;