import React, { useState } from 'react';
import "./Slideshow.css";
import vectorLeft from '../../assets/slideshow_vector_left.png';
import vectorRight from '../../assets/slideshow_vector_right.png';


const Slideshow = ({ property }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % property.pictures.length);
    };

    const previousImage = () => {
        setCurrentIndex((currentIndex - 1 + property.pictures.length) % property.pictures.length);
    };

    return (
        <div className="slideshow">
            {property && (
                <div className="slideshow-image" style={{ backgroundImage: `url(${property.pictures[currentIndex]})` }} alt={`Slideshow ${currentIndex}`}>
                    {property.pictures.length > 1 && (
                        <div>
                            <button className="slideshow-button previous" onClick={previousImage}>
                                <img src={vectorLeft} alt="vector"></img>
                            </button>
                            <button className="slideshow-button next" onClick={nextImage}>
                                <img src={vectorRight} alt="vector"></img>
                            </button>
                            <div className='index_img'>{currentIndex + 1}/{property.pictures.length}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Slideshow;

