import React, { useState } from 'react';
import LayoutStyle from './AppLayout.module.css';
import SideNav from '../common/SideNav';
import { Outlet } from 'react-router-dom';
import StikyNav from '../common/StikyNav';

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };
  
  return (
    <div className={LayoutStyle.appLayout}>  
      <SideNav onToggle={handleSidebarToggle} /> 
      <div className={`${LayoutStyle.content} ${isSidebarOpen ? LayoutStyle.expanded : ''}`}> 
       <div>
        <StikyNav isSidebarOpen={isSidebarOpen}/>
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
