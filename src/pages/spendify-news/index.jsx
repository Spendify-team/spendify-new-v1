import React from 'react'
import Header from '../../components/layout/Header'
import Experience from '../../components/Experience'
import Footer from '../../components/layout/Footer'
import HeroSection from './components/HeroSection'
import NewsInsightsSection from './components/NewsInsightsSection'

const SpendifyNews = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <NewsInsightsSection />
      <Experience />
      <Footer />
    </main>
  )
}

export default SpendifyNews
