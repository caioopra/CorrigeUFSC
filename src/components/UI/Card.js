import "./Card.css"

const Card = (props) => {
    let classes = "card";
    if (props.className !== undefined) {
        classes += " " + props.className;
    }
    return <div className={classes}>{props.children}</div>
}

export default Card;