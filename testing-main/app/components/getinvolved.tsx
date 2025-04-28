"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import VolunteerModal from "../components/VolunteerModal";
import PrayerModal from "../components/PrayerModal"; // NEW

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const GetInvolved = ({
  heading = "HOW CAN YOU HELP?",
  posts = [
    {
      id: "post-1",
      title: "GIVE",
      summary:
        "Your generosity provides food for the hungry, education for the underserved, and medical care for those in need. Every donation is a step toward changing lives.",
      url: "/donate?modal=1",
      image:
        "https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      footer: "to donate",
    },
    {
      id: "post-2",
      title: "SERVE",
      summary:
        "Be the hands and feet of Jesus by joining our volunteer team. Whether in-person or remotely, your time and skills can make a lasting impact.",
      url: "#",
      image:
        "https://rinewstoday.com/wp-content/uploads/2022/04/qtq80-wtNDPM.jpeg",
      footer: "to volunteer",
    },
    {
      id: "post-3",
      title: "PRAY",
      summary:
        "Keep our mission in your prayers, asking for strength, guidance, and provision for those we serve. Your prayers are powerful and deeply appreciated.",
      url: "#", // Changed to prevent navigation
      image:
        "https://img.freepik.com/free-photo/spirituality-religion-hands-folded-prayer-holy-bible-church-concept-faith_1150-12945.jpg?t=st=1743183846~exp=1743187446~hmac=66856f76203790a37a4938b543fb64a3b0dfeab38dc9e968adff9a873ff5179a&w=1060",
      footer: "for prayer request",
    },
  ],
}) => {
  const [isVolunteerOpen, setVolunteerOpen] = useState(false);
  const [isPrayerOpen, setPrayerOpen] = useState(false);

  const handleVolunteerClick = () => setVolunteerOpen(true);
  const handlePrayerClick = () => setPrayerOpen(true);

  return (
    <section className="pt-10 bg-[url('https://img.freepik.com/free-photo/easter-christianity-copyspace-background_1421-13.jpg?t=st=1743657875~exp=1743661475~hmac=57f50bee02f209c6408a32e472ea2e67067b72b7ed2be9eaa5c8e76af56c1eb0&w=1060')] bg-fixed bg-cover">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-40">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl text-blue-900 underline-offset-8 underline shadow-md">
            {heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 -mt-8 pb-8">
          {posts.map((post) => {
            const isInternal = post.url.startsWith("/");

            const CardContentBlock = (
              <Card
                key={post.id}
                className="grid grid-rows-[auto_auto_1fr_auto] rounded-sm group overflow-hidden hover:bg-gradient-to-r from-[#fde68a] to-[#f59e0b] transition duration-500 ease-in-out mx-3"
              >
                <div className="w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center -mt-6 group-hover:scale-105 transition duration-500 ease-in-out"
                  />
                </div>
                <CardHeader>
                  <h2 className="text-4xl md:text-xl lg:text-3xl text-blue-900 font-medium -mt-5">
                    {post.title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 text-sm lg:text-base md:text-base">
                    {post.summary}
                  </p>
                </CardContent>
                <CardFooter className="text-red-700 items-center">
                  {post.footer}
                  <ArrowRight className="ml-2 size-4" />
                </CardFooter>
              </Card>
            );

            if (post.title === "SERVE") {
              return (
                <div
                  key={post.id}
                  onClick={handleVolunteerClick}
                  className="cursor-pointer transition-opacity duration-200 fade-in"
                >
                  {CardContentBlock}
                </div>
              );
            } else if (post.title === "PRAY") {
              return (
                <div
                  key={post.id}
                  onClick={handlePrayerClick}
                  className="cursor-pointer transition-opacity duration-200 fade-in"
                >
                  {CardContentBlock}
                </div>
              );
            } else if (isInternal) {
              return (
                <Link
                  key={post.id}
                  href={post.url}
                  className="transition-opacity duration-200 fade-in"
                >
                  {CardContentBlock}
                </Link>
              );
            } else {
              return (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200 fade-in"
                >
                  {CardContentBlock}
                </a>
              );
            }
          })}
        </div>
      </div>

      {/* Volunteer Modal */}
      <VolunteerModal isOpen={isVolunteerOpen} onClose={() => setVolunteerOpen(false)} />

      {/* Prayer Modal */}
      <PrayerModal isOpen={isPrayerOpen} onClose={() => setPrayerOpen(false)} />
    </section>
  );
};

export { GetInvolved };
