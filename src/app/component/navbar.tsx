
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import PersonalSkillsImage from '../../../public/PERSNAL SKILLS - Copy.jpg'; // Import the image

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-black-600 bg-red-600 body-font">
        <div className=" container auto flex flex-wrap p2 flex-cool md:">
          <a href="#">
            <a className="flex title-font font-medium items-center text-red-900 mb-4 md:mb-0">
              <Image
                src={require("../../../public//new logo bav-modified.png")} // Use the imported image
                alt="Mustafa"
                width={200}
                height={100}
                className="w-[50px] rounded-full"
              />
             <span className="ml-3 text-xl font-def text-black ">Ghulam Mustafa</span>
            </a>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base font-abc font-extrabold">
            <Link href="#Home" className="mr-5 hover:text-red-900">Home</Link>
            <Link href="#About" className="mr-5 hover:text-red-900">About</Link>
            <Link href="#Skill" className="mr-5 hover:text-red-900">Skill</Link>
            <Link href="#Project"className="mr-5 hover:text-red-900">Projects</Link>
            <Link href="#Contact" className="mr-5 hover:text-red-900">Contact</Link>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
