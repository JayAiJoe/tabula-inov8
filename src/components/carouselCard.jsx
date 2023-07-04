import React from "react"
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselButton from '../components/carouselButton';
import ProductCard from '../components/productCard';

const CarouselCard = ({labels, products}) => {
    return (
        <div className="card" style={{marginTop:70}}>
        <div className="card-content">
            <p className="title is-3">{labels.title}</p>
            <p className="subtitle is-5">{labels.subtitle}</p>
            <Carousel show={5} slide={1} leftArrow={<CarouselButton direction={-1}/>} rightArrow={<CarouselButton direction={1}/>}>
                {products.map((product, index) => (
                  <ProductCard info={product} key={index}/>
                ))}
            </Carousel>
        </div>
      </div>
    );
}

export default CarouselCard;