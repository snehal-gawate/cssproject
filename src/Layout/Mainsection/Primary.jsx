import React, { useContext } from "react";
import MyDiv from '../../Input/MyDiv';
import { ColorContext } from '../../Components/Context/ColorContext';
import { useState } from "react";
export const Primary=(props)=>{

    const { color } = useContext(ColorContext);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedButton,setSelectedButton]=useState(null);

    const handleSelect = (id,buttonName) => {
      setSelectedId(id);
      setSelectedButton(buttonName)
      props.handleSelect(id,buttonName,"primary")
    };
  
  
    return(
        <>
        <div style={{width:'50vh',marginTop:'-1.1vh',marginLeft:'11.5vh'}}>
        <p>SOLID/Primary</p>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"3vh"}}
       >
            <p style={{fontSize:18}}>Normal</p>   
        <MyDiv
        id={7}
        value={props.value}
        category={props.category}
        backgroundColor={color}
        handleSelect={handleSelect}
        selectedId={selectedId}
        selectedButton={selectedButton}
    />
      
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"3vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Hover</p>
            <MyDiv backgroundColor={color}
            value={props.value}
             id={8}
             handleSelect={handleSelect}
             category={props.category}
        selectedId={selectedId}
        selectedButton={selectedButton}
              />
          
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"3vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Active</p>
            <MyDiv backgroundColor={color} 
            value={props.value}
             id={9}
             category={props.category}
             handleSelect={handleSelect}
        selectedId={selectedId}
        selectedButton={selectedButton}
             />
          
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"1.5vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Selected</p>
            <MyDiv backgroundColor={color}
            value={props.value}
             id={10}
             category={props.category}
             handleSelect={handleSelect}
        selectedId={selectedId}
        selectedButton={selectedButton}
              />
         
        </div>
       
        <div style={{display:"flex",flexDirection:"row",marginLeft:"1.5vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Focused</p>
            <MyDiv backgroundColor={color} 
            value={props.value}
             id={11}
             category={props.category}
             handleSelect={handleSelect}
             selectedId={selectedId}
             selectedButton={selectedButton}
          />
           
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"1.5vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Disabled</p>
            <MyDiv 
            backgroundColor={color} 
             id={12}
             value={props.value}
             category={props.category}
             handleSelect={handleSelect}
             selectedId={selectedId}
             selectedButton={selectedButton}
             />
          
        </div>
</div>
        </>
    )
}