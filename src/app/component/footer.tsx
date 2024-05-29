import Link from 'next/link';
import React from 'react'
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg bg-black">
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image
              src={require("../../../public/PERSNAL SKILLS - Copy.jpg")}
              alt="It Mate"
              width={100}
              height={100}
            className='w-[50px]'
            />
      <span className="ml-3 text-xl text-red-600">MY PORTFOLIO</span>
    </a>
    <p className="text-sm text-red-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-red-600 sm:py-2 sm:mt-0 mt-4">
      © 2024 MY PORTFOLIO 
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"https://www.youtube.com/@princekingz123"} className="text-gray-500" target='_main'>
        <FaLinkedin className='text-3xl  hover:text-[#0000ff]'/>
      </Link>
    
    </span>
  </div>
</footer>


    </div>
  )
}

export default Footer