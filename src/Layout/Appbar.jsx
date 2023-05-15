import React from "react";

const image=require("../images/BackArrow.png")
export const Appbar=()=>{
    return(
        <div style={{display:"flex",flexDirection:"row",marginTop:'2vh',marginLeft:"2vh"}}>
     <img src={image} height={'15px'}/>
     <p style={{marginLeft:"2vh",marginTop:'-1px',fontSize:18}}>Back</p>
     
     <div class="refresh-icon"></div>
     <div class="icon-heart" style={{marginLeft:'2vh'}}></div>
     <p style={{marginLeft:"3vh",marginTop:'-1vh',fontSize:18}}>100%</p>
     <div class="chevron-less-icon" style={{marginTop:'-1px',marginRight:'2vh'}}>
         <div></div>
        <div></div>
      </div>
        </div>
    )
}