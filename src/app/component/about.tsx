import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const About = () => {
  return (
    <div id="About"><>

      <section className="text-white body-font bg-black">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px]
              h-[400px]"
              alt="hero"
              src={require( "../../../public/about new pic.jpg")} 
              width={"2900"}
              height={"500"}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
            About Me
              
            </h1>
            <p className="mb-8 leading-relaxed">
            As a web developer, I thrive on turning ideas into interactive digital experiences. I command HTML, CSS, JavaScript, TypeScript, Next.js, React.js, and even dive into the realms , I am pursuing Generative AI and Cloud Computing Engineering. When I am not coding, you all find me exploring the latest tech trends or lost in a good book. Lets connect and build something remarkable!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
              <Link href={"#contact"}> 
          <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">
            Contact
          </button>
          </Link>
               </button>
               {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                 Button
              </button>  */}
            </div>
          </div>
        </div>
      </section>
    
  </>
</div>
  )
}
export default About