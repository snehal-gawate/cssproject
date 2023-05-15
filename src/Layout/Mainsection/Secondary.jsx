import React, { useContext,useState } from "react";
import MyDiv from '../../Input/MyDiv';
import { Rowbutton } from '../../Components/CommonComponent/Rowbutton';
import { ColorContext } from '../../Components/Context/ColorContext';

export const Secondary=(props)=>{
    const { color } = useContext(ColorContext);

    const [selectedId, setSelectedId] = useState(null);
    const [selectedButton,setSelectedButton]=useState(null)

      const handleSelect = (id,buttonName) => {
        setSelectedId(id);
        setSelectedButton(buttonName)
        props.handleSelect(id,buttonName,"secondary")
      };
    
    return(
        <>
       <div style={{width:'50vh',marginTop:'-1.1vh'}}>
        <p>SOLID/SECONDARY</p>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"3vh"}}>
            <p style={{fontSize:18}}>Normal</p>
            <Rowbutton   
            id={1}
            category={props.category}
            value={props.value}
            backgroundColor={color}
            handleSelect={handleSelect}
            selectedId={selectedId}
            selectedButton={selectedButton}
            />
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"3vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Hover</p>
           <Rowbutton  
            id={2}
            category={props.category}
            value={props.value}
            backgroundColor={color}
            handleSelect={handleSelect}
            selectedId={selectedId}
            selectedButton={selectedButton}/>
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"3vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Active</p>
           <Rowbutton
             id={3}
             category={props.category}
            value={props.value}
            backgroundColor={color}
            handleSelect={handleSelect}
            selectedId={selectedId}
            selectedButton={selectedButton}
           />
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"1.5vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Selected</p>
       <MyDiv backgroundColor={color}
       id={4}
       category={props.category}
               value={props.value}
               handleSelect={handleSelect}
               selectedId={selectedId}
               selectedButton={selectedButton}
               />
        
        </div>
       
        <div style={{display:"flex",flexDirection:"row",marginLeft:"1.5vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Focused</p>
           <Rowbutton
            id={5}
            category={props.category}
            value={props.value}
            backgroundColor={color}
            handleSelect={handleSelect}
            selectedId={selectedId}
             selectedButton={selectedButton}/>
        </div>

        <div style={{display:"flex",flexDirection:"row",marginLeft:"1.5vh",marginTop:'5vh'}}>
            <p style={{fontSize:18}}>Disabled</p>
           <Rowbutton
            id={6}
            category={props.category}
            value={props.value}
            backgroundColor={color}
            handleSelect={handleSelect}
            selectedId={selectedId}
            selectedButton={selectedButton}
           />
        </div>
        </div>
      
        </>
    )
}