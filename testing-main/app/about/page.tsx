import React from 'react'
import Image from 'next/image';
import banner from '@/public/banner.jpg'
import { FcOk } from "react-icons/fc";

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="container text-center mt-10 py-5 mx-auto lg:max-w-5xl md:max-w-xl bg-yellow-100 rounded-md">
      <Image
                    src={banner}
                    style={{
                      width: "100%",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="about banner"
                  />
      <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl mx-auto text-blue-900 underline-offset-8 underline pb-5 -mt-10 pt-16"> ABOUT US
</h2>
<p className="lg:text-4xl  md:text-2xl text-xl lg:px-44 font-(family-name:--font-unna) text-gray-800 px-5 pb-3">As a  startup Ministry  and  NGO, we aim to:
</p>
<ul className="lg:text-2xl text-start lg:px-28 md:px-8 px-6">
  <li className='pb-3'><FcOk className='inline-flex mr-2'/>Spread the Gospel through evangelism, revival events and online programs.
  </li>
  <li className='pb-3'><FcOk className='inline-flex mr-2'/>Serve the needy through humanitarian aid, education and disaster relief. 
  </li>
</ul>
      </div>
    </div>
  )
}

export default AboutPage