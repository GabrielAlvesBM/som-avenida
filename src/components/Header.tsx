'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [volume, setVolume] = useState<number>(50);

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    };

    return (
        <header className="flex items-center justify-between bg-blackBase p-[5px]">
            <div className='flex items-center justify-between max-w-[425px] h-[50px] rounded-full bg-myBlackGray'>
                <button className='flex items-center justify-center size-[45px] ml-[3px] rounded-full bg-base'>
                    <Image className='text-whiteBase'
                        src="/svgs/play.svg"
                        alt="Play Button" 
                        width={23}
                        height={23}
                    />
                </button>

                <p className='hidden flex-1 mx-[7.5px] overflow-hidden text-nowrap text-sm text-myLightGray font-light
                custom-500:block'>Rádio Avenida - Itaperuna com Avenida Cardoso Moreira</p>

                <div className='flex flex-1 items-center gap-[2px] ml-2 custom-500:flex-none custom-500:ml-0'>
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

            <div className='min-w-[30px] mr-[10px]'>
                <Link href="https://www.instagram.com/somavenidaitaperuna/" target='_blank' title='Instagram'>
                    <Image className='hover:scale-105'
                        src="/svgs/icon-insta30.svg"
                        alt='Instagram Icon'
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;