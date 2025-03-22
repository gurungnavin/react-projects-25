import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ list = [] }) => {
  // This component is a Menu List(No.2), similar to a primary menu
  // This component is Father of MenuItem of Son of MenuTree
    return (
        <ul>
            {list.map((listItem, index) => (
                <MenuItem key={index} item={listItem} />
            ))}
        </ul>
    );
};

export default MenuList;
