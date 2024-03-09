"usec client"

import Image from "next/image"
import Carousel from "nuka-carousel"
import img from '../../../public/1.png'
import img1 from '../../../public/2.jpg'
import img2 from '../../../public/3.png'
import img3 from '../../../public/4.jpg'
import img4 from '../../../public/5.png'
import { ChevronLeft, ChevronRight } from "lucide-react"

export const HeroCarousel = ({banners}) => {
    const config = {
        nextButtonClassName:"text-center rounded-full",
        nextButtonText:<ChevronRight/>,
        pagingDotsClassName:"me-2 w-4 h-4",
        prevButtonClassName:"text-center rounded-full",
        prevButtonText:<ChevronLeft/>,
       

    }
  return (
    <Carousel autoplay wrapAround className="rounded-md" defaultControlsConfig={config}>
      {
        banners.map((banner,i)=>{
          return (
            <div key={i}>
                <Image src={banner.imageUrl} width={400} height={400} alt="img" className="w-full h-80 object-cover" />
            </div>
          )
        })
      }
     
      {/* <Image src={img1}  alt="img" className="w-full" />
      <Image src={img2}  alt="img" className="w-full" />
      <Image src={img3}  alt="img" className="w-full" />
      <Image src={img4}  alt="img" className="w-full" /> */}
      
    </Carousel>
  )
}