import Image from 'next/image'
import y4s from '@/public/y4s.png'
import { Mail, MapPin, Phone } from "lucide-react"
import Link from 'next/link'

const Contact = () => {
  return (
    <footer className="bg-[#1A1D2B]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="grid lg:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div>
                <Link href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <Image
                      src={y4s}
                      style={{
                        width: "250px",
                        display: "block",
                        cursor: "pointer",
                        border: "1px solid white",
                        background: "white"
                      }}
                      alt="gallery images"
                    />
                  </div>
                </Link>
              </div>

              <div className="flex space-x-2">
                <a
                  href=""
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-16 grid lg:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-gray-100">
                  <Mail className="h-6 w-auto" />
                </span>
                <p className="mb-2 text-lg font-semibold text-white">Email Us</p>
                <p className="mb-3 text-gray-300">
                  Our team is ready to assist.
                </p>
                <a href="#" className="font-semibold hover:underline text-white">
                  abc@example.com
                </a>
              </div>

              <div>
                <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-gray-100">
                  <Phone className="h-6 w-auto" />
                </span>
                <p className="mb-2 text-lg font-semibold text-white"> Call Us</p>
                <p className="mb-3 text-gray-300">
                  We&apos;re available Mon-Fri, 9am-5pm.
                </p>
                <a href="#" className="font-semibold hover:underline text-white">
                  +123 456 7890
                </a>
              </div>

              <div>
                <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-gray-100">
                  <MapPin className="h-6 w-auto" />
                </span>
                <p className="mb-2 text-lg font-semibold text-white">Visit Us</p>
                <p className="mb-3 text-gray-300">
                  Drop by our office for a chat.
                </p>
                <a href="#" className="font-semibold text-white">
                  1234 Street Name, City Name
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Copyright © 2024 . Crafted with
              <span className="text-gray-50">♥</span> by AI enthusiasts at
              <Link href="/">
                <a> AIOps.</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Contact }
