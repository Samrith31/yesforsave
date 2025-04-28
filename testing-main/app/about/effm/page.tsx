// Import statements
import React from 'react';
import Image from 'next/image';
import banner from '@/public/banner.jpg';
import { FcOk } from 'react-icons/fc';

// Define the types for the props
interface Feature {
  image: string;
  title: string;
  description: string;
}

interface MinistryPageProps {
  heading?: string;
  description?: string;
  features?: Feature[];
}

const MinistryPage = ({
  heading = "Elijah's Fire Faith Ministry (Evangelism & Outreach)",
  description = "We spread the Gospel through local and global outreach programs, revival, healing prayer meet as online evangelism. Our mission is to bring the light of Christ to the world and help transform lives. The following are our ministry activities:",
  
  features = [
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Revival & Healing Meetings ",
      description:
        "Through powerful revival events, we aim to ignite faith, see miracles happen and experience spiritual renewal. Our focus is on healing, deliverance and reviving hearts for God.",
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Children & Youth Outreach",
      description:
        "Mentorship programs, tutoring, and faith-based youth activities that empower the next generation with God’s truth, academic support, and positive role models.",
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Worship & Music Ministry",
      description: "Leading worship sessions, gospel concerts, and musical outreach to bring people together in praise and experience the joy of the Lord.",
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Digital Evangelism & Online Ministry",
      description: "Sharing devotionals, sermons, and testimonies through social media, livestreams, and online Bible studies—spreading the Gospel globally.",
    },
    {
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      title: "Seasonal Outreach Events",
      description: "Christmas toy drives, Thanksgiving meals, and back-to-school events—bringing joy and relief during key moments throughout the year.",
    },
  ],
}: MinistryPageProps) => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="container text-center mt-10 py-5 mx-auto lg:max-w-5xl md:max-w-xl bg-red-100 rounded-md">
          <Image
            src={banner}
            alt="about banner"
            layout="responsive"
            width={1200} // Provide width for responsive image loading
            height={600} // Provide height to maintain aspect ratio
            style={{
              display: 'block',
              cursor: 'pointer',
              border: '1px solid white',
              background: 'white',
            }}
          />
          <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl mx-auto text-red-700 underline-offset-8 underline pb-5 -mt-10 pt-16">
            ABOUT US
          </h2>
          <p className="lg:text-4xl md:text-2xl text-xl lg:px-44 font-(family-name:--font-unna) text-gray-800 px-5 pb-3">
            As a startup Ministry and NGO, we aim to:
          </p>
          <ul className="lg:text-2xl text-start lg:px-28 md:px-8 px-6">
            <li className='pb-3'>
              <FcOk className='inline-flex mr-2' />
              Spread the Gospel through evangelism, revival events and online programs.
            </li>
            <li className='pb-3'>
              <FcOk className='inline-flex mr-2' />
              Serve the needy through humanitarian aid, education and disaster relief.
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
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl border p-2">
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

export default MinistryPage;
