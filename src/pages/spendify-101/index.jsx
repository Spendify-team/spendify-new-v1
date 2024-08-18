import React from 'react'
import Header from '../../components/layout/Header'
import Experience from '../../components/Experience'
import Footer from '../../components/layout/Footer'
import HeroSection from './components/HeroSection'
import QuizSection from './components/QuizSection'

const Spendify101 = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <QuizSection />
      <Experience />
      <Footer />
    </main>
  )
}

export default Spendify101
