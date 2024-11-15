import Link from "next/link";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://weather-app-backend-u06g.onrender.com/login', { username, password });
            
            // Store JWT in localStorage (or sessionStorage)
            localStorage.setItem('token', response.data.access_token);
            
            // Redirect to the homepage or protected page
            router.push('/weather');
        } catch (error) {
            // Handle any login errors
            if (axios.isAxiosError(error) && error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Login failed. Please try again.');
            }
        }
    };

    return (
        <div>
            <div 
            className=" bg-[url('@/public/night_bg.png')] bg-cover bg-center h-screen w-full flex justify-center items-center"
            >
                <div className=" bg-[url('@/public/night_bg.png')] bg-cover bg-center border text-white h-96 w-72 rounded-xl p-3 text-center flex justify-center items-center">
                    <div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <p className="font-serif font-bold text-2xl">Login</p>
                        <p className=" pt-1 font-serif">Welcome Back to the Weather App</p>
                        
                        <form onSubmit={handleSubmit} className="mt-7 text-black">
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className=" rounded-xl pl-2"
                            /> <br />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className=" mt-6 rounded-xl pl-2"
                            /> <br />
                            <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 w-20 rounded-full mt-10">Login</button>
                        </form>
                        <p className=" mt-10 text-black font-black text-sm">Don&apos;t have an account ? <Link href='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}