const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Discover a place you'll <br /> love to live
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc <br />
          egestas ut metra. Leo diam diam
        </p>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center space-x-2">
          <span>View Properties</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection; 