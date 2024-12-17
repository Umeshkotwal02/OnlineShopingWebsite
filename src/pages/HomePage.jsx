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
import CategoryCardList from '../Components/Card'
import NewArrivalCard from './HomePage/NewArrivalCard'
import BridalLahegaCholi from './HomePage/BridalLahegaCholi'
import ProductCard from './HomePage/Watch-Shop'


function HomePage() {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <CarosoleSilckSlider />
      <CarosoleSlickMobi />
      <ShopByCategorySlick />  {/* overflow */}
      <ProductCard/> {/* Watch & Shop */}
      <NewArrivalCard />
      <BridalLahegaCholi />

      {/* <ProductGrid/> */}
      {/* <CategoryCardList/> */}
      <Motion />
      <FestivalSpecial />
      <Banner />
      <SareeEdit />          {/* overflow */}
      <SareeEditMobi />
      <OnlineShopDesignStudio />
    </div>
  )
}

export default HomePage
