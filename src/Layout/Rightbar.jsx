import React, { createContext, useContext, useState } from "react";
import { Chevronlefticon, Searchicon } from "../Components/CommonComponent/Icons";
import { ColorContext } from '../Components/Context/ColorContext';
import Accordion from "./Accordian";

export const InputContext = createContext({
  height: "",
  setHeight: () => {},
  width: "",
  setWidth: () => {},
  margin: "",
  setMargin: () => {},
  padding: "",
  setPadding: () => {},
});

export const useInput = () => useContext(InputContext);

const myimage=require("../images/more.png")
const image=require("../images/arrow1.png")
const image2=require("../images/arrow2.png")
const image3=require("../images/paddding.png")
const image4=require("../images/downarrow.png")
const display1=require("../images/display1.png")
const display2=require("../images/display2.png")
const display3=require("../images/display3.png")
const display4=require("../images/display4.png")
const display5=require("../images/display5.png")
const layout=require("../images/layout.png")
const linear=require("../images/linear.png")
const plus=require("../images/plusIcon.png")

export const RightSidebar = ({updatevalues,value}) => {
  const { color, handleColorChange } = useContext(ColorContext);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [margin, setMargin] = useState("");
  const [padding, setPadding] = useState("");

  const updaterightbarvalues=(e)=>{
    let valuesobj={}
    valuesobj[e.target.name]=e.target.value
    updatevalues({...value,...valuesobj})
  }
  return (
    <InputContext.Provider
      value={{
        height,
        setHeight,
        width,
        setWidth,
        margin,
        setMargin,
        padding,
        setPadding,
      }}
    >
      <div style={{display:"flex",flexDirection:"row",textAlign:"left"}}>
      <div class="vl"></div>
      <div><div style={{marginLeft:"2vh"}}><p>COMPONENT PARTS</p>
      <button class="search-button"><span class="button-text">
      Search by name or value</span><Searchicon/></button>
      </div>

    <div style={{display:"flex",flexDirection:"row",
    backgroundColor:"lightblue",marginTop:"8px",height:'4vh'}}>
    <Chevronlefticon style={{marginTop:"-2px"}}/>
    <button style={{color:"blue",borderColor:"blue",
                    marginLeft:"3vh",width:"12vh",
                    borderRadius:"20px",height:"3vh",
                    marginTop:'3px'}} >button</button>
    <p style={{color:"blue",marginLeft:"2vh",marginTop:"-2px"}}>Button</p>
    </div>
   
   <div style={{display:"flex",flexDirection:"row"}}>
   <button style={{marginLeft:"8vh",width:"10vh",
                    borderRadius:"20px",height:"3vh",
                    marginTop:'3px'}} >span</button>
    <p style={{marginLeft:"1vh",marginTop:"-2px"}}>Text
   </p>
   </div>

   <div style={{display:"flex",flexDirection:"row",marginLeft:'2vh'}}>
    <button style={{borderRadius:'50%',width:"3vh",height:"3vh",
    color:"white",backgroundColor:"blue",border:"none",fontWeight:"bold"}}>i</button>
   <p style={{color:"blue",marginLeft:"2vh",marginTop:"-0vh"}}>Button Selected State Hint</p>
   </div>
  <hr/>

<div style={{marginTop:"-2vh"}}><div style={{marginLeft:"2vh"}}>
<p>PROPERTIES</p><div style={{marginTop:"-2vh"}}><button
 class="search-button" ><span class="button-text"> Search properties</span>
<Searchicon/></button></div></div></div>

<Accordion
        header={
    <p style={{fontWeight:"bold",marginLeft:"2vh",marginTop:"-0px", fontSize:18}}>
    <img src={image4} height={'10px'}style={{marginTop:"2vh",marginright:"1vh"}}/> Text
      <img src="https://thumbs.dreamstime.com/z/text-size-vector-line-icon-elements-mobile-concept-web-apps-thin-icons-website-design-development-app-premium-pack-114929230.jpg"
      height={'20px'} width={"20px"} style={{marginLeft:"20vh"}}/>
      </p>}
   content={    
   <>
      <select style={{width:"35vh",height:"4vh",marginLeft:"2vh"}}>
    <option value="volvo">Select Text token</option>
    </select>
   
    <select style={{width:"35vh",height:"4vh",marginLeft:"2vh",marginTop:"6px"}}>
    <option value="volvo">rgb(255,255,255)</option>
    </select></>}/>

    <Accordion
        header={
    <div style={{display:"flex",flexDirection:"row",marginBottom:'-3vh',marginLeft:"2vh"}}>
    <img src={image4} height={'10px'}style={{marginTop:"2vh"}}/> 
    <p style={{marginLeft:'2vh',marginTop:'1vh',
              fontSize:18,fontWeight:"bolder"}}>Background</p>
    <img src={plus}height={'15px'} style={{marginLeft:"14vh"}}/>
  </div>}
 content={
<>
  <div style={{display:"flex",flexDirection:"row",marginTop:"8px",marginLeft:"1vh"}} >
  <img src={linear} height={'35px'} width={'35px'} style={{marginTop:"1px"}}/><div >
  <select style={{width:"30vh",height:"4vh"}}>
    <option value="volvo">Linear-gradiant(rgba 20.21,89)</option>
    </select>
    </div>
    <img src="https://c8.alamy.com/comp/W1WT8R/delete-icon-vector-illustrationuser-interface-outline-W1WT8R.jpg"
    height={'20px'} width={'20px'} style={{marginLeft:'10px'}}/>
</div>

<div style={{display:"flex",flexDirection:"row"}}>
<input type="color"  
        value={color}  
        onChange={(e) => handleColorChange(e.target.value)} 
       className="input" style={{marginLeft:"1vh"}} />
    <select style={{width:"30vh",height:"4vh",marginTop:"3px"}}>
    <option value="volvo">rgb(152,49,177)</option>
    </select>
    <img src="https://c8.alamy.com/comp/W1WT8R/delete-icon-vector-illustrationuser-interface-outline-W1WT8R.jpg"
    height={'20px'} width={'20px'} style={{marginLeft:'8px'}}/>
</div></>}/>

<Accordion
        header={
<div style={{display:"flex",flexDirection:"row",marginBottom:'-3vh',marginLeft:"2vh"}}>
<img src={image4} height={'10px'} style={{marginTop:"2vh"}}/><p style={{marginLeft:'2vh',marginTop:'1vh',
              fontSize:18,fontWeight:"bolder"}}>Size
   <img src={myimage}
   height={'20px'} width={'20px'} style={{marginLeft:"23vh",marginTop:"1px"}}/></p>
  </div>}
 content={
<>
  <div style={{display:"flex",flexDirection:"row",marginTop:'1vh'}}>
    <img src={image}  height={'25px'} width={'25px'}/>
    <select
          type="text"
          name="width"
          placeholder="width"
          value={value?.width}
          onChange={updaterightbarvalues}
          style={{marginLeft:'2vh',width:'30vh'}}
        >
        <option value='20px'>20px</option>
        <option value='40px'>25px</option>
        <option value="60px">30px</option>
        <option value="80px">35px</option>
        </select>
  </div>

  <div style={{display:"flex",flexDirection:"row",marginTop:'1vh'}}>
    <img src={image2}  height={'25px'} width={'25px'}/>
    <select
          type="text"
          name="height"
          placeholder="height"
          value={value?.height}
          onChange={updaterightbarvalues}
          style={{marginLeft:'2vh',width:'30vh'}}
        >
        <option value='20px'>20px</option>
        <option value='40px'>25px</option>
        <option value="60px">30px</option>
        <option value="80px">35px</option>
          </select>
  </div></>}/>

  <hr/>
 
  <Accordion
        header={
  <div style={{display:"flex",flexDirection:"row",marginBottom:'-3vh',marginTop:"1vh",marginLeft:"2vh"}}>
  <img src={image4} height={'10px'}/> <p style={{marginLeft:'2vh',marginTop:'-1vh',
              fontSize:18,fontWeight:"bolder"}}>margin</p></div>}
 content={
  <div style={{display:"flex",flexDirection:"row",marginTop:"1vh",marginLeft:"2vh"}}>
  <img src={image4} height={'10px'}/>
      <select
          type="text"
          name="margin"
          placeholder="margin"
          value={value?.margin}
          onChange={updaterightbarvalues}
          style={{marginLeft:'2vh',width:'30vh',height:"4vh"}}
        >
        <option value='5px'>5px</option>
        <option value='10px'>10px</option>
        <option value="15px">15px</option>
        <option value="20px">20px</option>
        </select>
  </div>}/>
  <hr/>
 
  <Accordion
        header={
  <div style={{display:"flex",flexDirection:"row",marginBottom:'-3vh',marginTop:"1vh",marginLeft:"2vh"}}>
  <img src={image4} height={'10px'}/> <p style={{marginLeft:'2vh',marginTop:'-1vh',
              fontSize:18,fontWeight:"bolder"}}>padding</p>
   <img src={image3}
   height={'25px'} width={'25px'} style={{marginLeft:"19vh"}}/>
  </div>}
    content={
        <select
          type="text"
          name="padding"
          placeholder="padding"
          value={value?.padding}
          onChange={updaterightbarvalues}
          style={{marginLeft:'3vh',width:'30vh',marginTop:"1vh",height:"4vh"}}
        >
        <option value='30px'>30px</option>
        <option value='40px'>40px</option>
        <option value="50px">50px</option>
        <option value="60px">60px</option>
          </select>}/>
   <hr/>    

   <Accordion
        header={
   <div style={{display:"flex",flexDirection:"row",marginLeft:"2vh"}}>
    <img src={image4} height={'10px'}/> <p style={{marginLeft:"4px",fontWeight:"bolder",marginTop:"-2px", fontSize:18}}>
      Layout</p>
     </div>} 
      content={
        <>
     <div style={{marginLeft:"2vh"}}>
     <p style={{marginTop:"-2vh"}}>Display</p>
     <div style={{display:"flex",flexDirection:"row"}}>
      <img src={display1}/>
      <img src={display2} style={{marginLeft:"2px"}} width={'35px'}/>
      <img src={display3} style={{marginLeft:"2px"}} width={'35px'}/>
      <img src={display4}  style={{marginLeft:"2px"}} />
      <img src={display5}  style={{marginLeft:"2px"}} />
     </div>
     </div>
     <div style={{marginLeft:"2vh"}}>
     <p>Direction</p>
     <div style={{display:"flex",flexDirection:"row"}}>
      <button style={{color:"blue",backgroundColor:"lightblue",border:"none",width:"15vh"}}>Row</button>
      <button style={{border:"none",marginLeft:"1vh"}}>column</button>
      <img src={layout}/>
     </div>
     </div></>}/>
    
      </div>
      </div>
    </InputContext.Provider>
  );
};
