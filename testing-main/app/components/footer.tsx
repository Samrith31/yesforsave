import React from "react";
import Image from "next/image";
import Link from "next/link";
import y4s from "@/public/y4s.png";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1D2B] pt-12 pb-6 px-10 tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-6">
          <div className="space-y-4">
            <div>
              <Link href="/">
                <div className="flex items-center space-x-2 text-2xl font-medium">
                  <Image
                    src={y4s}
                    style={{
                      width: "200px",
                      display: "block",
                      cursor: "pointer",
                      border: "1px solid white",
                      background: "white",
                    }}
                    alt="gallery images"
                  />
                </div>
              </Link>
              <br />
              <p className="text-gray-300 mb-5">
                Yes4Save Foundation & Elijah&apos;s Fire Faith Ministry.
              </p>
            </div>

            <div className="flex space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-200"
              >
                <SiWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white">Email Us</p>
            <p className="mb-3 text-gray-400">For feedbacks & assistance.</p>
            <a href="mailto:abc@example.com" className="font-semibold hover:underline text-white">
              abc@example.com
            </a>
          </div>

          <div className="mr-8 mb-5">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white">Call Us</p>
            <p className="mb-3 text-gray-400">
              We&apos;re available Mon-Fri, 9am-5pm.
            </p>
            <a href="tel:+1234567890" className="font-semibold hover:underline text-white">
              +123 456 7890
            </a>
          </div>

          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold text-white">Visit Us</p>
            <p className="mb-3 text-gray-400">Drop by our office for a chat.</p>
            <p className="font-semibold text-white">1234 Street Name, City Name</p>
          </div>
        </div>

        <h3 className="text-md font-semibold leading-6 text-white pt-10 underline underline-offset-2">Useful links</h3>

        <div className="md:grid md:grid-cols-3 grid-cols-3 md:gap-8 pb-5">
          <div>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/donate" className="text-md leading-6 text-gray-300 hover:text-white">Donate</Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-md leading-6 text-gray-300 hover:text-white">Volunteer</Link>
              </li>
              <li>
                <Link href="/prayer-request" className="text-md leading-6 text-gray-300 hover:text-white">Prayer Request</Link>
              </li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0">
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/yes4save" className="text-md leading-6 text-gray-300 hover:text-white">Yes4Save Foundation</Link>
              </li>
              <li>
                <Link href="/elijahs-fire" className="text-md leading-6 text-gray-300 hover:text-white">Elijah&apos;s Fire Faith Ministry</Link>
              </li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0">
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/gallery" className="text-md leading-6 text-gray-300 hover:text-white">Image Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="text-md leading-6 text-gray-300 hover:text-white">Contact Details</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-200 text-xs mt-5">
          for websites & webapps contact @ JAI - 8610636851
        </p>
        <hr />
        <p className="text-gray-200 text-sm mt-5">
          © Yes4Save Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
