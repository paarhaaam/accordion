import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Accordion = ({ value }) => {
  const [open, setOpen] = useState(false);
  const openHandler = (questionNum) => {
    if (open === questionNum) {
      return setOpen(null);
    }
    setOpen(questionNum);
  };

  const FQD = [
    {
      id: 1,
      questionNum: 1,
      title: "سوالات متداول دانشجویان 1",
      text: " 1 جواب سوال",
    },
    {
      id: 1,
      questionNum: 2,
      title: "سوالات متداول دانشجویان 2",
      text: "2 جواب سوال",
    },
    {
      id: 1,
      questionNum: 3,
      title: "سوالات متداول دانشجویان 3",
      text: "3 جواب سوال",
    },
    {
      id: 1,
      questionNum: 4,
      title: "سوالات متداول دانشجویان 4",
      text: "4 جواب سوال",
    },
  ];
  const FQK = [
    {
      id: 2,
      questionNum: 5,
      title: "سوال های متداول کارفرمایان 1",
      text: "1 جواب سوال",
    },
    {
      id: 2,
      questionNum: 6,
      title: "سوال های متداول کارفرمایان 2",
      text: "2 جواب سوال",
    },
    {
      id: 2,
      questionNum: 7,
      title: "سوال های متداول کارفرمایان 3",
      text: "3 جواب سوال",
    },
    {
      id: 2,
      questionNum: 8,
      title: "سوال های متداول کارفرمایان 4",
      text: "4 جواب سوال",
    },
  ];
  let filterFQ = [];
  if (value === "daneshjo") {
    filterFQ = FQD.filter((item) => item.id === 1);
  }
  if (value === "karfarma") {
    filterFQ = FQK.filter((item) => item.id === 2);
  }

  return (
    <div className="flex justify-center">
      <div className="absolute w-[50%] mt-8  max-[600px]:w-full">
        {filterFQ.map((item) => {
          return (
            <div
              className={`flex flex-col m-auto  h-16 ${
                open === item.questionNum ? "h-32" : ""
              } ${
                open === item.questionNum ? "mb-4" : ""
              } transition-all ease-linear  duration-700 `}
            >
              <div
                className="py-4 border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 select-none cursor-pointer mb-4 "
                onClick={() => openHandler(item.questionNum)}
                key={Math.random()}
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
                  className={`text-md pt-6 pl-4 pr-4 rightJustify ${
                    open === item.questionNum ? "" : "hidden"
                  }    text-white`}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
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
