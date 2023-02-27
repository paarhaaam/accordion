import React, { useState } from 'react'
import Accordion from './accordions/Accordion';

const Form = () => {
    const [value, setValue] = useState();

    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    
  return (
    <div>
        <form className='border w-fit' >
            
           
            <select  onChange={handleChange}>
            <option >انتخاب کنید</option>
            <option value="daneshjo">دانشجو</option>
            <option value="karfarma">کارفرما</option>
            
            </select>
        </form>

        <Accordion value={value}/>
    
  </div>
  )
}

export default Form