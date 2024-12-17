import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppLayout from "./Pages/AppLayout"; 
import Overview from "./Components/Overview/Overview"; 
import './App.css'; 
import Terms from "./Components/Page/Terms";
import Privacy from "./Components/Page/Privacy";
import Cancellation from "./Components/Page/Cancellation";
import CustSupport from "./Components/Page/CustSupport";
import About from "./Components/Page/About";
import Pricing from "./Components/Page/Pricing";
import CustomOverview from "./Components/Overview/CustomOverview";

function App() {


  return (
    // <div className={`app-layout ${isDarkMode ? 'dark' : 'light'}`}>
    //   <BrowserRouter>
    //   <div className={`content ${isSidebarOpen ? 'open' : 'closed'}`}>
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={<AppLayout 
    //                     isSidebarOpen={isSidebarOpen} 
    //                     toggleSidebar={toggleSidebar} 
    //                     isDarkMode={isDarkMode} 
    //                     toggleTheme={toggleTheme} 
    //                  />}
    //       >
    //         <Route index element={<Overview />} />
    //         <Route path="terms-and-conditions" element={<Terms/>}/>
    //         <Route path="privacy-policy" element={<Privacy/>}/>
    //         <Route path="cancellation-and-refund-policy" element={<Cancellation/>}/>
    //         <Route path="customer-support" element={<CustSupport/>}/>
    //         <Route path="about-us" element={<About/>}/>
    //         <Route path="pricing-details" element={<Pricing/>}/>
    //       </Route>
    //     </Routes>
    //     </div>
    //   </BrowserRouter>
    // </div>
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout/>} >
      {/* <Route index element={<CustomOverview/>}/> */}
             <Route index element={<Overview />} />
             <Route path="terms-and-conditions" element={<Terms/>}/>
             <Route path="privacy-policy" element={<Privacy/>}/>
             <Route path="cancellation-and-refund-policy" element={<Cancellation/>}/>
             <Route path="customer-support" element={<CustSupport/>}/>
             <Route path="about-us" element={<About/>}/>
             <Route path="pricing-details" element={<Pricing/>}/>
      </Route> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
