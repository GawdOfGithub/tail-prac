import React from 'react';

interface HoverProps {
  
}

const Hover = ({  }: HoverProps) => {
  return (
    <div className="grid place-items-center h-full w-full transition-colors duration-5000  bg-blue-400 hover:bg-purple-400 group ease-in-out delay-300" >
    <div className='h-5 w-5 bg-black group-hover:bg-red-600'></div>
      <div className='h-5 w-5 bg-black group-hover:bg-blue-600'></div>
    </div>
  );
};

export default Hover;