import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import Accordion from './accordions/Accordion';


const Form = () => {
    const [value, setValue] = useState("sfgf");
const navigate = useNavigate()
    const handleChange = (e) => {
      setValue(e.target.value);
      navigate(`${e.target.value}`)
    };
  
 
    
  return (
    <div className=' mb-8 static w-full mt-4  '>
        <form className='w-full flex justify-center  mt-12' >
            
           
            <select className=' border-indigo-500 border-2 text-center selection:border-indigo-500 '  onChange={handleChange}>
            <option className='select-none'   hidden  value>انتخاب کنید</option>
            <option  value="daneshjo">دانشجو</option>
            <option value="karfarma">کارفرما</option>
            
            </select>
        </form>

        
       
             <Accordion value={value}/>
  </div>
  )
}

export default Form