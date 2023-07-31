import React from "react"
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselButton from '../components/carouselButton';
import ProductCard from '../components/productCard';
import FillerProductCard from "./filleProductCard";
import Conditional from "./conditional";
import ProjectCard from "./projectCard";

const DashboardCarousel = ({title, products}) => {
    return (
        <div className="card pb-8 has-background-dark">
        <div className="card-content">
            <p className="title is-3 has-text-white ml-20">{title}</p>
            <Carousel className={products.length >= 4 ? "" : "ml-16"} show={4} slide={1} responsive={true} leftArrow={<CarouselButton direction={-1}/>} rightArrow={<CarouselButton direction={1}/>}>
                {products.map((product, index) => (
                    <ProjectCard className="has-background-white" info={product} key={index} freeSize={false}/>
                ))}
            </Carousel>
        </div>
      </div>
    );
}

export default DashboardCarousel;