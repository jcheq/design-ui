import { FileLock2, Lock, Settings2Icon } from "lucide-react";
import {
  Trash2,
  FolderClosed,
  LucideFolderLock,
  LucideContrast,
  SquareArrowOutUpRightIcon,
  Settings,
  CircleCheck,
  UserPlusIcon,
  LucideIcon
} from "lucide-react";

import { TbUsersPlus } from "react-icons/tb";
import { RiHomeSmile2Line } from "react-icons/ri";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { PiNumberCircleEightBold } from "react-icons/pi";
import { PiFolder } from "react-icons/pi";


const Sidebar = () => {
    return (
      // <div className="text-lg font-bold mb-4">Untitled UI</div>
      // <div className="min-h-screen bg-gray-900 text-white">
      // <div className="flex">
        <div className="w-60">
          <div className="text-lg font-bold mb-10 ">Untitled UI</div>
          <nav>
            <ul>
              <li className="sidebar">
                  <RiHomeSmile2Line className="mr-2 size-5 " />
                  <a href="Home" className="hover:text-gray-400">Home</a>
              </li>
              <li className="sidebar">
                <PiFolder className="mr-2 size-5" />
                <a href="All" className="hover:text-gray-400">All files</a>
              </li>
              <li className="sidebar">
                <LucideFolderLock className="mr-2 size-5" />
                <a href="Private" className="hover:text-gray-400">Private files</a>
              </li>
              <li className="sidebar">
                <TbUsersPlus className="mr-2 size-5" />
                <a href="Shared" className="hover:text-gray-400">Shared with me</a>
              </li>
              <li className="sidebar">
                <Trash2 className="mr-2 size-5" />
                <a href="Deleted" className="hover:text-gray-400">Deleted files</a>
              </li>
              <li className="sidebar">
                <LucideContrast className="mr-2 size-5" />
                <a href="Design" className="hover:text-gray-400">Design</a>
              </li>
              <li className="sidebar">
                <RiNotificationBadgeLine className="mr-2 size-5" />
                <a href="Notifications" className="hover:text-gray-400">Notifications</a>
                <PiNumberCircleEightBold className="eightNotify size-5" />
              </li>
              <li className="sidebar">
                <Settings className="mr-2 size-5" />
                <a href="Settings" className="hover:text-gray-400">Settings</a>
              </li>
            </ul>
          </nav>
        </div>

    );
  };
  
  export default Sidebar;