import React from 'react';
import { Link } from "react-router-dom";
import "./Card.css";
import data from '../../data/data.json';

const Card = () => {
    return (
        <div className='container_cards'>
            {data.map((item) => (
                <Link key={item.id} to={`/${item.id}`} className='card' style={{ backgroundImage: `url(${item.cover})` }}>
                    <div className="card_overlay"></div>
                    <h2>{item.title}</h2>
                </Link>
            ))}
        </div>
    );
};
export default Card;
