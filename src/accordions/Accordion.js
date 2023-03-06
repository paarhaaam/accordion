import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Accordion = ({ value , FQD , FQK}) => {
  const [open, setOpen] = useState(false);
  const openHandler = (questionNum) => {
    if (open === questionNum) {
      return setOpen(null);
    }
    setOpen(questionNum);
  };


  let filterFQ = [];
  if (value === "daneshjo") {
    filterFQ = FQD.filter((item) => item.questionNum < 5);
  }
  if (value === "karfarma") {
    filterFQ = FQK.filter((item) => item.questionNum > 4);
  }

  return (
    <div className="flex justify-center">
      <div className="absolute w-[50%] mt-8  max-[600px]:w-full">
        {filterFQ.map((item) => {
          return (
            <div key={item.questionNum}
              className={`flex flex-col   h-16 ${
                open === item.questionNum ? "h-32" : ""
              } ${
                open === item.questionNum ? "mb-8" : ""
              } 
              transition-all ease-linear  duration-700 `}
            >
              <div
                className="py-4 border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 select-none cursor-pointer mb-4 "
                onClick={() => openHandler(item.questionNum)}
                
              >
                <div className="flex justify-between mx-4">
                  <FaArrowCircleDown
                    className={`text-2xl  ${
                      open === item.questionNum ? "rotate-180 " : ""
                    }`}
                  />
                  <p className="text-xl ">{item.title}</p>
                </div>

                <p
                  className={`text-md  pt-6 pl-4 pr-4 rightJustify ${
                    open === item.questionNum ? "" : "hidden"
                  }    text-white`}
                >
                  {item.text}
                </p>

                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
