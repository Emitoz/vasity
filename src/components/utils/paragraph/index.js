const Paragraph = ({ text, color }) => {
    const style = {
        color: color !== 'dark' ? '#fff': '#494949',
        fontSize: `.85em`
    }
    
    return (
        <p data-aos="fade-right" data-aos-duration="1000" style={style}>{ text }</p>
    );
}
 
export default Paragraph;