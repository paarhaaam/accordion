import { Route, Routes } from "react-router-dom";
import Form from "./Form";
import Karfarma from './Karfarma';
import Daneshjoo from "./Daneshjoo";


function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route path="/"  element={<h1 className="text-center text-2xl">لطفا یک گزینه را انتخاب کنید</h1>}/>
        <Route path="/karfarma" element={<Karfarma/>}/>
        <Route path="/daneshjo"  element={<Daneshjoo/>}/>
      </Routes>
      
        <Form/>
       
        
      
    </div>
  );
}

export default App;
