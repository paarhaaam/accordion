import React, { useState } from 'react'
import arrow from '../accordions/downArrow.png'

const Accordion = ({ value }) => {
    console.log(value)
    const [open , setOpen]=useState(false)
    const openHandler = questionNum =>{
       if(open === questionNum ){
        return setOpen(null)
       }
        setOpen(questionNum)
        
    }
    console.log(open)
    const FQD = [{
        id: 1,
        questionNum:1,
         title: "سوالات متداول دانشجویان 1",
        text: " 1 جواب سوال"
    },
    {
        id: 1, questionNum:2,
         title: "سوالات متداول دانشجویان 2",
        text: "2 جواب سوال"
    },
    {
        id: 1, questionNum:3,
         title: "سوالات متداول دانشجویان 3",
        text: "3 جواب سوال"
    },
    {
        id: 1, questionNum:4,
         title: "سوالات متداول دانشجویان 4",
        text: "4 جواب سوال"
    }]
    const FQK = [  
    {
        id: 2, questionNum:5, title: "سوال های متداول کارفرمایان 1",
        text: "1 جواب سوال"
    },
    {
        id: 2, questionNum:6, title: "سوال های متداول کارفرمایان 2",
        text: "2 جواب سوال"
    },
    {
        id: 2, questionNum:7, title: "سوال های متداول کارفرمایان 3",
        text: "3 جواب سوال"
    },
    {
        id: 2, questionNum:8, title: "سوال های متداول کارفرمایان 4",
        text: "4 جواب سوال"
    },]
    let filterFQ = []
    if (value === "daneshjo") {
        filterFQ = FQD.filter((item) => item.id === 1)

    } if (value === "karfarma") {
        filterFQ = FQK.filter((item) => item.id === 2)
    }
    

    return (
        <div className='absolute w-[50%] mt-8 ml-[20%]'>
            {filterFQ.map((item ) => {
                return <div className='border bg-zinc-200 select-none cursor-pointer mb-4 ' onClick={()=>openHandler(item.questionNum)} key={Math.random()} >
                    <div className='flex justify-between mx-4'>
                        <img className={`w-6 ${open===item.questionNum? "rotate-180 " : ""}`} src={arrow} />
                        <p className='text-xl '>{item.title}</p>



                    </div>

             <div className={`w-full  h-24  pr-4  ${open===item.questionNum? "" : "hidden"} `}>
                        <p className=' text-md pt-6 text-right '>{item.text}</p>
                    </div>
           


                </div>

            })}
        </div>
    )
}

export default Accordion