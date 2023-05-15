import React,{useContext, useState}from 'react';

const  Livepreview=(props)=> {
  const { value,id, handleSelect,selectedId, selectedButton} = props;
  console.log(id,selectedId,"selected")
 console.log(value.margin,"mar")
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
  { selectedButton=="buttonA"&&  <button
    id={"buttonA"}
     style={{ backgroundColor: props.backgroundColor,position:'relative' 
    ,width:"10vh",marginLeft:'3vh',color:'white',paddingTop:'1vh', 
    height: value?.height,
    padding:value?.padding,
    margin:value?.margin||"4px",
    width:value?.width,
    border:id==selectedId&& selectedButton=="buttonA"&&"3px solid red",
  }}
  onClick={()=>handleSelect(id,"buttonA")}>
   Button
  </button>}
  { selectedButton=="buttonB"
  &&  
<button
 id={"buttonB"}
style={{ backgroundColor: props.backgroundColor,
              position:'relative' ,
              color:'white',
              paddingTop:'1vh',
              display:"flex",
              flexDirection:"row",
              height: value?.height,
              padding:value?.padding,
              margin:value?.margin||"4px",
              width:value?.width,
              border:id==selectedId&& selectedButton=="buttonB"&&"3px solid red",
             marginLeft:'3vh',
              width:"12vh"
              }}onClick={()=>handleSelect(id,"buttonB")}
            >
        <div class="star"
          style={{marginLeft:"4px"}}>
          <svg viewBox="0 0 24 24">
          <path fill="none" stroke="#fff" stroke-width="2" d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 17 L6 21 L7 14 L2 9 L9 8 z"/>
          </svg>
         </div>
  
          <p style={{marginTop:'-0px',marginLeft:"1px",fontSize:16}}>
          Button
          </p>
          </button>}

          { selectedButton=="buttonC"&&  
          <button 
          id={"buttonC"}
          style={{ backgroundColor: props.backgroundColor,
        position:'relative' ,
        color:'white',
        paddingTop:'1vh',
        display:"flex",
        height: value?.height,
        padding:value?.padding,
        margin:value?.margin||"4px",
        width:value?.width,
       flexDirection:"row",
        marginLeft:'3vh',
        width:"6vh"
      }}onClick={()=>handleSelect(id,"buttonC")}
       ><div class="star"
        style={{marginLeft:"0.5vh",marginTop:'3px'}}>
        <svg viewBox="0 0 24 24">
        <path fill="none" stroke="#fff" stroke-width="2" d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 17 L6 21 L7 14 L2 9 L9 8 z"/>
        </svg>
       </div>
    </button>}
          </div>
  );
}

export default Livepreview;

