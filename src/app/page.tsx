

import AboutPolished from '@/components/sections/Aboutme'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Process from '@/components/sections/Process'
import Projects from '@/components/sections/Projects'
import SkillsSectionEnhanced from '@/components/sections/Skillenhanced'
import SkillsAndABout from '@/components/sections/skillsSection'


import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <AboutPolished />
      <Projects />
      <SkillsSectionEnhanced />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}

export default page
