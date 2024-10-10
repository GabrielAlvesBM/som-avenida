import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});

const FormComment = () => {
    return (
        <section className="w-full p-3 bg-myLightBlack2 md:max-w-[450px]">
            <form action="" method="POST" className={`${montserrat.className} grid p-3 bg-myLightBlack`}>
                <div className="mb-3">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" minLength={3} maxLength={30} required 
                    className="w-full h-[33px] mt-1 p-1 text-black" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required 
                    className="w-full h-[33px] mt-1 p-1 text-black" />
                </div>
                <div className="mb-3">
                    <label htmlFor="city">Cidade:</label>
                    <input type="text" name="city" id="city" minLength={2} 
                    className="w-full h-[33px] mt-1 p-1 text-black" />
                </div>
                <div className="mb-3">
                    <label htmlFor="state">Estado:</label>
                    <input type="text" name="state" id="state" minLength={2} 
                    className="w-full h-[33px] mt-1 p-1 text-black" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message">Mensagem:</label>
                    <textarea name="message" id="message" minLength={2} maxLength={750} required
                    className="w-full min-h-[200px] mt-1 p-1 text-black" ></textarea>
                </div>

                <button type="submit" className="max-w-[150px] py-3 px-7 mx-auto mb-2 rounded-[10px] bg-base">Comentar</button>
            </form>
        </section>
    );
};

export default FormComment;