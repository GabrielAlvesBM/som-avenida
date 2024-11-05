'use client'

import { useState } from 'react';
import Image from 'next/image';

const AdsTop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/images/ads-braseiro.png',
        '/images/ads-paguemenos.jpg',
    ];

    const showImage = (index: number) => {
        if (index >= images.length) {
          setCurrentIndex(0);
        } else if (index < 0) {
          setCurrentIndex(images.length - 1);
        } else {
          setCurrentIndex(index);
        }
      };

      const nextImage = () => showImage(currentIndex + 1);
      const prevImage = () => showImage(currentIndex - 1);

    return (
        <div className="relative w-full max-w-[1000px] rounded-xl overflow-hidden md:mx-auto">
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 
            bg-blackBase opacity-90 text-whiteBase p-2 rounded-full z-10" onClick={prevImage}>❮</button>

            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                <div className="min-w-full" key={index}>
                    <Image className='w-full rounded-xl'
                        src={src} 
                        alt={`Imagem ${index + 1}`} 
                        width={1000}
                        height={250}
                    />
                </div>
                ))}
            </div>

            <button className="absolute top-1/2 right-2 transform -translate-y-1/2
            bg-blackBase opacity-90 text-whiteBase p-2 rounded-full z-10" onClick={nextImage}>❯</button>
        </div>   
    );
};

export default AdsTop;