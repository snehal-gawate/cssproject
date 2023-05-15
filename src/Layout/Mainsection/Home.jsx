import React, { useContext,useState } from 'react';
import MyDiv from '../../Input/MyDiv';
import { ColorContext } from '../../Components/Context/ColorContext';
import { Appbar } from '../../Layout/Appbar';
import {  Secondary } from './Secondary';
import { Primary } from './Primary';
import Livepreview from '../Livepreview';


export  function Home({value}) {

  const { color } = useContext(ColorContext);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedButton,setSelectedButton]=useState(null)
  const [cat,setCat]=useState(null)
  
    const handleSelect = (id,buttonName,category) => {
      setSelectedId(id);
      setSelectedButton(buttonName)
      setCat(category)
    };
  

  return (
    <div>
        <Appbar/>
        <hr/>
        <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:'10vh',
        backgroundColor:'lightgrey',
        height:'90vh',
        marginTop:'-1.2vh'}}></div>
           
       <Secondary category={cat} value={value} height={value?.height} width={value?.width} 
       padding={value?.padding} margin={value?.margin} handleSelect={handleSelect}
       
       />
      
    
      <Primary category={cat} value={value} height={value?.height} width={value?.width}
       padding={value?.padding} margin={value?.margin} handleSelect={handleSelect}/>
     
  
      <div style={{width:'10vh',
        backgroundColor:'lightgrey',
        height:'90vh',
        marginTop:'-1.2vh'}}></div>
       
      </div>

      <hr style={{marginTop:'-1px'}}/>
      <Livepreview
      backgroundColor={color}
      value={value}
       id={2}
       handleSelect={handleSelect}
  selectedId={selectedId}
  selectedButton={selectedButton}/>
    </div>
  );
}

