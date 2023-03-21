import React,{useState} from "react";

const LikesButton= ()=>{
    const [likes,setLikes]= useState();
    const [clicked,setClicked]= useState(false);
    return(
        <button onClick={() => setClicked(0)}>
      LikesButton
    </button>
    )
}








export default LikesButton;