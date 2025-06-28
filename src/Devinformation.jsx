import React, { useState, useEffect } from "react";

const DevIn = () => {
  const [show, setShow] = useState(false);
  const [currentAge, setCurrentAge] = useState(0);

  // Function to calculate age based on birth year
  const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  // Update age every year automatically
  useEffect(() => {
    // Set birth year (assuming Abdul Raffay was born in 2014 to be 10 years old in 2024)
    const birthYear = 2014;
    const age = calculateAge(birthYear);
    setCurrentAge(age);

    // Update age every year on January 1st
    const updateAge = () => {
      const newAge = calculateAge(birthYear);
      setCurrentAge(newAge);
    };

    // Check if it's a new year and update age
    const checkNewYear = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const lastUpdateYear = localStorage.getItem('lastAgeUpdate') || currentYear;

      if (currentYear > lastUpdateYear) {
        updateAge();
        localStorage.setItem('lastAgeUpdate', currentYear);
      }
    };

    // Check immediately
    checkNewYear();

    // Set up interval to check daily (in case the app runs for a long time)
    const interval = setInterval(checkNewYear, 24 * 60 * 60 * 1000); // Check every 24 hours

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      title: "This Application is Developed by",
      name: "Abdul Raffay"
    },
    {
      title: "The age of",
      name: "Abdul Raffay",
      age_text_1: "is",
      age: `${currentAge}`,
      age_text_2: "Years Old",

    },
  ]

  return (
    <>
      <div>
        <div>
          <h3>
            <u
              onClick={() => setShow(true)}
              className="cursor-pointer text-black transition-all duration-300 hover:text-green-700 hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-green-400 px-1 rounded"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShow(true); }}
            >
              Developer Information
            </u>
          </h3>
        </div>
      </div>
      {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2 sm:px-0">
          <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-2xl flex flex-col items-center w-full max-w-xs sm:max-w-md animate-fade-in">
            <h2 className="text-lg sm:text-2xl font-bold mb-2 text-center text-green-700 tracking-wide">DEVELOPER INFORMATION</h2>
            <div className="w-full flex flex-col gap-2 mb-4">
              {items.map((item, index) => (
                <div key={index}>
                  <p className="text-gray-700 text-sm sm:text-base text-start">
                    {item.title} <span className="text-green-700 font-semibold">{item.name}</span>
                    {item.age && (
                      <span> <span>{item.age_text_1}</span> <span className="text-green-700 font-semibold">{item.age}</span> <span>{item.age_text_2}</span></span>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="px-4 sm:px-6 py-2 rounded-full bg-green-500 text-white font-bold shadow hover:bg-green-600 hover:scale-105 hover:shadow-green-200/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 active:scale-95"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
          <style>{`
            .animate-fade-in {
              animation: fadeIn 0.4s cubic-bezier(0.4,0,0.2,1);
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.96); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </>
  )
}

export default DevIn;
