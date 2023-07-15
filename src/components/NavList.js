import React from "react";
import RedDropDown from '../assets/images/redDropdown.svg';

const NavList = () => {
    const list = [
        {id: 1, name: 'Filling'}, 
        {id: 1, name: 'Capping'},
        {id: 1, name: 'Labelling'},
        {id: 1, name: 'Processing'},
        {id: 1, name: 'All Categories'},
        {id: 1, name: 'Service'},
    ];
    return (
        <div className="hidden lg:block py-[14px] lg:px-[80px] xl:px-[140px]">
            <ul className="flex gap-x-[36px] mx-auto justify-center">
                {
                    list && list.length > 0 && 
                    list.map((item) => (
                        <li key={item.id} className="flex items-center">
                            <span className="text-custom-font-white mr-[4px]">{item.name}</span>
                            <button className='w-[12px] h-full'>
                                <img src={RedDropDown} className="w-[10px] h-[5px]"></img>
                            </button>
                        </li>
                        )
                    )
                }
                <li className="text-custom-font-white"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavList;