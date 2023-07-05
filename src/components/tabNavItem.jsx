import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={(activeTab === id ? "is-active has-text-white" : "has-text-grey") + " mr-8"}>
     { title }
   </li>
 );
};
export default TabNavItem;