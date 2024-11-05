'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AdsTop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
          image: '/images/ads-braseiro.png',
          url: 'https://lojasbraseiro.com.br'
        },
        {
          image: '/images/ads-paguemenos.jpg',
          url: 'https://www.instagram.com/lojaopaguemenosbhitaperuna/'
        }
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
                  <Link className="min-w-full" href={src.url} target='_blank' key={index}>
                    <div className="min-w-full" key={index}>
                        <Image className='w-full rounded-xl'
                            src={src.image} 
                            alt={`Imagem ${index + 1}`} 
                            width={1000}
                            height={250}
                        />
                    </div>
                  </Link>
                ))}
            </div>

            <button className="absolute top-1/2 right-2 transform -translate-y-1/2
            bg-blackBase opacity-90 text-whiteBase p-2 rounded-full z-10" onClick={nextImage}>❯</button>
        </div>   
    );
};

export default AdsTop;