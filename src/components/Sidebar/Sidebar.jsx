import React from "react";
import "./Sidebar.css";

import AppBarList from "../../assets/app-bar-list.svg?react";
import WidgetsIcon from "../../assets/app-bar-listt.svg?react";
import ProductIcon from "../../assets/app-bar-list3.svg?react";
import FolderIcon from "../../assets/folder.svg?react";

import AppBarColoredList from "../../assets/uno.svg?react";
import WidgetsColoredIcon from "../../assets/two.svg?react";
import ProductColoredIcon from "../../assets/pi.svg?react";
import FolderColoredIcon from "../../assets/folderIc.svg?react";

const Sidebar = () => {
  const menuItems = [
    { icon: AppBarList, hoverIcon: AppBarColoredList, label: "App Bar" },
    { icon: WidgetsIcon, hoverIcon: WidgetsColoredIcon, label: "Widgets" },
    { icon: FolderIcon, hoverIcon: FolderColoredIcon, label: "Folder" },
    { icon: ProductIcon, hoverIcon: ProductColoredIcon, label: "Product" },
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2">
      <div className="flex flex-col bg-white rounded-full shadow-xl p-2 space-y-2">
        {menuItems.map(({ icon: Icon, hoverIcon: HoverIcon, label }, index) => (
          <button
            key={index}
            className="group relative w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            title={label}
          >
            <Icon className="pointer-events-none w-6 h-6 absolute opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
            <HoverIcon className="pointer-events-none w-6 h-6 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
