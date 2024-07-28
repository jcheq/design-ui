import { Search, Plus } from "lucide-react";

const Settings = () => {
    return (
      <div className="settings">
        <div className="userName">
          <h1> Mia de Silva</h1>
          {/* <p className="flex-direction">Manage your details and personal preferences here.</p> */}
        </div>
        <div className="userActions">
          <div>
            <Search/>
            <input type="text" className="search" placeholder="Search"/>
          </div>
    
          <button className="invite">
            <Plus className="size-5"/>
            Invite
          </button>

          <button className="upgrade">Upgrade</button>
        </div>
      </div>

    ) 
  };
  
  export default Settings;