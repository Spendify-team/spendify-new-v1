import React from 'react'
import Header from '../../components/layout/Header'
import Experience from '../../components/Experience'
import Footer from '../../components/layout/Footer'
import HeroSection from './components/HeroSection'
import InsightsSection from './components/InsightsSection'

const SpendifyInsights = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <InsightsSection />
      <Experience />
      <Footer />
    </main>
  )
}

export default SpendifyInsights
