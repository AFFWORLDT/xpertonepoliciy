import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sideStyle from './SideNav.module.css';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiMemoPad } from "react-icons/ci";
import { TbUserShield } from "react-icons/tb";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdRoundaboutRight } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { IoIosContact } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import StikyStyle from './StikyNav.module.css'
const SideNav = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectMode,setSelectMode] = useState(false)  
  const handleMode = () => {
    setSelectMode(!SelectMode) 
  }
  useEffect(()=>{
    document.body.style.backgroundColor = SelectMode ? "black" : "white"
    document.body.style.color = SelectMode ? "white" : "black" 
    document.body.style.transition = "all 0.5s"
   },[SelectMode]) 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen); // Inform the parent component about the toggle state
  };


  const RouterMap = [
                    {path:"/",pathName:"Overview",Icons:<MdOutlineDashboardCustomize style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold'}}/>},
                    {path:"terms-and-conditions",pathName:"Terms and Conditions",Icons:<CiMemoPad style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold'}}/>},
                   
                    {path:"privacy-policy",pathName:"privacy-policy",Icons:<TbUserShield style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold'}}/>},
                    {path:"cancellation-and-refund-policy",pathName:"cancellation-and-refund-policy",Icons: <HiOutlineReceiptRefund style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold'}}/>},
                    {path:"about-us",pathName:"About Us",Icons:<MdRoundaboutRight style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold'}}/>},
                    {path:"customer-support",pathName:"customer-support",Icons:<RiCustomerService2Line style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold'}}/>}, 
                    {path:"pricing-details",pathName:"pricing-details",Icons:<IoPricetagOutline style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold'}}/>},                    
                    ]
              

  return (
    <div className={isOpen ? sideStyle.sidebarOpen : sideStyle.sidebarClosed}>
      <button onClick={toggleSidebar} className={sideStyle.toggleButton} style={{backgroundColor:"transparent"}}>
        {isOpen ? <RxCross2 style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold',transition:"all 0.5s"}}/> : <FaBars style={{fontSize:"30px",margin:"0 2px 4px 2px",color:'gold',transition:"all 0.5s"}}/> } 
      </button> 
      {/* desktop display none */}
      <div className={sideStyle.ResponsiveFlex}>
         <h5><Link to="/">AWPolicies</Link></h5>  
         <div className={`${StikyStyle.ModeButton}`} onClick={handleMode}><button style={{border:"none",background:"transparent"}}>
          {SelectMode?<FaMoon style={{fontSize:'25px',color:"cyan",fontWeight:"bold"}}/>:<IoSunny  style={{fontSize:'25px',color:"#FF8000",fontWeight:"bold"}}/>}</button>
         </div>   
               
         <button onClick={toggleSidebar} className={sideStyle.toggleButton2} > 
        {isOpen ? <RxCross2 style={{fontSize:"25px",margin:"0 2px 4px 2px",color:'gold',transition:"all 0.5s"}}/> : <FaBars style={{fontSize:"25px",margin:"0 2px 4px 2px",color:'gold',transition:"all 0.5s"}}/> } 
      </button> 
      </div> 
      <hr></hr>
      <nav className={isOpen?sideStyle.NavResponse:""}>
        <ul> 
          {RouterMap.map((item,index)=><li key={index}><Link onClick={()=>(setIsOpen(false),onToggle(false))} to={item.path} className='d-flex align-items-start'><span>{item.Icons}</span><span style={{display:isOpen?"block":"none",}}>{item.pathName}</span></Link></li>)}
        </ul>
        <ul>

        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
