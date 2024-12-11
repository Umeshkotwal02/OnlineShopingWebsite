import React from 'react'
import CustomCarousel from './Carousel'
import OnlineShopDesignStudio from './OnlineShopDesignStudio'
import Banner from './HomePage/Banner'
import Login from '../Components/HeaderComponents/Login'
import CategoryCardList from '../Components/CategoryCard'
import Motion from './HomePage/Motion'
import ProductList from './HomePage/ProductList'

const HomePage = () => {
  return (
    <>
      <Login />
      <CustomCarousel />
      <CategoryCardList />
      <ProductList/>
      <Motion />
      <Banner />
      <OnlineShopDesignStudio />
    </>
  )
}

export default HomePage
