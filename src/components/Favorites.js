import React from "react";
import FavoritesCard from "./FavoritesCard";
import FavoriteMachine from '../assets/images/favoriteMachine.svg';
import Button from "./button";

const Favorites = () => {
    const favoriteMachines = [
        {id: 1, name: 'BERTOLABO', type: 'Filling Block 20-10-10', img: FavoriteMachine},
        {id: 2, name: 'BERTOLABO', type: 'Filling Block 20-10-10', img: FavoriteMachine},
        {id: 3, name: 'BERTOLABO', type: 'Filling Block 20-10-10', img: FavoriteMachine},
    ]

    return (
        <div className="flex flex-col gap-[24px] overflow-hidden bg-custom-bg-black pt-[72px] lg:pl-[120px] pr-[16px] lg:pt-[140px] lg:pr-[120px] lg:pb-[75px] pb-[36px] pl-[16px]">
            <h2 className="font-40 text-custom-font-white">Favorite Machines</h2>
            <ul className="flex lg:justify-center justify-start gap-[32px]">
                {
                    favoriteMachines && favoriteMachines.length > 0 &&
                    favoriteMachines.map((item) => (
                        <li key={item.id}>
                            <FavoritesCard 
                                name={item.name} 
                                type={item.type}
                                img={item.img}
                            />
                        </li>
                    ))
                }
            </ul>
            <div className="inline-block mx-auto">
                <Button text='View All Machines' />
            </div>
        </div>
    )
}

export default Favorites;