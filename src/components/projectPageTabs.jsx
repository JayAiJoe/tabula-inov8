import React, { useState } from "react";
import TabNavItem from "./tabNavItem";
import TabContent from "./tabContent";

const Tabs = ({content}) => {
    const [activeTab, setActiveTab] = useState("tab1");
   
    return (
        <>
        <div className="tabs is-large">
            <ul>
            <TabNavItem title="Description" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Community" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="Status" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>
        </div>
        <div>
            <TabContent id="tab1" activeTab={activeTab}>
                {content[0]}
            </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
                {content[1]}
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
                {content[2]}
          </TabContent>
        </div>
        </>
    );
  };
   
  export default Tabs;