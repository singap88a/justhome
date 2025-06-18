import React from 'react'

export default function Streamline_your_search() {
  return (
    <div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-10">
        <div className="bg-[#1F4B43] w-full rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-10 gap-4">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">Streamline Your Search</h1>
                    <p className="text-base sm:text-lg text-white">Find your dream home with ease</p>
                </div>
                <div className="w-full sm:w-auto">
                     <button className='w-full sm:w-auto px-4 py-2 text-black rounded-md bg-[#E7C873] hover:bg-[#d4b562] transition-colors duration-300 flex items-center justify-center gap-2 group'>
                        Sign in or create an account
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                     </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
