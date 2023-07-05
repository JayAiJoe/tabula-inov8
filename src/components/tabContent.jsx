import React from "react";
 
const TabContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="TabContent" style={{minHeight:200}}>
     { children }
   </div>
   : null
 );
};
 
export default TabContent;