import React from "react";
import "./Sidebar.css";

import AppBarList from "../../assets/app-bar-list.svg?react";
import WidgetsIcon from "../../assets/app-bar-listt.svg?react";
import ProductIcon from "../../assets/app-bar-list3.svg?react";
import FolderIcon from "../../assets/folder.svg?react";

const Sidebar = () => {
  const menuItems = [
    { icon: AppBarList, label: "AppBarList" },
    { icon: WidgetsIcon, label: "Widgets" },
    { icon: FolderIcon, label: "FolderIcon" },
    { icon: ProductIcon, label: "ProductIcon" },
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2">
      <div className="flex flex-col bg-white rounded-full shadow-xl">
        {menuItems.map(({ icon: Icon, label }, index) => (
          <button
            key={index}
            className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            title={label}
          >
            <Icon className="w-6 h-6 text-black" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
