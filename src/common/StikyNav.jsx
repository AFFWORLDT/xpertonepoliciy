import React, { useEffect, useState } from 'react';
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import StikyStyle from './StikyNav.module.css'
import { Link, NavLink } from 'react-router-dom';
import { LuSearch } from "react-icons/lu";
function StikyNav({isSidebarOpen}) {
  const [SelectMode,setSelectMode] = useState(false)  
  const handleMode = () => {
    setSelectMode(!SelectMode) 
  }
  useEffect(()=>{
   document.body.style.backgroundColor = SelectMode ? "black" : "white"
   document.body.style.color = SelectMode ? "white" : "black" 
   document.body.style.transition = "all 0.5s"
  },[SelectMode])
  return (
    <div className={`container-fluid ${StikyStyle.fixNavParent} ${isSidebarOpen?StikyStyle.fixNavParentWIdth : "" } `}>
     <div className={`${StikyStyle.logoStyle}`}>
      <h3><Link to="/">AWPolicies</Link></h3> 
     </div>
     <div className={`${StikyStyle.ListStyle}`}>
      <ul>
        <li><NavLink to="/" style={{textDecoration:"none",color:"gold"}}>Overview</NavLink></li> 
        <li><NavLink to="/about-us" style={{textDecoration:'none',color:"gold"}}  >About</NavLink></li> 
        <li><NavLink to="/customer-support" style={{textDecoration:'none',color:"gold"}}>Contact</NavLink></li>
     
      </ul> 
     </div> 
     {/* switch */}
     <div className={`d-flex ${StikyStyle.ModeButton}`}><button style={{border:"none",background:"transparent"}} onClick={handleMode}>
      {SelectMode?<FaMoon style={{fontSize:'25px',color:"cyan",fontWeight:"bold"}}/>:<IoSunny  style={{fontSize:'25px',color:"#FF8000",fontWeight:"bold"}}/>}</button>
      <li className={StikyStyle.searchItem}>  
    <input
    type="search"
    className={StikyStyle.InputSearch}
    placeholder="Search here"
    />
   </li>
      </div>   
  
    </div> 
   
  );
}

export default StikyNav;
