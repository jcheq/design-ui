"use client";
import { Search, Plus, Circle } from "lucide-react";
import { useState } from "react";
import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { FaBrave } from "react-icons/fa6";
import { IconContext, IconType } from "react-icons";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import vietnam from "../assets/images/vietnam.png"
import { StaticImageData } from "next/image";
import {
  CircleCheck,
} from "lucide-react";


const Settings = () => {
  const [toggleState, setToggle] = useState(1);
  
  const settingTabs = (index:number) => {
    setToggle(index);
  }

  const removeDiv = (id:any) => {
    document.getElementById(id)?.remove();
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
              <div className="boxConstraint">
            
                Password
                <p className="description">Set a password to protect your account.</p>

              </div>
              <div className="passwordCheck flex mb-auto ">
                <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="passInput"/>
                <CircleCheck className="size-5 ml-2" color="#658f75"/>
                <p className="checkInfo">Very Secrure</p>
              </div>
              <button className="edit">Edit</button>
               

              
            </div>
            
            <div className="basic">
              <hr className="line"/>
            </div>
            <div className="twostep">
              <div className="boxConstraint">
                {/* <input type="checkbox" checked/> */}
                <span className="slider round"></span>
            
                Two-step verification
                <p className="description">We recommend requiring a verification code in addition to your password.</p>

              </div>

              
              <p className="description">Two-step verification</p>
                
              
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



            <div className="items">
              <div className="e" id="first">
                <div className="contentItem m-5 flex">
                  <IconContext.Provider
                    value={{ color: 'darkorange' }}>
                    <FaBrave className="brave size-8 mr-3" />
                  </IconContext.Provider>
                  <div className="pt-2">
                    Brave on Mac OS X
                  </div>
                  <div className="flex pointer gap-20 ml-auto mr-3 mt-auto mb-auto">
                    <p className="description">Ninh Binh, Vietnam</p>
                    <p className="description">Current session</p>
                  
                  </div>
                  <FaRegTrashAlt className="size-4 ml-auto mr-3 mt-auto mb-auto" onClick={() => removeDiv("first")}/>
                </div>
                <div className="basic">
                  <hr className="line"/>
                </div>
              </div>

              <div className="e" id="second">
                <div className="contentItem m-5 flex">
                  <FaApple className="brave size-8 mr-3"/>
                  <div className="pt-2">
                  Mia's MacBook Pro
                  </div>
                  <div className="flex pointer flex-wrap gap-20 mr-3 mt-auto mb-auto">
                    <p className="description flex mt-auto mb-auto">
                    {/* <img src={vietnam.src} alt="Image" className="picture mt-auto mb-auto"/> */}
                    Ninh Binh, Vietnam</p>
                    <p className="description">Current session</p>
                  </div>
                  <FaRegTrashAlt className="size-4 ml-auto mr-3 mt-auto mb-auto" onClick={() => removeDiv("second")}/>
                </div>
                <div className="basic">
                  <hr className="line"/>
                </div>
              </div>

              <div className="e" id="third">
                <div className="contentItem m-5 flex">
                  <IconContext.Provider
                    value={{ color: 'darkorange' }}>
                    <FaBrave className="brave size-8 mr-3" />
                  </IconContext.Provider>
                  <div className="pt-2 flex">
                  Brave on Mac OS X
                  </div>
                  <div className="pointer flex gap-20 mr-3 mt-auto mb-auto">
                    <p className="description">Mexico City, Mexico</p>
                    <p className="description">1 month ago</p>
                
                  </div>
                  <FaRegTrashAlt className="size-4 ml-auto mr-3 mt-auto mb-auto" onClick={() => removeDiv("third")}/>
                </div>
                <div className="basic">
                  <hr className="line"/>
                </div>
              </div>

              <div className="e" id="fourth">
                <div className="contentItem m-5 flex">
                  <FaApple className="brave size-8 mr-3"/>
                  <div className="pt-2">
                  Mia's MacBook Pro
                  </div>
                  <div className="flex pointer gap-20 ml-auto mr-3 mt-auto mb-auto">
                    <p className="description">Mexico City, Mexico</p>
                    <p className="description">1 month ago</p>
                  </div>
                  <FaRegTrashAlt className="size-4 ml-auto mr-3 mt-auto mb-auto" onClick={() => removeDiv("fourth")}/>
                </div>
                <div className="basic">
                  <hr className="line"/>
                </div>
              </div>




              



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