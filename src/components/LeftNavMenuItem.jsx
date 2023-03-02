import React from 'react';

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        'flex items-center h-10 px-3 text-sm text-white cursor-pointer mb-[1px] rounded-lg hover:bg-white/[0.15] ' +
        className
      }
      onClick={action}
    >
      <span className='mr-5 text-xl'>{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
