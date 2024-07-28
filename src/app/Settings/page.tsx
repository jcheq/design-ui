import { Search, Plus } from "lucide-react";

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
        <div className="erf"> 
          <h1> Mia de Silva</h1>
          
        </div>
        
      </div>
      

    ) 
  };
  
  export default Settings;