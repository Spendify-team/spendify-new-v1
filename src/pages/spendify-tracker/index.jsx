import React from 'react'
import Header from '../../components/layout/Header'
import Experience from '../../components/Experience'
import Footer from '../../components/layout/Footer'
import HeroSection from './components/HeroSection'
import ManageFinancesSection from './components/ManageFinancesSection'

const SpendifyTracker = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <ManageFinancesSection />
      <Experience />
      <Footer />
    </main>
  )
}

export default SpendifyTracker
