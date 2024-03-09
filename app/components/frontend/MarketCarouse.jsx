"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import img from '../../../public/pasta.jpeg'
import img1 from '../../../public/1.png'
import img2 from '../../../public/3.png'
import img3 from '../../../public/4.jpg'

const MarketCarouse = ({markets}) => {
    // const slides = [
    //     {},{},{},{},{},{},{},{},{},
    // ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
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
    //   <Carousel responsive={responsive}>
    //     <div>Item 1</div>
    //     <div>Item 2</div>
    //     <div>Item 3</div>
    //     <div>Item 4</div>
    //   </Carousel>;
  return (
    <Carousel
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
  itemClass="px-4 mb-6 bg-transparent"
>

    {
        markets.map((market,i)=>{
            return (
                <div key={i}>
                 <Link href="#" className="rounded-full">
                <Image src={market.imageUrl} width={400} height={400}  alt="img" className="w-48 rounded-full h-48 object-cover" />
                {/* <h2 className="bg-slate-50 text-slate-500 text-center">
                  {market.title}
                </h2> */}
                </Link>
                </div>
               
            )
        })
    }

 
</Carousel>
  )
}

export default MarketCarouse
