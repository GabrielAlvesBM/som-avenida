import Link from 'next/link';
import Image from 'next/image';

const AdsRight = () => {
    return (
        <div className="grid gap-2 w-full p-1 mx-auto bg-adsBg md:max-w-[250px] md:ml-2">
            <Link href="https://www.instagram.com/gildogas_deposito/" target='_blank'>
                <Image className='mx-auto w-full max-w-[250px] rounded-xl md:max-w-none'
                    src="/images/ads-gildogas.jpeg"
                    alt="Ads Do Gil do Gas"
                    width={250}
                    height={150}
                />
            </Link>
            <Link href="https://www.instagram.com/renovo_restaurante/" target='_blank'>
                <Image className='mx-auto w-full max-w-[250px] rounded-xl md:max-w-none'
                    src="/images/ads-renovo.jpeg"
                    alt="Ads Do Restaurante Renovo"
                    width={250}
                    height={150}
                />
            </Link>
            <Link href="https://itaperuna.apaerj.org.br/doacao" target='_blank'>
                <Image className='mx-auto w-full max-w-[250px] rounded-xl md:max-w-none'
                    src="/images/ads-apae.jpeg"
                    alt="Ads Da Apae"
                    width={250}
                    height={150}
                />
            </Link>
            <Link href="https://www.cafeluana.com.br" target='_blank'>
                <Image className='mx-auto w-full max-w-[250px] rounded-xl md:max-w-none'
                    src="/images/ads-cafeluana.png"
                    alt="Ads Do Café Luana"
                    width={250}
                    height={150}
                />
            </Link>
        </div>
    );
};

export default AdsRight;