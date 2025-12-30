import React, { useState } from 'react'

// Properties Data
import propertiesData from '../../Properties.json'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import sectionbanner from '../../assets/sectionbanner.jpg'
// import agentImg from '../../assets/agentImg.jpg'
// import floorplanA from '../../assets/floorplanA.jpg'
// import floorplanB from '../../assets/floorplanB.jpg'
import { useParams } from 'react-router-dom'


const PropertiesDetails = () => {
  const {id} = useParams();
  const property = propertiesData.latest.find((p) => String(p.id) === String(id));

  const [showImageA, setShowImageA] = useState(false)
  const [showImageB, setShowImageB] = useState(false)

  if(!property){
    return <div className="text-center py-20 text-xl text-red-600 font-semibold ">Property not found</div>
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[450px] lg:h-[600px] px-[2%] lg:px-[12%] py-[80px] flex flex-col justify-center items-center text-center text-white " style={{backgroundImage: `url(${sectionbanner})`}}></div>
    </>
  )
}

export default PropertiesDetails