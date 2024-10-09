import Image from 'next/image';

const AdsRight = () => {
    return (
        <div className="w-full max-w-[1100px] bg-adsBg md:mx-2">
            <Image className='w-full'
                src="/images/ads-braseiro.png"
                alt="Ads Do Braseiro"
                width={1500}
                height={150}
            />
            <Image className='hidden w-full'
                src="/images/ads-paguemenos.jpg"
                alt="Ads Do Pague Menos"
                width={325}
                height={150}
            />
        </div>
    );
};

export default AdsRight;