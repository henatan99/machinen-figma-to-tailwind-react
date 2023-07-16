import React from "react";

const Button = (props) => {
    const { text, red } = props;
    return (
        <>
            {
                red ?
                <button className={`bg-custom-bg-red text-custom-font-white 
                h-[44px] lg:h-[52px] font-16 rounded-[8px] px-[1rem]`}>{text}</button>
                :
                <button className="text-custom-bg-red font-16 border-[1.5px] border-custom-bg-red rounded-[8px] h-[44px] lg:h-[52px] px-[1rem]">{text}</button>
            }
        </>
    )
}

export default Button; 