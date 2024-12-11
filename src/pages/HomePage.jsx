import React from 'react'
import Banner from './HomePage/Banner'
import CategoryCardList from '../Components/CategoryCard'
import Motion from './HomePage/Motion'
import ProductList from './HomePage/ProductList'
import Login from '../Components/HeaderComponents/LoginCanva'
import CustomCarousel from './HomePage/CustomCarousel'
import OnlineShopDesignStudio from './HomePage/OnlineShopDesignStudio'

const HomePage = () => {
  return (
    <>
      <Login />
      <CustomCarousel />
      <CategoryCardList />
      <ProductList />
      <Motion />
      <Banner />
      <OnlineShopDesignStudio />
    </>
  )
}

export default HomePage
