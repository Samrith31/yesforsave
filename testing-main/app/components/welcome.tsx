import { BookHeart, Goal, ArrowRight } from 'lucide-react';
import Link from 'next/link';


interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

interface Feature73Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

const Welcome = ({
  
  features = [
    {
      id: "feature-1",
      title: "OUR VISION AND VALUES",
      description:
        "We believe in a world where no one is forgotten, where love and kindness reach every corner, and where faith moves mountains. Guided by Christ’s teachings, we strive to uplift the poor, feed the hungry, and bring hope to the brokenhearted.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1039,h=636,fit=crop/YbNaP4oDnWC621jn/img-20240121-wa0028-m5Kv5kW191i7koel.jpg",
      icon: <BookHeart className="size-7 shrink-0 ml-2" />,
    },
    {
      id: "feature-2",
      title: "OUR MISSION",
      description:"Our mission is to ignite the fire of God’s Spirit  through evangelism, revival events and humanitarian outreach. We are dedicated to transforming lives,  spreading the Gospel and bringing  hope to those in need.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=489,fit=crop/YbNaP4oDnWC621jn/img_20240121_234205-A85pvzk1PkfVbODG.jpg",
      icon: <Goal className="size-7 shrink-0 ml-2" />
    },
  ],
}: Feature73Props) => {
  return (
    <section className='pb-20'>
      <div className="container flex flex-col lg:gap-16 gap-10 lg:px-36 mx-auto">

      <div className="text-center mt-14 bg-gray-200 py-10">
      <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl mx-auto text-blue-900 underline-offset-8 underline pb-10 -mt-10 pt-8">

                  WHO WE ARE?
                </h2>
          <p className="lg:text-3xl lg:px-44 font-(family-name:--font-unna) text-gray-800 px-5">Welcome to  <span className='text-red-700'>Elijah's Fire Faith Ministry and Yes4save Foundation</span>, where our mission is to ignite the fire of God’s Spirit through evangelism, revival events and humanitarian outreach. We are dedicated to transforming lives, spreading the Gospel and bringing hope to those in need.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 -mt-4">
          
          {features.slice(0).map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-sm border border-border bg-gray-200"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-medium md:mb-4 md:text-2xl lg:mb-6 flex items-center text-blue-900 underline-offset-8 underline">
                  {feature.title}{feature.icon}
                </h3>
                <p className="text-gray-800 lg:text-xl font-(family-name:--font-unna)">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href='/about/y4s' legacyBehavior>
      <a
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg justify-center mt-6 text-red-700  hover:text-red-600"
          >
            Learn more about us
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
          </Link>
    </section>
  );
};

export default Welcome ;

  