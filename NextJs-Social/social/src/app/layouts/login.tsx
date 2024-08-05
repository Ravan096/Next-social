'use client'
import { Chrome, Eye, EyeOff, Facebook, Feather, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, {Toaster} from 'react-hot-toast';

const Login = () => {
    const [userName, setUserName] = useState<string | null>();
    const [password, setPassword] = useState<string | null>();
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const router = useRouter();
    const logindata = {
        userName:"admin@mail.com",
        password:"admin"
    }

    const handleLogin = ()=>{
        if(userName === logindata.userName && password === logindata.password){
            toast.success("login successfully")
            router.push("/");
        }else{
            toast.error("Invalid username or password.")
        }
    }

    return (
        <>
        <Toaster/>
            <div className='border-2 border-red-600 w-full h-[90vh] flex items-center justify-center bg-black'>
                <div className='border-2 border-green-600 h-3/4 w-2/6 bg-[#1e2b2e] text-white'>
                    <div className='w-full h-full'>
                        <div className='border-2 border-white flex flex-col items-center justify-center'>
                            <Feather />
                            <h2>SocialFi</h2>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Sign In</h3>
                            <p>Welcome back !</p>
                        </div>
                        <div className='w-full border-2 border-white'>
                            <div className='flex items-center justify-around'>
                                <div className='border-[1px] border-white flex'>
                                <Chrome />
                                    <button> Signin with Google</button>
                                </div>
                                <div className='border-[1px] border-white flex'>
                                <Facebook /> 
                                    <button>Signin with Facebook</button>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <span>---------------</span> <p>OR</p> <span>---------------</span>
                            </div>
                        </div>

                        <div className='border-2 border-white w-full'>
                            <div >
                                <p>User Name</p>
                                <input type="text" placeholder='user name' className='bg-black' onChange={(e)=>setUserName(e.target.value)}/>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <p>Password</p>
                                    <a href="#">forget password ?</a>
                                </div>
                                <div className='flex'>
                                <input type={showPassword ? 'text' : 'password'} placeholder='password' className=' bg-black' onChange={(e)=>setPassword(e.target.value)}/>
                                <button onClick={()=> setShowPassword((showPassword)=>!showPassword)} className=' bg-gray-400 border-2 border-black  text-black'>
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                                </div>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" />
                                <p>Remember Password ?</p>
                            </div>
                            <div className='w-full'>
                                <button className='w-full bg-pink-800' onClick={handleLogin}>
                                    Sign in
                                </button>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p>Dont have an account? </p>
                                <Link href="/signup">Sign Up</Link>
                            </div>
                            <div className='flex itmes-center justify-center'>
                                <Facebook />
                                <Twitter />
                                <Instagram />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login