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
          <h3 onClick={() => setShow(true)} className="text-black"><u className="cursor-pointer">Developer Information</u></h3>
        </div>
      </div>
      {show && (
        <div className="fixed inset-0 bg-black/30 rounded-3xl flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center  w-[85%]">
            <h2 className="text-2xl font-bold mb-2 text-center text-green-700">DEVELOPER INFORMATION</h2>

            {items.map((item, index) => (<div key={index}><p className="text-gray-700 mb-2">{item.title} <span className="text-green-700">{item.name}</span> <span> <span>{item.age_text_1}</span> <span className="text-green-700">{item.age}</span> <span>{item.age_text_2}</span></span></p></div>))}



            <button
              className="px-6 py-2 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition-all"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default DevIn;
