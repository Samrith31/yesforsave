import React from 'react'
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const Youtube = () => {
  return (
    <section className="pt-16 pb-10 bg-no-repeat bg-cover lg:px-20 px-6 lg:pt-16 lg:pb-16 bg-fixed mx-auto">

      <div className="container mx-auto overflow-hidden lg:max-w-5xl md:max-w-lg">

        <div className="grid items-center gap-4 lg:grid-cols-2 lg:mx-20">
            
            <div className='object-cover'>
            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/4UoGyGr7OuU?si=SllIk5dB9I8-ndKV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='lg:h-80 lg:w-96 mx-auto'></iframe>
        </div>
          <div>
            
          <h2 className="text-4xl text-gray-800 font-bold items-center">
                Check out our <span className="text-red-500">Youtube</span> channel
            </h2>
            <p className="mt-4 text-gray-800 text-lg">
                Follow our youtube channel to witness our EFFM's evangelism and y4s foundation's humanitarian outreaches.
            </p>
            <Link href='/about/effm' legacyBehavior>
            <a
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg justify-center mt-6 text-red-700  hover:text-red-600"
          >
            Learn more about our ministry
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
          </Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Youtube

