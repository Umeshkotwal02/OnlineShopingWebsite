import React from 'react'
import Banner from './HomePage/Banner'
import Motion from './HomePage/Motion'
import CarosoleSilckSlider from './HomePage/CarosoleSilck'
import CarosoleSlickMobi from '../Components/mobileheadercomp/CarosoleSlickMobi'
import ShopByCategorySlick from './HomePage/ShopByCategory'
import FestivalSpecial from './HomePage/FestivalSpecial'
import SareeEdit from './HomePage/SareeEdit'
import SareeEditMobi from '../Components/mobileheadercomp/SareeEditMobi'


function HomePage() {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <CarosoleSilckSlider />
      <CarosoleSlickMobi />
      {/* <ShopByCategorySlick /> */}
      {/* <ProductGrid/> */}
      {/* <CategoryCardList/> */}
      {/* <ProductCard/> */}
      {/* <Motion /> */}
      {/* <FestivalSpecial/> */}
      <Banner />
      {/* <SareeEdit/> */}
      <SareeEditMobi />
      {/* <CategoryCardList /> */}
      {/* <OnlineShopDesignStudio /> */}
    </div>
  )
}

export default HomePage
