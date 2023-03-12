/* eslint-disable indent */
'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleDoubleClick = () => {
    setClickCount(clickCount + 1) ? (clickCount === 1) : setIsOpen(true);
    console.log('You found the easter egg!');
  };

  return (
    <p onDoubleClick={handleDoubleClick} 
      style={ 
        {color: (isOpen === true )
        ? 'transparent'
        : '#242321'
      }}>Jenny Nguyen Öberg</p>
  );
}