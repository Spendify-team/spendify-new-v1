import React from 'react'
import Header from '../../components/layout/Header'
import Experience from '../../components/Experience'
import Footer from '../../components/layout/Footer'
import HeroSection from './components/HeroSection'
import ArticlesSection from './components/ArticlesSection'

const Blog = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <ArticlesSection />
      <Experience />
      <Footer />
    </main>
  )
}

export default Blog
