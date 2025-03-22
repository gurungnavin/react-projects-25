import React from 'react';
import MenuList from './MenuList';

const MenuItem = ({ item }) => {

  // This component represents a single menu item, which can have sub-menu items if children exist.
  // This component is a child of MenuList or grandchild of MenuTree
    return (
        <li>
          <div>
            <p>{item.label}</p>
            {item && item.children && item.children.length > 0 ? 
            (
              <MenuList list={item.children}/>
            )
            : null}
          </div>
        </li>
    );
};

export default MenuItem;
