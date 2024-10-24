import Image from 'next/image';

const AdsRight = () => {
    return (
        <div className="grid grid-cols-2 gap-2 w-full p-1 mx-auto bg-adsBg md:max-w-[250px] md:ml-2 md:grid-cols-none">
            
            <Image className='w-full max-w-[250px] md:max-w-none'
                src="/images/ads-gildogas.jpeg"
                alt="Ads Do Gil do Gas"
                width={250}
                height={150}
            />
            <Image className='w-full max-w-[250px] md:max-w-none'
                src="/images/ads-cafeluana.png"
                alt="Ads Do Café Luana"
                width={250}
                height={150}
            />
            <Image className='col-span-2 mx-auto w-full max-w-[250px] md:max-w-none md:col-span-full'
                src="/images/ads-renovo.jpeg"
                alt="Ads Do Restaurante Renovo"
                width={250}
                height={150}
            />
            <Image className='col-span-2 mx-auto w-full max-w-[250px] md:max-w-none md:col-span-full'
                src="/images/ads-apae.jpeg"
                alt="Ads Da Apae"
                width={250}
                height={150}
            />
        </div>
    );
};

export default AdsRight;