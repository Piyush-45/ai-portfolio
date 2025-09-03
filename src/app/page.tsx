

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/skillsSection'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      {/* <AboutSection /> */}
      <Projects />

      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default page