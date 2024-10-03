'use client';

import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [volume, setVolume] = useState<number>(50);

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    };

    return (
        <header className="bg-blackBase p-[5px]">
            <div className='flex items-center justify-between w-[425px] h-[50px] rounded-full bg-myBlackGray'>
                <button className='flex items-center justify-center size-[45px] ml-[3px] rounded-full bg-base'>
                    <Image className='text-whiteBase'
                        src="/svgs/play.svg"
                        alt="Play Button" 
                        width={23}
                        height={23}
                    />
                </button>

                <p className='flex-1 mx-[7.5px] overflow-hidden text-nowrap text-sm text-myLightGray font-light'>Rádio Avenida - Itaperuna com Avenida Cardoso Moreira</p>

                <div className='flex items-center gap-[2px]'>
                    <Image className='text-whiteBase cursor-pointer'
                        src="/svgs/volume.svg"
                        alt='Volume Control'
                        width={25}
                        height={25}
                    />
                    <input className='range-input w-[100px] h-[8px] mr-[20px] rounded-lg cursor-pointer appearance-none bg-rangeInput'
                        type="range" 
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        style={{
                            '--value': `${volume}%`,
                        } as React.CSSProperties}
                    />
                </div>   
            </div>
        </header>
    );
};

export default Header;