"use client";

import { useState } from 'react';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400']
});

const FormComment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, content: message }),
        })

        if (res.ok) {
            setName('');
            setEmail('');
            setCity('');
            setState('');
            setMessage('');
            alert('Comentário Enviado!');
        } else {
            alert('Falha ao enviar o comentário.');
        }
    };
 
    return (
        <section className="w-full p-3 bg-myLightBlack2 md:max-w-[450px]">
            <form onSubmit={ handleSubmit } className={`${montserrat.className} grid p-3 bg-myLightBlack`}>
                <div className="mb-3">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" minLength={3} maxLength={30} required 
                    value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full h-[33px] mt-1 p-1 text-black bg-formInputColor" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[33px] mt-1 p-1 text-black bg-formInputColor" />
                </div>

                <div className="mb-3">
                    <label htmlFor="city">Cidade:</label>
                    <input type="text" name="city" id="city" minLength={2} 
                    value={city} onChange={(e) => setCity(e.target.value)}
                    className="w-full h-[33px] mt-1 p-1 text-black bg-formInputColor" />
                </div>

                <div className="mb-3">
                    <label htmlFor="state">Estado:</label>
                    <input type="text" name="state" id="state" minLength={2}
                    value={state} onChange={(e) => setState(e.target.value)}
                    className="w-full h-[33px] mt-1 p-1 text-black bg-formInputColor" />
                </div>

                <div className="mb-3">
                    <label htmlFor="message">Mensagem:</label>
                    <textarea name="message" id="message" minLength={2} maxLength={750} required
                    value={message} onChange={(e) => setMessage(e.target.value)}
                    className="w-full min-h-[200px] mt-1 p-1 text-black bg-formInputColor" ></textarea>
                </div>

                <button type="submit" className="max-w-[150px] py-3 px-7 mx-auto mb-2 rounded-[10px] bg-base">Comentar</button>
            </form>
        </section>
    );
};

export default FormComment;