import React from "react"
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselButton from '../components/carouselButton';
import ProjectCard from "./projectCard";

const CarouselCard = ({title, products}) => {
    return (
      <div className="card has-background-dark mb-8">
      <div className="card-content">
          <p className="title is-3 has-text-white ml-20">{title}</p>
          {/* <p className="subtitle is-5 has-text-grey-light ml-20">{labels.subtitle}</p> */}
          {products.length > 4 ?
          <Carousel show={4} slide={1} leftArrow={<CarouselButton direction={-1}/>} rightArrow={<CarouselButton direction={1}/>}>
              {products.map((product, index) => (
                  <ProjectCard className="has-background-white" info={product} key={index} freeSize={false}/>
              ))}
          </Carousel>
          :
          <div className="columns is-multiline pl-20 pr-20">
            {products.map((product, index) => (
              <ProjectCard info={product} key={index}/>
            ))}
          </div>
          }
      </div>
      </div>
    );
}

export default CarouselCard;