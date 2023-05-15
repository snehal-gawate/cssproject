import logo from './logo.svg';
import './App.css';
import { Leftbar } from './Layout/Leftbar';
import { ColorProvider } from './Components/Context/ColorContext';
import { Home } from './Layout/Mainsection/Home';
import { RightSidebar}  from './Layout/Rightbar';
import { useState } from 'react';

function App() {
  const[value,SetValue]=useState({});

  const updatevalues=(dynamicvalue)=>{
    SetValue(dynamicvalue);
  }
console.log(value,"value");
  return (
    <div className="App" style={{
      display: 'flex',
    flexDirection:'row',
    height:150+'vh',
    }}>
      <ColorProvider>
      <Leftbar/>
     <Home value={value}/>
     <RightSidebar updatevalues={updatevalues} value={value}/>
      </ColorProvider>
     
    </div>
  );
}

export default App;
