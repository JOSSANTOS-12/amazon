import React from 'react'
import classes from './Carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from'./images/data.js';
import { Carousel } from "react-responsive-carousel";

const Carouser = () => {
    return (
        <div>
            <Carousel auto-play={true}
                infiniteLoop={true}
                showIndicator={false}
                showThumbnails={false}
            >
                {images.map((imageItem) => { return <img src={imageItem} alt='Images' /> })}
            </Carousel>

    </div>
)
}

export default Carouser

