import React from "react"
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselButton from '../components/carouselButton';
import ProductCard from '../components/productCard';
import FillerProductCard from "./filleProductCard";
import Conditional from "./conditional";

const DashboardCarousel = ({title, products}) => {
    return (
        <div className="card pb-8 has-background-dark" style={{marginTop:40}}>
        <div className="card-content">
            <p className="title is-3 has-text-white ml-20">{title}</p>
            <Carousel show={Math.min(5, products.length)} slide={1} leftArrow={<CarouselButton direction={-1}/>} rightArrow={<CarouselButton direction={1}/>}>
                {products.map((product, index) => (
                    <ProductCard info={product} key={index}/>
                ))}
            </Carousel>
        </div>
      </div>
    );
}

export default DashboardCarousel;