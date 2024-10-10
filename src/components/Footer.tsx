import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flex flex-col justify-between items-center gap-3 w-full p-3 bg-footerColor custom-500:flex-row">
            <div className='flex flex-col text-sm'>
                <p>Todos os direitos reservados.</p>
                <p>Desenvolvido por Gabriel Alves</p>
            </div>
            <div className='flex flex-col gap-2 mb-7 custom-500:mb-0'>
                <Link href="/" className='py-1 px-4 rounded-[5px] bg-myLightBlack2 hover:underline'>Página Inicial</Link>
                <Link href="/comments" className='py-1 px-4 rounded-[5px] bg-myLightBlack2 hover:underline'>Comentários</Link>
            </div>
        </footer>
    )
};

export default Footer;