import './typography.css';
import React from "react";
import DiagArrow from '../assets/images/diagArrow.svg';

const FavoritesCard = (props) => {
    const {name, type, img, width} = props;
    return (
        <div className="max-w-[379px] min-w-[280px] rounded-[12px] overflow-hidden">
            <span><img src={img}></img></span>
            <div className='flex p-[20px] justify-between items-center bg-bg-main'>
                <div>
                    <p className='font-14-light text-custom-font-light'>{name}</p>
                    <h3 className='font-20 text-custom-font-white'>{type}</h3>
                </div>
                <span><img src={DiagArrow}></img></span>
            </div>
        </div>
    )
}

export default FavoritesCard;