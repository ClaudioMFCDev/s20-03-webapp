"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

function App() {
    const ICON_COUNT = 40;

    const generateRandomPosition = () => ({
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    useEffect(() => {
        console.log("App component mounted or updated");
    });

    return (
        <section className="bg-[#4169E1] w-full h-screen flex items-center justify-start relative z-10 overflow-hidden">
            {Array.from({ length: ICON_COUNT }).map((_, index) => {
                const initialPosition = generateRandomPosition();

                return (
                    <motion.div
                        key={index}
                        initial={initialPosition}
                        animate={{
                            x: [initialPosition.x, -initialPosition.x],
                            y: [initialPosition.y, -initialPosition.y],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "anticipate",
                        }}
                        className="absolute"
                    >
                        <div className="w-20 h-20 bg-gradient-to-b via-gray-200 to-gray-400 shadow-2xl shadow-black rounded-full" />
                    </motion.div>
                );
            })}

            <section className="w-full h-full flex justify-end">
                <form
                    onSubmit={onSubmit}
                    className="bg-[#fcfcfcb4] h-full lg:w-[50%] backdrop-blur-md border border-white flex flex-col items-center justify-center shadow-black shadow-2xl z-50"
                >
                    <label htmlFor="email" className="mb-3 mt-5">Correo</label>
                    <Input
                        type="email"
                        className="w-60"
                        {...register("email", {
                            required: { value: true, message: "correo es requerido" },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Correo inválido",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-xs text-red-800">{errors.email.message}</span>
                    )}

                    <label htmlFor="password" className="mb-3 mt-5">Password</label>
                    <Input
                        type="password"
                        className="w-60"
                        {...register("password", {
                            required: { value: true, message: "Password es requerido" },
                        })}
                    />
                    {errors.password && (
                        <span className="text-xs text-red-800">{errors.password.message}</span>
                    )}

                    <button
                        type="submit"
                        className="bg-slate-950 text-white w-60 mt-5 rounded-sm py-[3px]"
                    >
                        Login
                    </button>
                </form>
            </section>
        </section>
    );
}

export default App;
