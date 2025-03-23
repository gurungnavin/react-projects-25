import React, { useState } from 'react';
import MenuList from './MenuList';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai"; // Example icon for "Dashboard"
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";



const MenuItem = ({ item }) => {

  // Mapping of labels to icons
  const iconMapping = {
    Dashboard: <AiFillDashboard className="text-xl" onClick={() => handleToggleChildren('Dashboard')} />,
    Users: <FaUser className="text-xl" onClick={() => handleToggleChildren('Users')} />,
    Settings: <IoSettingsSharp className="text-xl" onClick={() => handleToggleChildren('Settings')} />,
    Overview: <GrOverview onClick={() => handleToggleChildren('Overview')} />,
    Analytics: <IoMdAnalytics onClick={() => handleToggleChildren('Analytics')} />,
    Reports: <TbReportAnalytics onClick={() => handleToggleChildren('Reports')} />,
  };

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };

  return (
    <li>
      <div className="text-white flex justify-between items-center gap-8 py-3 px-6 hover:bg-yellow-400 hover:text-black hover:shadow-md">
        <div className="flex items-center gap-2">
          {/* Render the icon if it exists in the mapping(add the icon with matcing of Label) */}
          {iconMapping[item.label] ? iconMapping[item.label] : <span className="text-xl"></span>}
          <p
           onClick={() => handleToggleChildren(item.label)} 
          className="text-base font-bold">{item.label}</p>
        </div>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaRegCaretSquareRight className="text-2xl" />
            ) : (
              <FaRegCaretSquareDown className="text-2xl" />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length &&
      displayCurrentChildren[item.label] > 0 ? (
         <li className='pl-3'>
           <MenuList list={item.children} />
         </li>
      ) : null}
    </li>
  );
};

export default MenuItem;
