import { Search, Plus } from "lucide-react";
import { useState } from "react";


// function settingTabs() {
//   const [toggle, setToggle] = useState(1)

//   function toggleTab(id) {
//     toggleTab(id)
//   }
// }

const Settings = () => {
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
          {/* <ul className="col-6">
            <li className="flex-" onClick={()=>toggleTab(1)}>Settings</li>
            <></>
          </ul> */}
          

          <div className="tablist hover:text-gray-400">General</div>
          <div className="tablist hover:text-gray-400">Security</div>
          <div className="tablist hover:text-gray-400">Billing</div>
          <div className="tablist hover:text-gray-400">Notifications</div>
          <div className="tablist hover:text-gray-400">Branding</div>
          <div className="tablist hover:text-gray-400">Refer a friend</div>
          <div className="tablist hover:text-gray-400">Sharing</div>

        </div>
        
      </div>
      

    ) 
  };
  
  export default Settings;