import React from 'react';
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}  //joo

export default Card;