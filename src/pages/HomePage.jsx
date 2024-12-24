import React from 'react'
import Banner from './HomePage/Banner'
import Motion from './HomePage/Motion'
import CarosoleSilckSlider from './HomePage/CarosoleSilck'
import CarosoleSlickMobi from './MobilePages/CarosoleSlickMobi'
import ShopByCategorySlick from './HomePage/ShopByCategory'
import FestivalSpecial from './HomePage/FestivalSpecial'
import SareeEdit from './HomePage/SareeEdit'
import SareeEditMobi from './MobilePages/SareeEditMobi'
import OnlineShopDesignStudio from './HomePage/OnlineShopDesignStudio'
import NewArrivalCard from './HomePage/NewArrivalCard'
import BridalLahegaCholi from './HomePage/BridalLahegaCholi'
import CustomerStoriesSection from './HomePage/CustomerStoriesSection'
import OurInstaPage from './HomePage/OurInstaPage'
import ShopByColor from './HomePage/shopByColor'
import WatchShopCardDemo from './HomePage/WatchShopCard'
import NewOnKapoorSwiper from './HomePage/NewOnKapoorSwiper'
import CategorySection from './HomePage/CategoryCustomCard'

function HomePage() {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <CarosoleSilckSlider />

      {/* <CategorySection /> */}
      <ShopByCategorySlick />  {/* overflow */}
      {/* <ShopByCategoryDemo /> */}
      <WatchShopCardDemo />

      <BridalLahegaCholi />

      <NewArrivalCard /> {/*Add to Cart Component*/}

      <NewOnKapoorSwiper />


      <Motion />
      <FestivalSpecial />
      <Banner />
      {/* <ShopByColor /> */}
      <SareeEdit />         {/*  overflow */}
      {/* <SareeEditMobi /> */}
      <CustomerStoriesSection />
      <OurInstaPage />
      <OnlineShopDesignStudio />
    </div>
  )
}

export default HomePage
