import React, { useContext } from "react";
import { ColorContext } from '../Components/Context/ColorContext';
import Accordion from "./Accordian";
import common from "./common.css";
import { Chevronlefticon, 
         Colorfillicon,
         Plusicon, 
         Plustypoicon,
          Searchicon }
 from "../Components/CommonComponent/Icons";


const Menulist=[
  {Color:'$kendo-color-primary',Code:'#880e4f'},
  {Color:'$kendo-color-secondary',Code:'#666666'},
  {Color:'$kendo-color-info',Code:'#0058e9'},
  {Color:'$kendo-color-success',Code:'#37b400'},
  {Color:'$kendo-color-warning',Code:'#ffc000'},
  {Color:'$kendo-color-error',Code:'#e0e0e0'},
]

const Menubody=[
  {Color:'$kendo-body-bg',Code:'#ffffff'},
  {Color:'$kendo-body-text',Code:'#424242'},
  {Color:'$kendo-heading-text',Code:'#292929'},
  {Color:'$kendo-subtitle-text',Code:'#666666'},
  {Color:'$kendo-disabled-text',Code:'#8f8f8f'},
  
]

const image=require("../images/downarrow.png")
export const Leftbar=()=>{
  const { color, handleColorChange } = useContext(ColorContext);
  console.log("color", color);

    return(
     <>
    
    <div flex={1} style={{marginLeft:'10px',width:"45vh" }}>
        
    <div  style={{display:"flex",flexDirection:"row"}}>
        <p>THEME STYLES</p>
        <Colorfillicon/>
        <img src={image} height={'10px'} style={{marginTop:"3vh",marginLeft:"1vh"}}/>
    </div>

    <button class="search-button">
        <span class="button-text">
         Search by name or value</span>
        <Searchicon/>
    </button>

<div className="leftbar">
<Accordion
        header={
 <div style={{display:"flex",flexDirection:"row",marginBottom:'-3vh'}}>

      <img src={image} height={'10px'} style={{marginTop:"1vh"}}/>
      <p style={{
        marginLeft:'2vh'
        ,marginTop:'1vh',
        fontSize:18,
        fontWeight:"bold"
        }}>Metrics</p>
      <Plusicon />
</div>}
   content={
 <div style={{display:"flex",flexDirection:"row"}}>
      <button style={{height:"4vh"
                ,width:"4vh",
                marginTop:'3vh'}}
      ></button>
      <p style={{fontSize:15
                ,fontWeight:"bold",
                marginLeft:'1vh'}}
      >$kendo-border-radius</p>

 <p style={{opacity:0.9,
          marginLeft:'1vh'}}>
            4px</p>
 </div>}/>

 <hr/>
 <Accordion
        header={
 <div style={{display:"flex",flexDirection:"row"}}>
 <img src={image} height={'10px'} style={{marginTop:"1vh"}}/>
      <p style={{marginLeft:'1vh',
                fontSize:18,
                marginTop:'1vh',
                fontWeight:"bold"
                }}>Typographies</p>
  <Plustypoicon/>
</div>}
  content={
<div style={{display:"flex",flexDirection:"row"}}>
 <button style={{height:"4vh",
                width:"4vh",
                marginTop:'-1vh'
                }}>Ag</button>
 <p style={{fontSize:15,
  fontWeight:"bold",
  marginLeft:'1vh',
  marginTop:'-1vh'}}
  >$kendo-default-typography</p>
 </div>}/>

 <hr/>

 <Accordion
        header={
 <div style={{display:"flex",flexDirection:"row"}}>
 <img src={image} height={'10px'} style={{marginTop:"1vh"}}/>
      <p style={{marginLeft:'2vh',
                fontSize:18,
                marginTop:'1vh',
                fontWeight:"bold"
                }}>Colors</p>
      <Plusicon />
</div>}
  content={
<>
<p style={{textAlign:"left",marginTop:'-3px'}}>THEME COLORS</p>
<>
 {Menulist.map((item)=>(
       <div style={{display:"flex",flexDirection:"row"}}
                   key={item.Color}>
                  <input type="color"  
                   value={item.Code} 
                   onChange={(e) => handleColorChange(e.target.value)} 
                   className="input"  />
        <p style={{fontSize:15,fontWeight:"bold"}}>{item.Color}</p>
        <p style={{opacity:0.9,marginLeft:'2vh'}}>{item.Code}</p>
       </div>
 ))}
</>

<>
<p style={{textAlign:"left",marginTop:'-3px'}}> Body</p>
{Menubody.map((item)=>(
       <div style={{display:"flex",flexDirection:"row"}}
                  key={item.Color}>
        <input type="color"  
        value={item.Code}  
        onChange={(e) => handleColorChange(e.target.value)} 
       className="input"  />
       
       <p style={{fontSize:15,fontWeight:"bold"}}>{item.Color}</p>
        <p style={{opacity:0.9,marginLeft:'2vh'}}>{item.Code}</p>
       </div>
 ))}
</></>}/>
        
        </div>
        </div>
        <div class="vl"></div>
        </>
    )
}