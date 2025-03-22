import React, { useState } from 'react';
import MenuList from './MenuList';
import { menus } from './index.js';

const MenuTree = () => {
    const [width, setWidth] = useState(220); // Default width (60 * 4px = 240px)

    const handleMouseDown = (e) => {
        const startX = e.clientX;
        const startWidth = width;

        const onMouseMove = (e) => {
            const newWidth = Math.min(450, Math.max(240, startWidth + (e.clientX - startX))); // Minimum width is 240px, maximum width is 450px
            setWidth(newWidth);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    return (
        <div
            className="min-h-lvh bg-blue-500 cursor-pointer relative"
            style={{ width: `${width}px` }}
        >
            <MenuList list={menus} />
            <div
                className="absolute top-0 right-0 h-full w-2 bg-gray-300 cursor-ew-resize"
                onMouseDown={handleMouseDown}
            ></div>
        </div>
    );
};

export default MenuTree;
