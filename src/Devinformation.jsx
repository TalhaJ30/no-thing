import React, { useState } from "react";
const DevIn = () => {
  const [show, setShow] = useState(false);
  const items = [
    {
      title: "This Applcation is Developed by",
      name: "Abdul Raffay"
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
            {items.map((item, index) => (<div key={index}><p className="text-gray-700 mb-4">{item.title} <span className="text-green-700">{item.name}</span></p></div>))}

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
