import React from 'react'

export default function Hero() {
    return (
        <section id="about" className="py-16 px-8 flex align-middle justify-center ">
        <div className="max-w-5xl mx-auto flex flex-row align-middle justify-evenly w-4/5">
          {/* Left Text Content */}
          <div className="flex flex-col md:w-2/5 lg:w-full self-center md:mr-10 font-sans text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold uppercase">Hello, I'm Alex</h2>
            <h3 className="text-xl md:text-2xl font-light mt-3">Flutter Developer | Web Developer | Designer</h3>
            <div className="mt-5 flex justify-center md:justify-start space-x-4">
              <button className="bg-violet-600 px-5 py-2 font-semibold rounded-full text-white font-sans hover:bg-violet-700 transition duration-300 transform hover:scale-95">
                Contact Me
              </button>
              <button className="border-violet-600 border px-5 py-2 font-semibold rounded-full text-black font-sans hover:bg-gray-100 transition duration-300 transform hover:scale-95">
                Want to Discuss?
              </button>
            </div>
          </div>
          {/* Right Circle */}
          <div className="bg-gray-200 border border-black md:w-2/4 md:aspect-square lg:w-2/4 lg:aspect-square lg:rounded-full sm:w-32 sm:aspect-square rounded-full"></div>


        </div>
      </section>
      
    )
}
