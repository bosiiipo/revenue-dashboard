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
            <div className="flex items-center mr-7">
                <HomeLogo />
                <span className="nav-text">Home</span>
            </div>
            <div className="flex items-center mr-7">
                <AnalyticsLogo />
                <span className="nav-text">Analytics</span>
            </div>
            <div className="flex items-center mr-7 bg-black nav-rev">
                <PaymentsLogo />
                <span className="nav-text nav-current text-white">Revenue</span>
            </div>
            <div className="flex items-center mr-7">
                <CrmLogo />
                <span className="nav-text">CRM</span>
            </div>
            <div className="flex items-center mr-7">
                <WidgetsLogo />
                <span className="nav-text">Apps</span>
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