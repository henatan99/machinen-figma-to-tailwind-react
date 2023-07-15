import './header.css';
import React from "react";
import Logo from '../assets/images/logo.svg';
import SearchIcon from '../assets/images/search.svg';
import NotificationIcon from '../assets/images/notificationIcon.svg';
import NotificationPing from '../assets/images/notificationPing.svg';
import EnFlag from '../assets/images/enFlag.svg';
import RedDropDown from '../assets/images/redDropdown.svg';
import Hamberger from '../assets/images/hamberger.svg';

// full width 
const MainNavBar = () => {
    return (
        // has three sections in row. Logo, search and right section. 
        // It has some padding left and right
        <div className="header w-full flex flex-row h-[49.5px] lg:h-[70px] items-center px-[16px] py-[12px] xl:px-[10%]">
            <div className='w-[117px] h-[24px] lg:w-[177.5px] lg:h-[36px]'>
                <img src={Logo} className='h-full'></img>
            </div>
            {/* Search bar */}
            <div className="search hidden md:flex relative w-[400px] lg:w-[584px] h-[28px] lg:h-[40px] rounded-[6px] items-center mx-auto">
                <input 
                    placeholder="Search in 400 + machines" 
                    className="ml-[16px] my-[11px] text-custom-search w-[80%] bg-inherit outline-none"
                />
                <button className="absolute right-0 bg-custom-bg-red rounded-[6px] w-[24px] h-[24px] lg:w-[36px]  lg:h-[36px]">
                    <img src={SearchIcon} className="m-auto "></img>
                </button>
            </div>
            {/* right section with language dropdown and notification */}
            <div className="flex items-center ml-auto w-[97px] md:w-[159px] justify-between">
                <button className="md:hidden w-[24px] h[24px]">
                    <img src={SearchIcon} className="m-auto"></img>
                </button>
                {/* Notification */}
                <div className="relative w-[24px] h-[24px] md:w-[36px] md:h-[31px]">
                    <span className="absolute left-0 bottom-0 lg:w-[28px] lg:h-[28px]">
                        <img src={NotificationIcon} className="w-full h-full"></img>
                    </span>
                    <button className="absolute top-0 right-0 w-[14px] h-[14px] lg:w-[17px] lg:h-[17px]">
                        <img src={NotificationPing} className="w-full h-full"></img>
                        <span className="absolute text-white top-[1px] lg:top[0] right-[4px] text-[8px] lg:right-[5px] lg:text-[10px]">1</span>
                    </button>
                </div>
                <div className="hidden md:block w-[1px] h-[31px] bg-custom-divider-bg"></div>
                <div className="hidden md:flex w-[74px] justify-between items-center">
                    <span>
                        <img src={EnFlag}></img>
                    </span>
                    <span className="text-white">
                        EN
                    </span>
                    <button className='py-1'>
                        <img src={RedDropDown}></img>
                    </button>
                </div>
                <button className='md:hidden w-[24px] h-[24px]'>
                    <img src={Hamberger}></img>
                </button>
            </div>
        </div>
    )
}

export default MainNavBar;