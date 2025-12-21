import React, { useState } from 'react'
import hero from '../../assets/Hero.jpg';

import service1 from '../../assets/serviceIcon1.jpg';
import service2 from '../../assets/serviceIcon2.webp';
import service3 from '../../assets/serviceIcon3.jpg';
import service4 from '../../assets/serviceIcon4.jpg';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import collectionImg1 from '../../assets/collectionImg1.webp'
// import collectionImg2 from '../../assets/collectionImg2.webp'
// import collectionImg3 from '../../assets/collectionImg3.webp'
// import collectionImg4 from '../../assets/collectionImg4.webp'
// import collectionImg5 from '../../assets/collectionImg5.webp'
// import collectionImg6 from '../../assets/collectionImg6.webp'
// import collectionImg7 from '../../assets/collectionImg7.webp'
// import collectionImg8 from '../../assets/collectionImg8.webp'
// import collectionImg9 from '../../assets/collectionImg9.webp'
// import collectionImg10 from '../../assets/collectionImg10.webp'
// import collectionImg11 from '../../assets/collectionImg11.webp'
// import collectionImg12 from '../../assets/collectionImg12.webp'

// import agent1 from '../../assets/agent1'
// import agent2 from '../../assets/agent2'
// import agent3 from '../../assets/agent3'

// import banner from '../../assets/banner.jpg'

// import ctg1 from '../../assets/ctg1'
// import ctg2 from '../../assets/ctg2'
// import ctg3 from '../../assets/ctg3'
// import ctg4 from '../../assets/ctg4'
// import ctg5 from '../../assets/ctg5'
// import ctg6 from '../../assets/ctg6'
// import ctg7 from '../../assets/ctg7'

// import blog1 from '../../assets/blog1.jpg'
// import blog2 from '../../assets/blog2.jpg'
// import blog3 from '../../assets/blog3.jpg'
// import blog4 from '../../assets/blog4.jpg'
// import blog5 from '../../assets/blog5.jpg'
// import blog6 from '../../assets/blog6.jpg'
// import blog7 from '../../assets/blog7.jpg'
// import blog8 from '../../assets/blog8.jpg'
// import blog9 from '../../assets/blog9.jpg'

const dropDownOptions = {
  rent: ['Studio', 'Apartments', 'Houses', 'Luxurious Homes', 'office Spaces', 'Townships'],
  buy: ['Status', 'Property', 'Active', 'Sold'],
  foreclosure: ['Categories', 'Apartments', 'Houses', 'Luxurious Homes', 'Office Spaces', 'Studio'],
}

// const blogs = [
//   { img: blog1, title: 'Will property prices crash in India due to t...', date: 'September 20, 2025', text: "India's mainstream residential prices have..." },
//   { img: blog2, title: 'Complete guide about property tax in Delhi...', date: 'September 20, 2025', text: 'A modern redrawing of the 1807 version of the...' },
//   { img: blog3, title: 'Will property prices crash in India due to t...', date: 'March 10, 2025', text: 'Housing affordability in India has increased...' },
//   { img: blog4, title: "The red-hot property market that's challengi...", date: 'March 4, 2025', text: 'Mumbai as a whole covers a total area of...' },
//   { img: blog5, title: 'The top 5 most livable Kolkata neighborhoods...', date: 'May 28, 2025', text: 'Kolkata covers a total area of...' },
//   { img: blog6, title: 'Maumbai, where home prices have doubled in...', date: 'May 27, 2025', text: 'In Bangalore, uptown means...' },
//   { img: blog7, title: 'Getting a house for rent in Hyderabad downtown...', date: 'May 27, 2025', text: 'In contrast with the urban atmosphere of Hyderabad...' },
//   { img: blog8, title: 'Buying a house v/s reanting a house in India...', date: 'May 27, 2025', text: 'India covers a total livable areas of...' },
//   { img: blog9, title: 'Find the most attractive houses for sale in...', date: 'May 27, 2025', text: 'Pune has affordable housing prices...' },
// ];

