

import Image from "next/image";
import Link from "next/link";
// import Customers from "../customers"
// import SidebarContainer from "./components/SidebarContainer";
import Hero from "../components/frontend/Hero";
import Navbar from "../components/frontend/Navbar";
import MarketList from '../components/frontend/MarketList'
import MarketCarousel from '../components/frontend/MarketCarouse'
import CategoryList from '../components/frontend/CategoryList'
import CommunityTraining from '../components/frontend/CommunityTraining'
import { getData } from '@/app/lib/getData'


import Footer from '../components/frontend/Footer'
export default async function Hom() {

  const markets = await getData('markets')
  const categories = await getData('categories')
  const banners = await getData('banners')
  const trainings = await getData("trainings")

  return (
    <div className="flex-col items-center justify-center min-h-screen">
      <Navbar />
      <Hero categories={categories} banners={banners} />
      <MarketList markets={markets} />
      <div className="py-8">
        <CategoryList categories={categoriesproducts} />


      </div>
      <CommunityTraining trainings={trainings} />


      {/* // <MarketCarousel/> */}
      <h2 className="text-4xl flex justify-center items-center m-12 ">Wellcome to Tonytor Ecommerce</h2>

      <Link className=" flex justify-center px-[100px] text-lg font-semibold py-[100px]" href='/customers'> Go to Customer</Link>



    </div>
  );
}
