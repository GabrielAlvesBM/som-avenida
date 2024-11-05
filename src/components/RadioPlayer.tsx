import Image from 'next/image';
import Link from 'next/link';

const RadioPlayer = () => {
    return (
        <header className="flex fixed top-0 left-0 items-center justify-between w-full bg-blackBase px-1 cursor-default z-20">
            <iframe className='bg-[unset] w-[calc(100%-40px)] h-[62px] border-none overflow-hidden'
                src="https://d1uzdx1j6g4d0a.cloudfront.net/players/topo/22/202455/?socials=0&apps=true&identifier=Header+Radio+Player&source=13478"
                allow="autoplay" 
            ></iframe>

            <div className='flex items-center gap-1 min-w-[30px] mr-[10px] -translate-x-4 custom-375:translate-x-0'>
                <Link className='min-w-[25px]' href="https://www.instagram.com/somavenidaitaperuna/" target='_blank' title='Instagram'>
                    <Image className='hover:scale-105'
                        src="/svgs/icon-insta30.svg"
                        alt='Instagram Icon'
                        width={30}
                        height={30}
                    />
                </Link>
                <Link className='min-w-[25px]' href="https://api.whatsapp.com/send/?phone=5522992131751&text&type=phone_number&app_absent=0" target='_blank' title='Instagram'>
                    <Image className='hover:scale-105'
                        src="/svgs/icon-whatsapp.svg"
                        alt='Instagram Icon'
                        width={26}
                        height={30}
                    />
                </Link>
            </div>
        </header>
    );
}

export default RadioPlayer;

