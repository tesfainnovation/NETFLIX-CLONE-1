import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner'
import RowList from '../../components/rows/rowList/RowList'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <RowList/>
        <Footer/>
    </div>
  )
}

export default Home