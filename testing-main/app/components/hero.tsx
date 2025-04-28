"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import VolunteerModal from "../components/VolunteerModal";

const Hero = ({
  heading = "Elijah's Fire Faith Ministry and Yes4save Foundation",
  description = `"Whoever brings blessing will be enriched, and one who waters will himself be watered." - Proverbs 11:25`,
  buttons = {
    primary: {
      text: "DONATE",
      url: "/donate?modal=1",
    },
    secondary: {
      text: "VOLUNTEER",
      url: "", // not used anymore since modal opens
    },
  },
  image = {
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=457,fit=crop/YbNaP4oDnWC621jn/img_20240121_233621-AGBGDyOZ6JC5r40j.jpg",
    alt: "Hero section demo image showing interface components",
  },
}) => {
  const router = useRouter();
  const [isVolunteerOpen, setVolunteerOpen] = useState(false);

  const handleDonateClick = () => {
    router.push(buttons.primary.url);
  };

  return (
    <>
      <section className="pt-22 pb-10 bg-[url('https://i0.wp.com/www.godwhospeaks.uk/wp-content/uploads/2022/03/howtoreadbiblepic.jpg?resize=1140%2C641&ssl=1')] bg-no-repeat bg-cover lg:px-20 px-6 lg:pt-34 lg:pb-16 bg-fixed">
        <div className="container mx-auto">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="my-6 text-4xl text-pretty lg:text-6xl text-white font-medium font-(family-name:--font-oswald) leading-14 lg:leading-16">
                {heading}
              </h1>
              <p className="mb-8 max-w-xl text-gray-200 lg:text-xl font-(family-name:--font-unna) italic">
                {description}
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {buttons.primary && (
                  <Button
                    onClick={handleDonateClick}
                    className="w-full sm:w-auto bg-[#e91347] hover:text-white hover:bg-[#fc144d] py-6 text-2xl transition duration-300 ease-in-out font-(family-name:--font-oswald) group transform hover:scale-105 hover:shadow-lg"
                  >
                    {buttons.primary.text}
                    <HeartHandshake className="size-6 transition-transform group-hover:scale-110 duration-300 ease-in-out ml-2" />
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    onClick={() => setVolunteerOpen(true)}
                    className="w-full sm:w-auto bg-blue-900 hover:text-white hover:bg-[#1187d9] py-6 text-2xl transition duration-300 ease-in-out font-(family-name:--font-oswald) group transform hover:scale-105 hover:shadow-lg"
                  >
                    {buttons.secondary.text}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 duration-300 ease-in-out ml-2" />
                  </Button>
                )}
              </div>
            </div>
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-96 w-full rounded-sm object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Modal for Volunteer */}
      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setVolunteerOpen(false)}
      
      />
    </>
  );
};

export default Hero;
