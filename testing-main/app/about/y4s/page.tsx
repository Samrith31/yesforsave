import React from 'react'
import Image from 'next/image';
import banner from '@/public/banner.jpg'
import { FcOk } from "react-icons/fc";




const YesPage = ({
  heading = "Yes4Save Foundation (Humanitarian Outreach)",
  description = "The Yes4save Foundation works to meet practical needs like food, shelter, education and disaster relief. We are committed to helping the poor and marginalized while sharing the love of Christ through the following actions:",
  
  features = [
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Basic needs",
      description:
        "Providing basic needs like food, clean water, clothing, and shelter.",
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Medical Aid & Healthcare",
      description:
        "Providing medical support, health education, and emergency care.",
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Emergency relief",
      description: "Emergency relief during floods and natural disasters.",
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Education & Empowerment",
      description: "Helping children and adults gain knowledge and skills for a better future.",
    },
  ],
}) => {
  return (
    <div>
      
      <div className="overflow-hidden">
      <div className="container text-center mt-10 py-5 mx-auto lg:max-w-5xl md:max-w-xl bg-blue-100 rounded-md">
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
      
    <section className="py-16">
      <div className="container max-w-6xl mx-auto">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky">
            <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
              {heading}
            </h2>
            <p className="font-medium text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl border p-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-video w-full rounded-xl border border-dashed object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default YesPage ;