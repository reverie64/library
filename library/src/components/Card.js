import trashIcon from "../images/trashIcon.png";
import React, { useState } from "react";

function BookCard() {

const [isRead, setRead] = useState(false);

function readBook(){
setRead(prevState => !prevState)
}

    return (


        <div className="book"> 
 
         
           <img className="trash-icon" src={trashIcon} alt="delete" />
           <div onClick={readBook} className="">
               {isRead ? "read" : "unread"}
          
             <label className="complete">
                         
                         <input onClick={readBook} 
                             type="checkbox"
                             name="complete"
                             id="complete"
                             value="yes"
                         /> 
                         <span className="sliderround"></span>
                     </label>  </div>
                   
        </div>
    );
  }
  
  export default BookCard;
  