const Index = () => {
  const [activeTab, setActiveTab] = useState('rent');
  const [selectedOption, setSelectedOption] = useState(dropDownOptions.rent[0]);

  // const [visibleCount, setVisibleCount] = () => {
  //   setVisibleCount(prev => prev + 3);
  // };

  return (
    <>
    {/* Hero */}
      <div className="relative h-[85vh] px-[2%] lg:px-[12%] bg-cover bg-center " style={{backgroundImage: `url(${hero})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-55 "></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-12 text-white ">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 ">
            Find Your Dream <span className='text-[#005414] text-6xl'>Home</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl ">Explore top properties in India with our trusted real-estate services</p>
          <div className="bg-[#052d18a1] p-5 rounded-lg max-w-4xl w-full max-auto ">
            <div className="flex space-x-6 text-white font-semibold text-sm mb-4 border-b border-white/20 ">{['rent', 'buy', 'foreclosure'].map((tab) => (
              <button key={tab} onClick={() => {
                setActiveTab(tab);
                selectedOption(dropDownOptions[tab][0])
              }} className={`uppercase pb-2 border-b-2 transition ${activeTab === tab ? 'border-white text-white' : 'border-r-transparent text-white/70 hover:text-white'} `}>{tab}</button>
            ))}</div>

            <div className="flex flex-col md:flex-row bg-white rounded overflow-hidden ">
              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className='p-[10px] text-[#5c727d] border-r outline-none text-lg cursor-pointer appearance-none'>{dropDownOptions[activeTab].map((option, idx) => (<option key={idx} value={option}>{option}</option>))}</select>

              <input type="text" placeholder='Enter an address, state, city, area or zip code' className='flex-1 px-5 py-3 text-base text-black outline-none ' />

              <button className='bg-[#005414] border-[#005414] text-white relative btn px-6 py-5 flex items-center gap-2 text-lg font-semibold '>
                <a href="#" className='z-[999]' >
                  <i className='fas fa-search'/> Search
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

    {/* Service */}
      <div className="service px-[2%] lg:px-[12%] py-[80px] ">
        <div className="service-title section-title mb-10 ">
          <h4 className='text-5xl font-bold pb-1'>Our Services</h4>
          <p className="text-[#2f2956] font-[400] text-xl "> Niraloy offers you the best deals</p>
        </div>

        <div className="service-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 ">
            <div className="service-item flex flex-col items-center justify-center h-[350px] w-full text-center border border-[#e7e7e7] rounded-md pt-[40px] pe-[10px] pb-[30px] hover:shadow-[0px_5px_70px_0px_rgba(38,42,76,0.1)] hover:border-transparent transition-all duration-150 ">
              <div className="service-icon w-[80px] rounded-md p-2 bg-[#e0f0fd] text-[#7778f1] mx-auto mb-8 ">
                <img src={service1} alt="" className='w-full h-full' />
              </div>
              <div className="service-content">
                <h2 className='text-xl text-black font-bricolage font-bold pb-2'>Sell your property</h2>
                <p className='pb-3 text-[#696969] py-5 '>
                  We will sell your home at the best market price.
                </p>
                <a href="#" className='text-[#acacac] hover:text-[#005414] transition text-lg cursor-pointer'>Learn More <i className='bi bi-arrow-right '></i></a>
              </div>
            </div>
            <div className="service-item flex flex-col items-center justify-center h-[350px] w-full text-center border border-[#e7e7e7] rounded-md pt-[40px] pe-[10px] pb-[30px] hover:shadow-[0px_5px_70px_0px_rgba(38,42,76,0.1)] hover:border-transparent transition-all duration-150 ">
              <div className="service-icon w-[80px] rounded-md p-2 bg-[#e0f0fd] text-[#7778f1] mx-auto mb-8 ">
                <img src={service2} alt="" className='w-full h-full' />
              </div>
              <div className="service-content">
                <h2 className='text-xl text-black font-bricolage font-bold pb-2'>Home Loans</h2>
                <p className='pb-3 text-[#696969] py-5 '>
                  We offer you free consultancy to get a loan.
                </p>
                <a href="#" className='text-[#acacac] hover:text-[#005414] transition text-lg cursor-pointer'>Learn More <i className='bi bi-arrow-right '></i></a>
              </div>
            </div>
            <div className="service-item flex flex-col items-center justify-center h-[350px] w-full text-center border border-[#e7e7e7] rounded-md pt-[40px] pe-[10px] pb-[30px] hover:shadow-[0px_5px_70px_0px_rgba(38,42,76,0.1)] hover:border-transparent transition-all duration-150 ">
              <div className="service-icon w-[80px] rounded-md p-2 bg-[#e0f0fd] text-[#7778f1] mx-auto mb-8 ">
                <img src={service3} alt="" className='w-full h-full' />
              </div>
              <div className="service-content">
                <h2 className='text-xl text-black font-bricolage font-bold pb-2'>Home Inspection</h2>
                <p className='pb-3 text-[#696969] py-5 '>
                  We make sure you get what you were promosed.
                </p>
                <a href="#" className='text-[#acacac] hover:text-[#005414] transition text-lg cursor-pointer'>Learn More <i className='bi bi-arrow-right '></i></a>
              </div>
            </div>
            <div className="service-item flex flex-col items-center justify-center h-[350px] w-full text-center border border-[#e7e7e7] rounded-md pt-[40px] pe-[10px] pb-[30px] hover:shadow-[0px_5px_70px_0px_rgba(38,42,76,0.1)] hover:border-transparent transition-all duration-150 ">
              <div className="service-icon w-[80px] rounded-md p-2 bg-[#e0f0fd] text-[#7778f1] mx-auto mb-8 ">
                <img src={service4} alt="" className='w-full h-full' />
              </div>
              <div className="service-content">
                <h2 className='text-xl text-black font-bricolage font-bold pb-2'>Legal Services</h2>
                <p className='pb-3 text-[#696969] py-5 '>
                  Expert legal help for all related property items.
                </p>
                <a href="#" className='text-[#acacac] hover:text-[#005414] transition text-lg cursor-pointer'>Learn More <i className='bi bi-arrow-right '></i></a>
              </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Index