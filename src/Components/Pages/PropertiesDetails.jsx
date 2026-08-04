import React, { useState } from 'react'

// Properties Data
import propertiesData from '../../Properties.json'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import sectionbanner from '../../assets/sectionbanner.jpg'
import agentImg from '../../assets/agentImg.jpg'
import floorPlanA from '../../assets/floorPlanA.jpg'
import floorPlanB from '../../assets/floorPlanB.jpg'
// import floorplanB from '../../assets/floorplanB.jpg'
import { useParams } from 'react-router-dom'
import Index from './Index'


const PropertiesDetails = () => {
  const {id} = useParams();
  const property = propertiesData.top.find((p) => String(p.id) === String(id));

  const [showImageA, setShowImageA] = useState(false)
  const [showImageB, setShowImageB] = useState(false)

  if(!property){
    return <div className="text-center py-20 text-xl text-red-600 font-semibold ">Property not found</div>
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[450px] lg:h-[600px] px-[2%] lg:px-[12%] py-[80px] flex flex-col justify-center items-center text-center text-white " style={{backgroundImage: `url(${sectionbanner})`}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60 "></div>
        <div className="relative z-10 animate-fade-in-up ">
          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 drop-shadow-md '>Properties Details</h1>
          <h1 className='text-base sm:text-lg lg:text-xl font-bold mb-6 drop-shadow-md '>Get to know our team members</h1>
        </div>
      </div>

      <div className="px-4 md:px-[5%] py-10 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 bg-gray-50 ">
        {/* LEFT SIDE */}
        <div className="col-span-2">
          <Swiper
            modules={[Pagination]}
            pagination={{clickable: true}}
            loop={true}
            className='rounded-lg overflow-hidden property-details-slider'
          >
            {property.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={`${import.meta.env.BASE_URL}${img}`} alt={`Property ${index + 1}`} className='w-full h-[250px] sm:h-[380px] lg:h-[420px] object-cover rounded-xl hover:scale-105 transition-transform duration-300 ' />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PROPERTY ADDRESS */}
          <div className="bg-white shadow rounded-lg p-6 mt-6 ">
            <h5 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 ">
              <i className="bi bi-geo text-indigo-700 "></i> Property address
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm md:text-base text-gray-800 ">
              <div><span className="font-bold text-gray-600  ">Address: </span>Lakeside Homes</div>
              <div><span className="font-bold text-gray-600  ">City: </span><span className='text-indigo-900'>Kolkata</span></div>
              <div><span className="font-bold text-gray-600  ">Area: </span><span className='text-indigo-900'>Salt Lake Sector III</span></div>
              <div><span className="font-bold text-gray-600  ">State: </span><span className='text-indigo-900'>West Bengal</span></div>
              <div><span className="font-bold text-gray-600  ">Country: </span><span className='text-indigo-900'>India</span></div>
            </div>
            <a href="#" className='inline-block mt-5 bg-green-500 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-green-600 transition duration-300 '>Open in Google Maps</a>
          </div>
          {/* DESCRIPTION */}
          <div className="bg-white shadow-lg rounded-xl p-8 mt-10 hover:shadow-indigo-200 transition-all ">
            <h5 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 ">
              <i className="bi bi-file-text text-indigo-700 "></i> Description
            </h5>
            <p className="text-gray-700 text-base leading-relaxed ">
              Just steps away from Hill Cart Road Bus to Sikkim and Local buses.
            </p>
          </div>

          {/* Property details Table */}
          <div className="bg-white shadow-md rounded-2xl p-8 mt-10 hover:shadow-green-400 transition ">
            <h5 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 ">
              <i className="bi bi-building text-indigo-700 "></i> Property Details
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm leading-relaxed ">
              <p><i className="bi bi-hash text-purple-500 mr-1"></i><b>Property ID: </b>23276</p>
              <p><i className="bi bi-currency-rupee text-green-600 mr-1"></i><b>Price: </b> 450 /-</p>
              <p><i className="bi bi-door-open-fill text-orange-500 mr-1"></i><b>Rooms: </b>1</p>


            </div>
          </div>

        {/* Floor Plan A */}
          <div className="bg-white shadow-md rounded-2xl p-8 mt-10 hover:shadow-green-400 transition ">
            <h5 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 ">
              <i className="bi bi-stack text-indigo-700 "></i> Floor Plan
            </h5>

            {/* Plan A */}
            <div className="bg-white shadow mt-10 hover:shadow-indigo-200 transition-all ">
              <div className="flex justify-between items-center px-6 py-4 bg-gray-100 flex-wrap gap-2 ">
                <h3 className="font-semibold text-lg text-gray-800 ">Floor Plan A</h3>
                <div className="text-sm text-gray-600 space-x-3 ">
                  <span><strong>Price: </strong> Rs. 2,000</span>
                  <span><strong>Baths: </strong>3</span>
                  <span><strong>Rooms: </strong>4</span>
                  <span><strong>Size: </strong>300 sqft</span>
                </div>
              </div>
              <div onClick={() => setShowImageA(!showImageA)} className="cursor-pointer text-left text-indigo-600 font-medium p-6 pb-2 ">
                {showImageA ? "Hide Floor Plan A" : "Show Floor Plan A"}
              </div>
              {showImageA && (
                <img src={floorPlanA} alt="" className='w-full object-cover mt-4' />
              )}
              <div className="p-6 text-sm text-gray-600pt-0 ">
                Inside this Enchanting home...
              </div>
            </div>
          </div>

        {/* Floor Plan B */}
          <div className="bg-white shadow-md rounded-2xl p-8 mt-10 hover:shadow-green-400 transition ">
            <h5 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 ">
              <i className="bi bi-stack text-indigo-700 "></i> Floor Plan
            </h5>

            {/* Plan A */}
            <div className="bg-white shadow mt-10 hover:shadow-indigo-200 transition-all ">
              <div className="flex justify-between items-center px-6 py-4 bg-gray-100 flex-wrap gap-2 ">
                <h3 className="font-semibold text-lg text-gray-800 ">Floor Plan A</h3>
                <div className="text-sm text-gray-600 space-x-3 ">
                  <span><strong>Price: </strong> Rs. 2,000</span>
                  <span><strong>Baths: </strong>3</span>
                  <span><strong>Rooms: </strong>4</span>
                  <span><strong>Size: </strong>300 sqft</span>
                </div>
              </div>
              <div onClick={() => setShowImageB(!showImageB)} className="cursor-pointer text-left text-indigo-600 font-medium p-6 pb-2 ">
                {showImageB ? "Hide Floor Plan B" : "Show Floor Plan B"}
              </div>
              {showImageB && (
                <img src={floorPlanB} alt="" className='w-full object-cover mt-4' />
              )}
              <div className="p-6 text-sm text-gray-600pt-0 ">
                Inside this Enchanting home...
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="sticky top-5 self-start space-y-10 ">
          {/* SUMMARY */}
          <div className="big-white p-6 rounded-xl shadow-md ">
            <div className="mb-4 flex gap-2">
              <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-medium ">Rent</span>
              <span className="bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-medium ">Township</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1 "><i className="bi bi-building text-blue-600 me-1"></i>{property.title}</h2>
            <h3 className="text-2xl font-bold text-purple-700 my-3 ">{property.price} <span className="text-sm text-gray-500 font-medium"></span></h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 flex-wrap">
              <button className="border border-gray-300 w-full sm:w-auto px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-100"><i className='bi bi-share-fill mr-1'></i>Share</button>
              <button className="border border-red-300 w-full sm:w-auto px-3 py-1 rounded-full text-sm text-red-600 hover:bg-red-50"><i className="bi bi-heart mr-1"></i>Favorite</button>
              <button className="border border-blue-300 w-full sm:w-auto px-3 py-1 rounded-full text-sm text-blue-500 hover:bg-blue-50"><i className="bi bi-printer mr-1"></i>Print</button>
            </div>
          </div>

          {/* AGENT */}
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <img src={agentImg} alt="Agent" className="rounded-t-xl w-full h-72 object-cover" />
            <div className="text-center py-4">
              <div className="flex justify-center flex-wrap gap-4 text-xl mb-3">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-github"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-pinterest"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
              <h5 className="font-bold">Jeane Thompson</h5>
              <p className="text-gray-500 text-sm">Real Estate Agent</p>
              <div className="text-left text-sm text-gray-700 mt-4 space-y-1">
                <p><i className="bi bi-envelope me-2"></i>jeane@email.com</p>
                <p><i className="bi bi-telephone me-2"></i>0123 456 789</p>
                <p><i className="bi bi-person-circle me-4"> jeane.thompson</i></p>
                <p><i className="bi bi-globe me-2"></i>mywebsite.com</p>
              </div>
              <p className="mt-2 text-sm"><span className="font-semibold">Member of: </span>Planner N Maker</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xl font-bold text-indigo-800 mb-4">Request Information</h4>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded-md text-sm " />
              <input type="text" placeholder="Email Address" className="w-full border px-4 py-2 rounded-md text-sm " />
              <input type="text" placeholder="Phone Number" className="w-full border px-4 py-2 rounded-md text-sm " />
              <textarea rows="4" placeholder="I'm interested in this apartment" className="w-full bg-white text-black px-4 py-2 rounded-md "  ></textarea>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md ">Send Email</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertiesDetails