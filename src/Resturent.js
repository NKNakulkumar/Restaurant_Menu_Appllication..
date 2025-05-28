import React, { useState } from 'react';
import menu from './menuApi.js';
import "./style.css";
import Menucard from './menucard.js';
import Navbar from './Navbar.js';


const uniqueList = [
    ...new Set(menu.map((curElem) => {
        return curElem.category;
    })
    ) ,"All",
];

const Resturent = () => {
    const [menuData, setMenuData] = useState(menu);
    const [menuList]=useState(uniqueList);
    const filterItem = (category) => {
        if (category==="All")
        {
            setMenuData(menu);
            return;
        }


        const updatedList = menu.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem}menuList={menuList} />
            <Menucard menuData={menuData} />
        </>
    )
}

export default Resturent;
// setMenuData