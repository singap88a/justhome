import React from 'react'

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-16">
       <div className="bg-[#E7C873] rounded-full w-12 h-12 flex items-center justify-center mb-6">
         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 20L21 12L3 4V10L17 12L3 14V20Z" fill="#1F4B43"/>
        </svg>
      </div>
       <h2 className="mb-2 text-3xl font-semibold text-center">Stay Up to Date</h2>
       <p className="mb-8 text-sm text-center text-gray-600">Subscribe to our newsletter to receive our weekly feed.</p>
       <form className="flex w-full max-w-xl overflow-hidden bg-white border border-gray-200 rounded-full shadow-sm">
        <input
          type="email"
          placeholder="Your e-mail"
          className="flex-1 px-6 py-4 text-sm bg-transparent outline-none"
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
        >
          Send
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </form>
    </div>
  )
}
