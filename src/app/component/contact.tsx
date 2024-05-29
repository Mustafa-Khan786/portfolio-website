import React from 'react'

 const Contact = () => {
  return (
    <div id ="contact">
    <>
    <section className="text-black body-font relative">
      <div className="absolute inset-0 bg-white ">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28938.455234693174!2d66.97759988545478!3d24.955670787179322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340022903e5bb%3A0x79733cf7677ab50c!2s5%20no.%20Chorangi%20Bus%20Stop!5e0!3m2!1sen!2s!4v1716716735303!5m2!1sen!2s" 
        />
        </div>
        <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-red-600 tracking-widest text-xs font-def">
                  ADDRESS
                </h2>
                <p className="mt-1 text-gray-300">
                  Orangi Town 5 Number Near Alkhidmat Hospital
                  </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-red-600 tracking-widest text-xs font-def">
                  EMAIL
                </h2>
                <a className="text-gray-300 leading-relaxed">
                  mustafa0986447@gmail.com
                </a>
                <h2 className="title-font font-semibold text-red-600 tracking-widest text-xs mt-4 font-def">
                  PHONE
                </h2>
                <p className="leading-relaxed text-gray-300">
                  +92 3162554617
                  </p>
              </div>
            </div>
          
      
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="title-font bold:text-color-pink-500 text-3xl mb-4 font-medium text-red-700">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-red-700">
            Feel free to conect
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 font bold:text-color-pink-500 text-red-700">
              Name
            </label>
            <input
              type="Name"
              id="Number"
              name="sting"
              className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-red-700">
            Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
      
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-red-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-black bg-red-500 border-0   border-black  py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
            Send message
          </button>
          <p className="text-xs text-black mt-3">
            
          </p>
        </div>
      </div>
    </section>
  </>
  </div>
  )
  }
export default Contact
