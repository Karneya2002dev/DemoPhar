import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Carousel from './Carousel'
import ImageCarousel from './ImageCarousel'
import HeroSection from './HeroSection'
import WhatWeDoSection from './WhatWeDoSection'
import DiscoverSection from './DiscoverSection'

const SectionWrapper = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const HomeScreen = () => {
  return (
    <>
      <div className="w-full">
        <Carousel />
      </div>

      <SectionWrapper>
        <ImageCarousel />
      </SectionWrapper>

      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      {/* <SectionWrapper>
        <WhatWeDoSection />
      </SectionWrapper> */}

      <SectionWrapper>
        <DiscoverSection />
      </SectionWrapper>
    </>
  )
}

export default HomeScreen
