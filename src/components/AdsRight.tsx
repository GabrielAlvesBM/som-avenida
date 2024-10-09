import Image from 'next/image';

const AdsRight = () => {
    return (
        <div className="grid gap-0.5 w-full max-w-[250px] p-1 mx-auto bg-adsBg">
            <Image className='w-full'
                src="/images/ads-gildogas.jpeg"
                alt="Ads Do Gil do Gas"
                width={250}
                height={150}
            />
            <Image className='w-full'
                src="/images/ads-cafeluana.png"
                alt="Ads Do Café Luana"
                width={250}
                height={150}
            />
            <Image className='w-full'
                src="/images/ads-renovo.jpeg"
                alt="Ads Do Restaurante Renovo"
                width={250}
                height={150}
            />
        </div>
    );
};

export default AdsRight;