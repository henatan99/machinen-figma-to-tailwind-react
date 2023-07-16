import './typography.css';
import React from "react";
import LogoBig from '../assets/images/logoBig.svg';
import Button from './button';
import RightIcon from '../assets/images/rightIcon.svg';
import VideoThumbnail from '../assets/images/videoThumbnail.svg';

const TopSection = () => {
    const title = "Machinen der Getränke- und Verpackungsindustrie";
    const info = [
        {id: 1, text: '400k machines in stock'},
        {id: 2, text: 'Service for installation and spare parts'},
        {id: 3, text: 'New machines custum build to requirments'}
    ];

    return (
        <div className="px-[16px] py-[80px] lg:py-[150px] lg:px-0 relative max-w-[2000px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-[30px] lg:gap-[60px]">
            <div className="absolute left-[0] top-[35px]">
                <img src={LogoBig}></img>
            </div>
            <div className="z-10 w-full lg:w-[40.48%] h-auto flex flex-col gap-[44px] lg:gap-[64px] overflow-hidden">
                <h1 className="font-56 text-custom-font-white">{title}</h1>
                <div className='flex gap-[24px]'>
                    <Button red={true} text='Second Hand Machines' />
                    <Button text='New Machines' />
                </div>
                <ul className='flex gap-[37px]'>
                    {
                        info && info.length > 0 && 
                        info.map((item) => (
                            <li key={item.id} className='flex-grow flex flex-col gap-[9px] max-w-[160px] w-[98.33px] md:w-auto'>
                                <span className='w-[32px] h-[32px]'><img src={RightIcon}></img></span>
                                <h2 className='font-14 custom-font-white text-white'>{item.text}</h2>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="relative min-w-[300px] max-w-[543px] lg:w-[37.7%]  flex items-center">
                <div className='relative aspect-ratio-element w-full bg-white my-[10%] rounded-[8px] z-10'>
                    <img src={VideoThumbnail}></img>
                    <div className='aspect-ratio-element-after w-full pt-[62.7%] absolute top-0 left-0'></div>
                </div>
                <div className='absolute w-[42.5%] h-full bg-custom-bg-red top-0 right-[5.8%] rounded-[12px]'>

                </div>
            </div> 
        </div>
    )
}

export default TopSection;