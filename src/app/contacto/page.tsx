'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com'; // Importa EmailJS

const Contacto = () => {
    // Definir los estados para los datos del formulario, errores y si fue enviado
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "", // Agregamos el mensaje
    });

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        message?: string;
    }>({});
    const [isSubmitted, setIsSubmitted] = useState(false); // Indica si se envió correctamente

    // Validar los datos del formulario
    const validate = (): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        const newErrors: { [key: string]: string } = {};

        if (!formData.email) {
            newErrors.email = "El campo de email es obligatorio";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Correo inválido";
        }

        if (!formData.name) {
            newErrors.name = "El campo de nombre es obligatorio";
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "El nombre solo puede tener letras y espacios";
        }

        if (!formData.message.trim()) {
            newErrors.message = "El mensaje es obligatorio";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Manejo del envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            // Usar EmailJS para enviar el formulario
            emailjs
                .send(
                    'service_kel123', // Reemplaza con tu Service ID
                    'template_7ta46l7', // Reemplaza con tu Template ID
                    {
                        from_name: formData.name,
                        email_id: formData.email,
                        mensaje: formData.message,
                    },
                    'pM1BlIzjrs9sRCCvn' // Reemplaza con tu Public Key
                )
                .then((response) => {
                    console.log('Email enviado correctamente:', response);
                    setIsSubmitted(true);
                    alert('Formulario enviado correctamente');
                    setFormData({ name: "", email: "", message: "" }); // Resetea los campos
                    setErrors({});
                })
                .catch((error) => {
                    console.error('Error al enviar el formulario:', error);
                    alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
                });
        } else {
            console.log('Formulario no válido');
        }
    };

    // Manejo de cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-6">
                    <div className="lg:w-1/2 lg:mx-6">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                            Contáctanos para <br /> más información
                        </h1>

                        <div className="mt-6 space-y-8 mb-4 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#E03122] dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href='mailto:cotiza@buenasweb.com?subject=Consulta%20sobre%20servicios&body=Hola%2C%20quisiera%20saber%20más%20detalles.' className="mx-2 cursor-pointer text-gray-700 hover:text-gray-950 truncate w-72 dark:text-gray-400">cotiza@buenasweb.com</a>
                            </p>
                        </div>
                        <Image src="/trabajando.jpg" alt="contáctanos para trabajos" width={450} height={150} className="rounded-2xl" />
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-900/60 ">
                            <h1 className="text-2xl align-center font-bold text-gray-900">Haz tu Consulta </h1>

                            <form onSubmit={handleSubmit} className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombres y apellidos</label>
                                    <input
                                        type="text"
                                        placeholder="Nombres y apellidos"
                                        name="name"
                                        onChange={handleChange}
                                        value={formData.name}
                                        className={`block w-full px-5 py-3 mt-2 border-gray-600 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:ring-opacity-40 ${
                                            errors.name ? "border-red-500" : "border-gray-300"
                                        }`}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Correo electrónico</label>
                                    <input
                                        type="email"
                                        placeholder="empresa@ejemplo.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-gray-600 bg-white border rounded-md focus:ring-opacity-40 ${
                                            errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Consulta</label>
                                    <textarea
                                        name="message"
                                        placeholder="Escribe tu mensaje"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-gray-600 bg-white border rounded-md focus:ring-opacity-40 ${
                                            errors.message ? "border-red-500" : "border-gray-300"
                                        }`}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize bg-gradient-to-r from-[#2042c9] to-[#E03122] rounded-md hover:bg-[#f74231] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
