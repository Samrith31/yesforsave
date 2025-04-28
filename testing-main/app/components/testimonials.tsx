import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { BsQuote } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 lg:px-44 sm:px-5 md:px-5 overflow-hidden pb-24'>
        <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl mx-auto text-blue-900 underline-offset-8 underline pt-10">TESTIMONIALS</h2>
        <p className="text-gray-800 lg:text-xl text-center max-w-2xl px-2">
          At Elijah&apos;s Fire Faith Ministry and Yes4save Foundation, we believe that the power of testimonial is a powerful tool to encourage faith and inspire others. God is doing incredible things through our ministries, and we want to share those stories of transformation, healing and miracles with you.
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-2xl mt-16 rounded-sm bg-purple-200 px-8 pt-8"
        >
          <CarouselContent className="-mt-1 h-[300px] lg:h-[200px] md:h-[200px] text-xl font-(family-name:--font-unna)">
            <CarouselItem className="pt-1 md:basis-1/1">
              <h3 className='font-bold pb-8 text-red-700 flex'>
                Healing Testimonial<BsQuote />
              </h3>
              <p>&quot;I was healed of chronic pain after attending the revival crusade last month. I had been in pain for years, but God&apos;s power touched me, and now I am completely free!&quot;</p>
              <p className='pt-2 text-end mr-7 font-bold'>- Sarah M.</p>
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/1">
              <h3 className='font-bold pb-8 text-red-700 flex'>
                Life Transformation Testimonial<BsQuote />
              </h3>
              <p>&quot;I was lost and struggling with addiction, but after joining the prayer meetings and hearing the Word of God, my life has completely turned around. I now have hope and purpose.&quot;</p>
              <p className='pt-2 text-end mr-7 font-bold'>- John D.</p>
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/1">
              <h3 className='font-bold pb-8 text-red-700 flex'>
                Humanitarian Aid Testimonial<BsQuote />
              </h3>
              <p>&quot;Thanks to Yes4save Foundation, I was able to send my children to school. The support they provided with supplies and tuition made all the difference.&quot;</p>
              <p className='pt-2 text-end mr-7 font-bold'>- Grace A.</p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}

export default Testimonials
