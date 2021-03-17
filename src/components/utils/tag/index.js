const Tag = ({ color, text, bordered }) => {

    const style = {
        color: color,
        padding: `5px 8px`,
        border: bordered ? `1px solid ${color}`: 'none',
        borderRadius: 3,
        background: !bordered ? `${color}20`: 'none',
        textTransform: 'uppercase',
        fontSize: `.7em`
    }

    return (
        <span style={style} className="tag">
            <small>{ text }</small>
        </span>
    );
}
 
export default Tag;