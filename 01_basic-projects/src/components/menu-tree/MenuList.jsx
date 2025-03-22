import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ list = [] }) => {
  // This component is a Menu List(No.2), similar to a primary menu
  // This component is Father of MenuItem of Son of MenuTree
    return (
        <ul className='w-full flex flex-col justify-center py-4'>
           {
            list && list.length 
            ? list.map((listItem, index) => <MenuItem key={index} item={listItem}/>)
            : null
           }
        </ul>
    );
};

export default MenuList;
