import React, { useState } from 'react'
import arrow from '../accordions/downArrow.png'

const Accordion = ({ value }) => {
    console.log(value)
    const [open , setOpen]=useState(false)
    const openHandler = index =>{
       if(open === index ){
        return setOpen(null)
       }
        setOpen(index)
        console.log(index)
    }
    console.log(open)
    const FQ = [{
        id: 1, title: "سوالات متداول دانشجویان 1",
        text: " 1 جواب سوال"
    },
    {
        id: 1, title: "سوالات متداول دانشجویان 2",
        text: "2 جواب سوال"
    },
    {
        id: 1, title: "سوالات متداول دانشجویان 3",
        text: "3 جواب سوال"
    },
    {
        id: 1, title: "سوالات متداول دانشجویان 4",
        text: "4 جواب سوال"
    },

    {
        id: 2, title: "سوال های متداول کارفرمایان 1",
        text: "1 جواب سوال"
    },
    {
        id: 2, title: "سوال های متداول کارفرمایان 2",
        text: "2 جواب سوال"
    },
    {
        id: 2, title: "سوال های متداول کارفرمایان 3",
        text: "3 جواب سوال"
    },
    {
        id: 2, title: "سوال های متداول کارفرمایان 4",
        text: "4 جواب سوال"
    },]
    let filterFQ = []
    if (value === "daneshjo") {
        filterFQ = FQ.filter((item) => item.id === 1)

    } if (value === "karfarma") {
        filterFQ = FQ.filter((item) => item.id === 2)
    }
    

    return (
        <div className='ml-[30%] mt-24 w-[30%] '>
            {filterFQ.map((item , index) => {
                return <div className='border bg-zinc-200 select-none cursor-pointer mb-4 ' onClick={()=>openHandler(index)} key={Math.random()} >
                    <div className='flex justify-between mx-4'>
                        <img className={`w-6 ${open===index? "rotate-180 " : ""}`} src={arrow} />
                        <p className='text-xl '>{item.title}</p>



                    </div>

             <div className={`w-full  h-24  pr-4  ${open===index? "" : "hidden"} `}>
                        <p className=' text-md pt-6 text-right '>{item.text}</p>
                    </div>
           


                </div>

            })}
        </div>
    )
}

export default Accordion