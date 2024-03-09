"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'

import ProductDetail from '../frontend/ProductDetail'

const CategoryCarousel = ({ products }) => {



  // const slides = [
  //     {},{},{},{},{},{},{},{},{},
  // ]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // <Carousel responsive={responsive}>
  //   <div>Item 1</div>
  //   <div>Item 2</div>
  //   <div>Item 3</div>
  //   <div>Item 4</div>
  // </Carousel>;
  return (<>
    {products && <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="px-4 mb-6 bg-slate-700"
    >

      {
        products.map((product, i) => {
          return (
            <ProductDetail key={i} product={product} />
          )
        })
      }





    </Carousel>}</>
  )
}

export default CategoryCarousel
