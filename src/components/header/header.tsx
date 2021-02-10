import React from 'react'

export const Header = () => {
  return (
    <div className="flex gap-8 items-center px-4">
      <div className="w-5/12">
        <div className="rounded-full overflow-hidden border-white border-solid border-8 shadow-xl">
          <img
            src="https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/cesar-rincon-1024x1024.jpg"
            alt="Alex Smith"
          />
        </div>
      </div>
      <div className="w-7/12">
        <span className="text-sm mb-4 text-gray-400">Frontend-developer</span>
        <h1 className="text-3xl mb-4 font-black text-gray-700">Alex Smith</h1>
        <p className="text-sm mb-4">
          Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
          convallis, risus non condimentum gravida, odio mauris ullamcorper
          felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
          placerat sapien pretium eu.
        </p>
        <a
          href=""
          className="border-2 mr-2 shadow-lg rounded-3xl p-2 px-6 bg-white inline-block border-green-700 hover:bg-green-700 hover:text-white"
        >
          Download CV
        </a>
        <a
          href=""
          className="border-2 shadow-lg rounded-3xl p-2 px-6 bg-white inline-block border-gray-700 hover:bg-gray-700"
        >
          Contact
        </a>
      </div>
    </div>
  )
}
