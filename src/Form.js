import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Accordion from './accordions/Accordion';
import arrow from './accordions/downArrow.png'

const Form = () => {
    const [value, setValue] = useState("sfgf");
const navigate = useNavigate()
    const handleChange = (e) => {
      setValue(e.target.value);
      navigate(`${e.target.value}`)
    };
  
 
    
  return (
    <div>
        <form className='border w-fit' >
            
           
            <select  onChange={handleChange}>
            <option className='select-none' selected disabled hidden value="">انتخاب کنید</option>
            <option  value="daneshjo">دانشجو</option>
            <option value="karfarma">کارفرما</option>
            
            </select>
        </form>

        
       
             <Accordion value={value}/>
  </div>
  )
}

export default Form