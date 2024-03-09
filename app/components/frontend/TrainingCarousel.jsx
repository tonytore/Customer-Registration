"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import img from '../../../public/tomato.jpeg'
import img1 from '../../../public/1.png'
import img2 from '../../../public/3.png'
import img3 from '../../../public/apple.jpeg'

const TrainingCarousel = ({trainings}) => {
      // const [showMore, setShowMore]  = useState(false)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide:1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide:1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide:1

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
  itemClass="px-4 py-3 mb-6  bg-slate-600"
>

    {
        trainings.map((training,i)=>{
            return (
                <div key={i} className="mt-3 mb-3 rounded-md bg-slate-600 overflow-hidden">
                
                 <Link href="#" className="rounded-l">
                <Image src={training.imageUrl} width={400} height={400}  alt="img" className=" w-full h-48 object-cover" />
                <h2 className="mt-3 p-4 text-2xl text-slate-50 text-center">
                  {training.title}
                </h2>
                </Link>
                <p>
              {training.description}</p>
            
               <div className='flex justify-between items-center bg-slate-600 pr-6 pl-6  py-2 mt-3'>
                
              
                <button type="button"  className='bg-lime-500 px-4 py-2 my-3 hover:bg-lime-800 rounded-lg flex items-center space-x-3'>    
                      <Link href="">
                          read more
                       </Link>
                       
                </button>
              
               
                <Link href="" className=' text-xl text-center py-2 text-gray-800'> Talk to the Consultant</Link>
            </div>
          
                </div>
               
            )
        })
    }

 
</Carousel>
  )
}

export default TrainingCarousel
