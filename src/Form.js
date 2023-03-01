import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
        <form className='ml-[48%] mt-12' >
            
           
            <select className='border'  onChange={handleChange}>
            <option className='select-none'  defaultValue hidden  value="">انتخاب کنید</option>
            <option  value="daneshjo">دانشجو</option>
            <option value="karfarma">کارفرما</option>
            
            </select>
        </form>

        
       
             <Accordion value={value}/>
  </div>
  )
}

export default Form