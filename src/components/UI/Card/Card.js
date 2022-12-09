import React from 'react';
import CardStyled from './Card.styled';

const Card = (props) => {
    return (
        <CardStyled>
            <div className="card-content">
                <div className="card-img"><img src={props.svg} alt='' /></div>
                <div className="card-info">
                    <h3>{props.title}</h3>
                </div>
            </div>
        </CardStyled>
    );
}

export default Card;
