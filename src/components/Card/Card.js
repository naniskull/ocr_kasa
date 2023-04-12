import React from 'react';
import { Link } from "react-router-dom";
import "./Card.css";
import data from '../../data/data.json';

const Card = () => {
    return (
        <div className='container_card'>
            {data.map((item) => (
                <div key={item.id} className='card'>
                    <Link to={`/${item.id}`}>
                        <img src={item.cover} alt="logement" />
                        <h2>{item.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default Card;