import React, { useState } from "react";
import DevIn from "./Devinformation.jsx"
function App() {
  const [showModal, setShowModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const display = () => {
    setShowModal(true);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-purple-800 via-pink-500 to-yellow-400 animate-gradient-x">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 flex flex-col items-center gap-6 sm:gap-8 max-w-xs sm:max-w-md md:max-w-lg w-full mx-2 sm:mx-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-pink-200/40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white drop-shadow-lg mb-2 animate-bounce">Nothing</h1>
        <p className="text-white/80 text-base sm:text-lg mb-4 italic text-center">Welcome to the most unuseful app ever made.</p>
        <button
          className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-white/20 text-white font-normal shadow hover:bg-white/30 hover:scale-105 hover:-rotate-1 hover:shadow-pink-300/40 transition-all duration-300 outline-none focus:ring-2 focus:ring-pink-400 active:scale-95"
          onClick={display}
        >
          Do Nothing
        </button>
        <div className="w-full flex flex-col items-center gap-2">
          <label className="text-white/70">Useless Slider</label>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={() => setSliderValue(50)}
            className="w-32 sm:w-48 accent-pink-400 cursor-not-allowed opacity-60"
            disabled
          />
        </div>
        <div className="flex gap-2 sm:gap-4 mt-4 flex-wrap justify-center items-center">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-pink-400/30 text-white font-normal shadow hover:bg-pink-400/50 hover:scale-105 hover:shadow-pink-200/40 transition-all duration-300 cursor-not-allowed" disabled>
            Pointless
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-yellow-400/30 text-white font-normal shadow hover:bg-yellow-400/50 hover:scale-105 hover:shadow-yellow-200/40 transition-all duration-300 cursor-not-allowed" disabled>
            Meaningless
          </button>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white/40 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
              className="opacity-30"
              stroke="currentColor"
            />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              strokeWidth="4"
              className="opacity-80"
              stroke="currentColor"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          <span className="text-white/60 text-xs mt-2 animate-pulse">Loading nothing...</span>
        </div>
        <div>
          <DevIn />
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-2 sm:px-0">
          <div className="bg-white/90 rounded-2xl p-4 sm:p-8 shadow-xl flex flex-col items-center w-full max-w-xs sm:max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-pink-600">You did nothing!</h2>
            <p className="text-gray-700 mb-4 text-center">Congratulations, your action was as unuseful as this app.</p>
            <button
              className="px-4 sm:px-6 py-2 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-600 hover:scale-105 hover:shadow-pink-200/40 transition-all active:scale-95"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
