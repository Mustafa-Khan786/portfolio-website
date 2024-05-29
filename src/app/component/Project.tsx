'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Project = () => {
  return (
    

    
    <div id="Project"><>
    <section className="text-gray-600 body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black bg-r-500">
            My Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-5 -mt-[5rem]">
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require( "../../../public/todo list pic.png")}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                  TODO-LIST PROJECT
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                  TODO LIST
                </h1>
                <p className="leading-relaxed text-white">
                To-Do List is a simple application that can allows users to create,
                    edit and it also delete tasks.</p>
                        <Link href="https://github.com/Mustafa-Khan786/TODO">
                        <p className="leading-relaxed text-red-600">
                        View project </p>
                        </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require( "../../../public/number guessing pic.webp")} 
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                  Number Guessing Project
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                  Number GUESS
                </h1>
                <p className="leading-relaxed text-white">
                Guessing Game where the user has to guess a number between 1 and 10, but they don`t know what it is.
                
                <Link href="  https://github.com/Mustafa-Khan786/NUMBER-GUESS">
                        <p className="leading-relaxed text-red-600">
                        View project </p>
                        </Link>
                        
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require( "../../../public/atm pic.jpg")} 
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                  ATM Machine Project
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                  ATM Machine Project 
                </h1>
                <p className="leading-relaxed text-white ">
                Virtual ATM simulation with realistic withdrawal amounts, transaction fees, and account balances.
                <Link  target="_blank"href="https://github.com/Mustafa-Khan786/ATM">
                        <p className="leading-relaxed text text-red-600">
                        View project </p>
                        </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require( "../../../public/calculator pic.jpg")} 
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                Calculator Project
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                  Calculator
                </h1>
                <p className="leading-relaxed text-white">
                A Calculator project which includes basic arithmetic operations as well as more complex mathematical functions.
                <Link  target="_blank"href="https://github.com/Mustafa-Khan786/CALCULATOR">
                        <p className="leading-relaxed text text-red-600">
                        View project </p>
                        </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require("../../../public/currency pic.gif")}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                Currency-Converter Project
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                Currency-Converter 
                </h1>
                <p className="leading-relaxed text-white">
                Currency Converter is a simple web application that converts the amount from one currency to another using exchange rates.
                <Link  target="_blank"href="https://github.com/Mustafa-Khan786/CURRENCY-CONVERTER">
                        <p className="leading-relaxed text text-red-600">
                        View project </p>
                        </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative ">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require("../../../public/word counter pic.jpg")}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                Word-Counter Project
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                  Word-Counter
                </h1>
                <p className="leading-relaxed text-white">
                word counter app that counts the number of words, characters and lines in a given document or inputs
                <Link  target="_blank"href="https://github.com/Mustafa-Khan786/WORD-COUNTER">
                        <p className="leading-relaxed text text-red-600">
                        View project </p>
                        </Link>
                </p>
              </div>
            </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative ">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require("../../../public/count new.jpg")}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                Count-Down Project
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                Count-Down
                </h1>
                <p className="leading-relaxed text-white">
                A countdown timer is a type of application that counts down from a given time until it reaches zero.
                <Link  target="_blank"href="https://github.com/Mustafa-Khan786/COUNT-DOWN">
                        <p className="leading-relaxed text text-red-600">
                        View project </p>
                        </Link>
                </p>
              </div>
            </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative ">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require("../../../public/student mangement.jpg")}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                Student Mangement System  Project
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                Student Mangement System
                </h1>
                <p className="leading-relaxed text-white">
                This is very simple student Mangement syestem project..
                <Link  target="_blank"href="https://github.com/Mustafa-Khan786/Student-Management-system">
                        <p className="leading-relaxed text text-red-600">
                        View project </p>
                        </Link>
                </p>
              </div>
            </div>
            </div>
           <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative ">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require("../../../public/facebook clone.png")}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 bg-black opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                Facebook clone page Project
                </h2>
                <h1 className="title-font text-lg font-medium text-red-400 mb-3">
              Facebook clone page
                </h1>
                <p className="leading-relaxed text-white">
            A simple facebook clone page..using TypeScript
                <Link  target="_blank"href="https://github.com/Mustafa-Khan786/FaceBook-Clone-Page">
                        <p className="leading-relaxed text text-red-600">
                        View project </p>
                        </Link>
                </p>
              </div>
            </div>
            </div>
    
          </div>
    
          <div>
        </div>
      </div>
    </section>
  </>
  </div>
  )
}

export default Project