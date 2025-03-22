import React from 'react';
import MenuList from './MenuList';
import { menus } from './index.js';

const MenuTree = () => {

//🔁 The Recursion Chain (Your Code):
// MenuTree ➔ MenuList ➔ MenuItem ➔ MenuList ➔ MenuItem ... (Repeats until all children are displayed)
// This component is grandFather
    return (
        <div>
            <MenuList list={menus} />
        </div>
    );
};

export default MenuTree;
