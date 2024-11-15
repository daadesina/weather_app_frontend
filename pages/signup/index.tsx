import Link from "next/link"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Signup () {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('https://weather-app-backend-u06g.onrender.com/register', { username, email, password });
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div 
            className=" bg-[url('@/public/night_bg.png')] bg-cover bg-center h-screen w-full flex justify-center items-center"
            >
                <div className=" bg-[url('@/public/night_bg.png')] bg-cover bg-center border text-white h-[35rem] w-72 rounded-xl p-3 text-center flex justify-center items-center">
                    <div>
                        <p className="font-serif font-bold text-2xl">Sign Up</p>
                        <p className=" pt-1 font-serif">Sign up to experience accurate weather forecasts at your fingertips!</p>

                        <form onSubmit={handleSubmit} className="mt-7 text-black">
                            <input type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} required className=" rounded-xl pl-2" /> <br />
                            <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} required className=" mt-4 rounded-xl pl-2" /> <br />
                            <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} required className=" mt-4 rounded-xl pl-2" /> <br />
                            <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 w-20 rounded-full mt-10">Register</button>
                        </form>
                        <p className=" mt-16 text-black font-black text-sm">Already have an account ? <Link href='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}