import logo from'./logo.svg';
import './App.css';
import React from 'react';
import { Routes,Route} from 'react-router-dom'

import Home from './components/Home';
import Employee from './components/Employee';

function App() {
  return ( 
  
      <div>
      
    


        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employeeform' element={<Employee Form />} />
      </Routes>
        
        
        </div>
    
   
  );
}

export default App;
