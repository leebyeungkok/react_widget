
import Input from './components/widgets/Input';
import React, {useState} from 'react';

import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import AppRoutes from './Router';
function App() {


  return(

    <div>
      <BrowserRouter>
      <div className="tab"> {/** NaviLink isActive까지 설명 */}
        <NavLink className="tablinks" style={({isActive})=>({color:isActive ? '#00f':'#0000ff'})} to="./pages/InputTest">InputTest</NavLink>&nbsp;
        <NavLink className="tablinks" style={({isActive})=>({color:isActive ? '#00f':'#0000ff'})} to="./pages/SelectTest">SelectTest</NavLink>&nbsp;
        <NavLink className="tablinks" style={({isActive})=>({color:isActive ? '#00f':'#0000ff'})} to="./pages/CheckboxGroupTest">CheckboxGroupTest</NavLink>&nbsp;
        <NavLink className="tablinks" style={({isActive})=>({color:isActive ? '#00f':'#0000ff'})} to="./pages/TableTest">TableTest</NavLink>&nbsp;
        <NavLink className="tablinks" style={({isActive})=>({color:isActive ? '#00f':'#0000ff'})} to="./pages/TreeTest">TreeTest</NavLink>&nbsp;
        
        
      </div>
        <Routes>
          {AppRoutes.map(route=>{
            return(
              <Route key={route.path} path={route.path} element={route.element} />
            )
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App;
