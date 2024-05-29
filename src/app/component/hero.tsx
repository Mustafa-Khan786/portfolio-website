'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

const hero = () => {
  return (
    <div>
        <>
  <section className="text-gray-600 body-font bg-black">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="ml-6 title-font sm:text-[60px] text-[70px] mb-4 text-red-600 font-def font-bold">
          Hi I AM
          <br className="hidden lg:inline-block" />
        
<Typewriter
  options={{
    strings: [
      "Ghulam Mustafa",
    "Web Developer",
    "UI/UX Designer",
    
  
    ],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <p className="ml-6 mb-8 mr-10 leading-relaxed text-black font-abc">
            A passionate Computer Science Student Programmer with a knack
            <br />
            for designing and developing websites.
          </p>
        <div className="flex justify-center">
          <Link href={"#contact"}> 
          <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">
            Contact
          </button>
          </Link>
          </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded mx auto-w-[15rem]"
          width={"500"}
          height={"500"}
          alt="hero"
          src={require('../../../public/WhatsApp Image 2024-05-24 at 11.21.34_fad4cf44.jpg')}
        />
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default hero