import { Route, Routes } from "react-router-dom";
import Accordion from "./accordions/Accordion";
import Form from "./Form";
import Karfarma from './Karfarma';
import Daneshjoo from "./Daneshjoo";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<h1 className="text-center text-2xl">لطفا یک گزینه را انتخاب کنید</h1>}/>
        <Route path="/karfarma" element={<Karfarma/>}/>
        <Route path="/daneshjo"  element={<Daneshjoo/>}/>
      </Routes>
      <header className="App-header">
        <Form/>
       
        
      </header>
    </div>
  );
}

export default App;
