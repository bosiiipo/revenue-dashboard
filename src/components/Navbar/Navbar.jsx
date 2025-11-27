import React from 'react';
import './Navbar.css';
import MainstackLogo from '../../assets/mainstack-logo.svg?react';
import HomeLogo from '../../assets/home.svg?react';
import WidgetsLogo from '../../assets/widgets.svg?react';
import PaymentsLogo from '../../assets/payments.svg?react';
import CrmLogo from '../../assets/group.svg?react';
import AnalyticsLogo from '../../assets/insert_chart.svg?react';
import BellIcon from '../../assets/bell';
import Messages from '../../assets/texts';

import ProfileCard from '../ProfileCard/ProfileCard';

const Navbar = () => {
  return (
    <nav className="w-[90%] bg-white border-b shadow-sm navbar fixed left-1/2 -translate-x-1/2 top-0">
        <div>
            <div className="flex items-center gap-3 logo">
                <MainstackLogo />
            </div>
        </div>
        <div className="max-w-7xl mx-auto center-nav">
            <div className="group">
                <div className="flex items-center mr-7 px-3 rounded-[100px] transition-all duration-200
                                group-hover:bg-gray-100 group-hover:opacity-75 cursor-pointer">
                    <HomeLogo className="w-5 h-5" />
                    <span className="nav-text ml-2">Home</span>
                </div>
            </div>

            <div className="group">
                <div className="flex items-center mr-7 px-3 rounded-[100px] transition-all duration-200
                                group-hover:bg-gray-100 cursor-pointer">
                    <AnalyticsLogo className="w-5 h-5" />
                    <span className="nav-text ml-2">Analytics</span>
                </div>
            </div>

            <div className="group">
                <div className="flex items-center mr-7 px-3 rounded-[100px] bg-black cursor-pointer">
                    <PaymentsLogo className="w-5 h-5" />
                    <span className="nav-text ml-2 !text-white">Revenue</span>
                </div>
            </div>

            <div className="group">
                <div className="flex items-center mr-7 px-3 rounded-[100px] transition-all duration-200
                                group-hover:bg-gray-100 cursor-pointer">
                    <CrmLogo className="w-5 h-5" />
                    <span className="nav-text ml-2">CRM</span>
                </div>
            </div>

            <div className="group">
                <div className="flex items-center mr-7 px-3 rounded-[100px] transition-all duration-200
                                group-hover:bg-gray-100 cursor-pointer">
                    <WidgetsLogo className="w-5 h-5" />
                    <span className="nav-text ml-2">Apps</span>
                </div>
            </div>

        </div>
        <div className="flex items-center gap-5 pr-10">
            <BellIcon />
            <Messages />
            <ProfileCard />
        </div>
    </nav>
  )
}

export default Navbar