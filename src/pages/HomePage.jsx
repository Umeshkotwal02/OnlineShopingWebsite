import React from 'react'
import Banner from './HomePage/Banner'
import Motion from './HomePage/Motion'
import OnlineShopDesignStudio from './HomePage/OnlineShopDesignStudio'
import CarosoleSilckSlider from './HomePage/CarosoleSilck'
import CarosoleSlickMobi from '../Components/MobileView/CarosoleSlickMobi'
import ShopByCategorySlick from './HomePage/ShopByCategory'
import CategoryCardList from '../Components/CategoryCard'
import ProductCard from './HomePage/Watch-Shop'
import FestivalSpecial from './HomePage/FestivalSpecial'
import SareeEdit from './HomePage/SareeEdit'
import SareeEditMobi from '../Components/MobileView/SareeEditMobi'

function HomePage() {
  return (
    <div style={{fontFamily:"Roboto"}}>
      <CarosoleSilckSlider />
      <CarosoleSlickMobi />
      <ShopByCategorySlick />
      {/* <ProductCard/> */}
      {/* <Motion /> */}
      {/* <FestivalSpecial/> */}
      {/* <Banner /> */}
      {/* <SareeEdit/> */}
      {/* <SareeEditMobi/> */}
      {/* <CategoryCardList /> */}
      {/* <OnlineShopDesignStudio /> */}
    </div>
  )
}

export default HomePage
