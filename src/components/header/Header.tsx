import React from 'react'

export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 md:flex-row">
      <div className="flex justify-center w-full md:w-5/12">
        <div className="overflow-hidden border-8 border-white border-solid rounded-full shadow-xl max-w-[200px] lg:max-w-[400px]">
          <img
            src="https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/cesar-rincon-1024x1024.jpg"
            alt="Alex Smith"
          />
        </div>
      </div>
      <div className="w-full text-center md:w-7/12 md:text-left">
        <span className="mb-4 text-sm text-gray-400">Frontend-developer</span>
        <h1 className="mb-4 text-3xl font-black text-gray-700">Alex Smith</h1>
        <p className="mb-4 text-sm">
          Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
          convallis, risus non condimentum gravida, odio mauris ullamcorper
          felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
          placerat sapien pretium eu.
        </p>
        <a
          href=""
          className="inline-block p-2 px-6 mr-2 bg-white border-2 border-green-700 shadow-lg rounded-3xl hover:bg-green-700 hover:text-white"
        >
          Download CV
        </a>
        <a
          href=""
          className="inline-block p-2 px-6 bg-white border-2 border-gray-700 shadow-lg rounded-3xl hover:bg-gray-700"
        >
          Contact
        </a>
      </div>
    </div>
  )
}
