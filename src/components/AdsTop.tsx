import Image from 'next/image';

const AdsRight = () => {
    return (
        <div className="max-w-[1100px] bg-adsBg md:mx-2">
            <Image className='w-full col-span-2'
                src="/images/ads-braseiro.png"
                alt="Ads Do Braseiro"
                width={1500}
                height={150}
            />
            <Image className='hidden w-full col-span-2'
                src="/images/ads-paguemenos.jpg"
                alt="Ads Do Pague Menos"
                width={325}
                height={150}
            />
        </div>
    );
};

export default AdsRight;