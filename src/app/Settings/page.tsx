"use client";
import { Search, Plus } from "lucide-react";
import { useState } from "react";
import React from "react";


const Settings = () => {
  const [toggleState, setToggle] = useState(1);
  
  const settingTabs = (index:any) => {
    setToggle(index);
    console.log("test");
    // alert("hehe");
  }
  
    return (
      <div className="layout">
        <div className="settings">
          <div className="user">
            <h1> Mia de Silva</h1>
            <p className="description">Manage your details and personal preferences here.</p>
          </div>

          
          <div className="userActions">
            <div className="borderSearch">
              <Search/>
              <input type="text" className="search" placeholder="Search"/>
            </div>
      
            <button className="invite">
              <Plus className="size-4"/>
              Invite
            </button>

            <button className="upgrade">Upgrade</button>
          </div>


          
        </div>
        <div className="Tabs"> 
        
          <div className={toggleState === 1 ? "tablist activeTab" : "tablist"} onClick={() => settingTabs(1)}>General</div>
          <div className={toggleState === 2 ? "tablist activeTab" : "tablist"} onClick={() => settingTabs(2)}>Security</div>
          <div className={toggleState === 3 ? "tablist activeTab" : "tablist"} onClick={() => settingTabs(3)}>Billing</div>
          <div className={toggleState === 4 ? "tablist activeTab" : "tablist"} onClick={() => settingTabs(4)}>Notifications</div>
          <div className={toggleState === 5 ? "tablist activeTab" : "tablist"} onClick={() => settingTabs(5)}>Branding</div>
          <div className={toggleState === 6 ? "tablist activeTab" : "tablist"} onClick={() => settingTabs(6)}>Refer a friend</div>
          <div className={toggleState === 7 ? "tablist activeTab" : "tablist"} onClick={() => settingTabs(7)}>Sharing</div>

        </div>
        
      </div>
      

    ) 
  };
  
  export default Settings;