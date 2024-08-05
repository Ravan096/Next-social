'use client'
import { Chrome, Eye, EyeOff, Facebook, Feather, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Signup = () => {
    const [showPassword , setShowPassword] = useState<boolean>(false);
    const [fullName , setFullName] = useState<string | null>();
    const [password , setPassword]= useState<string | null>();
    const [confirmPassword , setConfirmPassword]= useState<string | null>();
    const handleSignUp = ()=>{
        if (password !== confirmPassword){
            console.log("password not match")
        }else{
            console.log(fullName);
            console.log(password);
            console.log(confirmPassword)
        }
    }
  return (
    <>
    <div className='border-2 border-red-600 w-full h-[90vh] flex items-center justify-center bg-black'>
        <div className='border-2 border-green-600 h-3/4 w-2/6 bg-[#1e2b2e] text-white'>
            <div className='w-full h-full'>
                <div className='border-2 border-white flex flex-col items-center justify-center'>
                    <Feather />
                    <h2>SocialFi</h2>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Sign Up</h3>
                    <p>Welcome! Begin by creating your account. !</p>
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
                        <p>Full Name</p>
                        <input type="text" placeholder='user name' className='text-black' onChange={(e)=> setFullName(e.target.value)} required/>
                    </div>
                    <div>
                        <p>Password</p>
                        <div>
                        <input type={showPassword ? 'text': 'password'} className='text-black' placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
                        <button onClick={()=> setShowPassword((showPassword)=> !showPassword)}>
                            {
                                showPassword ? <EyeOff/>  : <Eye/>
                            }
                        </button>
                        </div>
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <div>
                        <input type={showPassword ? "text" : "password"} className='text-black' placeholder='password' onChange={(e)=> setConfirmPassword(e.target.value)}/>
                        <button onClick={()=> setShowPassword((showPassword)=> !showPassword)}>
                            {
                                showPassword ? <EyeOff/>  : <Eye/>
                            }
                        </button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <button className='w-full bg-pink-800' onClick={handleSignUp}>
                            Create Account
                        </button>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p>Already have an account? </p>
                        <Link href="/login">Sign in</Link>
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

export default Signup