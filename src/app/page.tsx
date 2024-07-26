import Sidebar from "./components/Sidebar";

// pages/settings.js
export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-400 text-white">
      <div className="application-border">
        <div className="left-info">
          <Sidebar />
        </div>
        <div className="right-info">

        </div>
      </div>
    </div>
    
  )
}

