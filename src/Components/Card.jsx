import React from "react";

function Card() {
  return (
    <>
      <div className="mt-3 flex justify-evenly flex-wrap flex-col md:flex-row">
        <div className="max-w-sm mx-auto bg-slate-800 text-white rounded-xl overflow-hidden text-center mt-2">
            <div>
              <img
                className="object-cover h-48 w-full"
                src="./src/assets/images/img1.jpg"
                alt="card img"
              />
            </div>
            <div className="p-3">
              <p className="font-bold uppercase tracking-wide">Gym Name</p>
              <p className="text-grey-200 font-semibold mt-1">Short Description about the gym</p>
              <div className="font-bold w-full text-center hover:text-blue-500 cursor-pointer">
                See Details
              </div>
            </div>
          </div>
        <div className="max-w-sm mx-auto bg-slate-800 text-white rounded-xl overflow-hidden text-center mt-2">
            <div>
              <img
                className="object-cover h-48 w-full"
                src="./src/assets/images/img1.jpg"
                alt="card img"
              />
            </div>
            <div className="p-3">
              <p className="font-bold uppercase tracking-wide">Gym Name</p>
              <p className="text-grey-200 font-semibold mt-1">Short Description about the gym</p>
              <div className="font-bold w-full text-center hover:text-blue-500 cursor-pointer">
                See Details
              </div>
            </div>
          </div>
        <div className="max-w-sm mx-auto bg-slate-800 text-white rounded-xl overflow-hidden text-center mt-2">
            <div>
              <img
                className="object-cover h-48 w-full"
                src="./src/assets/images/img1.jpg"
                alt="card img"
              />
            </div>
            <div className="p-3">
              <p className="font-bold uppercase tracking-wide">Gym Name</p>
              <p className="text-grey-200 font-semibold mt-1">Short Description about the gym</p>
              <div className="font-bold w-full text-center hover:text-blue-500 cursor-pointer">
                See Details
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Card;
