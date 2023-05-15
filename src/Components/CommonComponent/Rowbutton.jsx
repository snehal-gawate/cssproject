import React from "react";

export const Rowbutton=(props)=>{
 
  const { value,id, handleSelect,selectedId,selectedButton,category } = props;
  console.log(id,selectedId,"selected")
    return(

        <>
        <button
         id={"buttonA"} style=
        {{
          width: value?.width,
          marginLeft: "4vh",
          fontSize: 16,
          height: id==selectedId&& value?.height,
          width:"10vh",
          padding:id==selectedId&&value?.padding,
          margin:id==selectedId&&value?.margin,
          width:id==selectedId&&value?.width,
          border:id==selectedId&& selectedButton=="buttonA"&& category=="secondary"&&"3px solid red",
        }}
        onClick={()=>handleSelect(id,"buttonA")}
        >Button</button>
        
        <div style={{marginLeft:"4vh"}}>
         <button
          id={"buttonB"} style=
         {{marginLeft:'3vh',
          fontSize: 16,
          width:"10vh",
          height:"6vh",
          height: id==selectedId&&value?.height,
          padding:id==selectedId&&value?.padding,
          margin:id==selectedId&&value?.margin,
          width:id==selectedId&&value?.width,
          border:id==selectedId&& selectedButton=="buttonB"&&category=="secondary"&&"3px solid red",
         display:"flex",
         flexDirection:"row",
         paddingTop:"1vh",
         fontSize:16}}
         onClick={()=>handleSelect(id,"buttonB")}
     
         >

     <div class="star">
     <svg viewBox="0 0 24 24">
      <path fill="none" stroke="#000" stroke-width="2"
       d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 17 L6 21 L7 14 L2 9 L9 8 z"/>
      </svg>
     </div>

      <p style={{marginTop:'-0px',
        marginLeft:'4px'}}
        > Button </p></button></div>

<div
 id={"buttonC"} style={{marginLeft:"4vh"}}>
       <button style={{
      
        marginLeft:'3vh',
        marginLeft: "4vh",
        fontSize: 16,
        height: id==selectedId&&value?.height,
        padding:id==selectedId&&value?.padding,
        margin:id==selectedId&&value?.margin,
        width:id==selectedId&&value?.width,
        border:id==selectedId&& selectedButton=="buttonC"&&category=="secondary"&&"3px solid red",
       
    }}
      onClick={()=>handleSelect(id,"buttonC")}
        >

     <div class="star">
     <svg viewBox="0 0 24 24">
<     path fill="none" stroke="#000" stroke-width="2"
      d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 17 L6 21 L7 14 L2 9 L9 8 z"/>
     </svg>
     </div>
    </button>
    </div>
        </>
    )
}