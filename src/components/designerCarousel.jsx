import React from "react"
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselButton from './carouselButton';
import DesignerCard from "./designerCard";

const DesignerCarousel = ({title, designers}) => {
    return (
        <div className="card has-background-dark">
        <div className="card-content">
            <p className="title is-3 has-text-white ml-20">{title}</p>
            {designers.length > 4 ?
            <Carousel show={4} slide={1} leftArrow={<CarouselButton direction={-1}/>} rightArrow={<CarouselButton direction={1}/>}>
                {designers.map((designer, index) => (
                    // <ProjectCard className="has-background-white" info={designer} key={index} freeSize={false}/>
                    <DesignerCard info={designer} key={index} freeSize={false}/>
                ))}
            </Carousel>
            :
            <div className="mb-20 columns is-multiline pl-20 pr-20">
                {designers.map((designer, index) => (
                    <DesignerCard info={designer} key={index}/>
                ))}
            </div>
            }
        </div>
      </div>
    );
}

export default DesignerCarousel;