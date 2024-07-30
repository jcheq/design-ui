"use client";
import { Search, Plus } from "lucide-react";
import { useState } from "react";
import React from "react";
import CircularProgress from '@mui/material/CircularProgress';



const Settings = () => {
  const [toggleState, setToggle] = useState(1);
  
  const settingTabs = (index:number) => {
    setToggle(index);
  
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

        <div className=" w-full h-full">

          <div className={toggleState === 1 ? "content activeContent" : "content"}>
            <div className="general"> General</div>
          </div>

          <div className={toggleState === 2 ? "content activeContent" : "content"}> 
            <div className="layout">
              <div className="settings2">
                <div className="flex">
                  <CircularProgress className="circleProgress" variant="determinate" value={90} />
                  <div className="user">
                    <h2> Your account security is 90% </h2>
                    <p className="description">Please review your account security settings regularly and update your password</p>
                  </div>
                </div>
                <div className="userActions">
                  <button className="dismiss">Dismiss</button>
                  <button className="review">Review Security</button>
                </div>
                
              </div>
          
            </div>
            <div className="basic">
              Basics
              <hr className="line"/>
            </div>
            <div className="password">
              <div className="passInfo">
            
                Password
                <p className="description">Set a password to protect your account.</p>

              </div>
              <div className="hidden"></div>
                <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
              <div className="hidden"></div>
              <button className="edit">Edit</button>
               

              
            </div>
            <div className="basic">
              <hr className="line"/>
            </div>
            <div className="twostep">
              <div className="passInfo">
            
                Two-step verification
                <p className="description">We recommend requiring a verification code in addition to your password.</p>

              </div>
              {/* <div className="hidden">
                
              </div> */}
              <button className="edit">Edit</button>

            </div>
              

            <div className="basic">
              <hr className="line"/>
            </div>

            <div className="twostep">
              <div className="passInfo">
            
                Browsers and devices
                <p className="description">These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</p>

              </div>
            </div>

            <div className="basic">
              <hr className="line"/>
            </div>


            <div className="basic">
              <hr className="line"/>
            </div>


            <div className="basic">
              <hr className="line"/>
            </div>

            <div className="basic">
              <hr className="line"/>
            </div>

            <div className="basic">
              <hr className="line"/>
            </div>
            










          </div>

          <div className={toggleState === 3 ? "content activeContent" : "content"}>
            <div className="Billing">Billing</div>
          </div>

          <div className={toggleState === 4 ? "content activeContent" : "content"}>
            <div className="Notifications">Notifications</div>
          </div>

          <div className={toggleState === 5 ? "content activeContent" : "content"}>
            <div className="Branding">Branding</div>
          </div>

          <div className={toggleState === 6 ? "content activeContent" : "content"}>
            <div className="Refer a friend"> Refer a friend</div>
          </div>

          <div className={toggleState === 7 ? "content activeContent" : "content"}>
            <div className="sharing"> Sharing</div>
          </div>



    

        </div>

      
        
      </div>
      

    ) 
  };
  
  export default Settings;