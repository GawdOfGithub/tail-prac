import React from 'react';
import Image from 'next/image';
interface HomeProps {
  
}

const Home = ({  }: HomeProps) => {
  return (
    <div className='columns-1'>
      <Image
        src="/image1.jpg"
        alt="image"
         height={500}
         width={500}
    
      
         className="w-full  aspect-video hover:aspect-square max-sm:aspect-square"
      />
            <Image
        src="/image7.jpg"
        alt="image"
        height={1000}
        width={1000}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-auto aspect-video"
       
      />
            <Image
        src="/image1.jpg"
        alt="image"
        height={1000}
        width={1000}
        className="w-full h-auto aspect-video"
        
        
       
      />
            <Image
        src="/image4.jpg"
        alt="image"
        height={1000}
        width={1000}
        
        className="w-full h-auto aspect-video"
       
      />
            <Image
        src="/image5.jpg"
        alt="image"
        height={1000}
        width={1000}
        
        className="w-full h-auto aspect-video"
       
      />
            <Image
        src="/image6.jpg"
        alt="image"
        height={1000}
        width={1000}
        
        className="w-full h-auto aspect-video"
       
      />
            <Image
        src="/image7.jpg"
        alt="image"
        height={1000}
        width={1000}
        
        className="w-full h-auto aspect-video"
       
      />
            <Image
        src="/image8.jpg"
        alt="image"
        height={1000}
        width={1000}
        
        className="w-full h-auto aspect-video"
       
      />
      
    </div>
  );
};

export default Home;