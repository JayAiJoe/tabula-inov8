import Link from "next/link";
import React, { useState } from "react"


const Tabs = () => {

    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <div class="tabs">
                <ul>
                    <li className={activeTab === "tab1" ? "is-active has-text-white" : "has-text-grey"} onClick={() => setActiveTab("tab1")}>Tab 1</li>
                    <li className={activeTab === "tab2" ? "is-active has-text-white" : "has-text-grey"} onClick={() => setActiveTab("tab2")}>Tab 2</li>
                </ul>
            </div>
            <div>
                {activeTab === "tab1" ? <p>Hello</p> : <p>World</p>}
            </div>
        </>
    );
}
export default Tabs;