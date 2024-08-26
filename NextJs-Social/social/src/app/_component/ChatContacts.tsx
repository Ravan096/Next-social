import { EllipsisVertical, Heart, MessageCircle, Phone, Plus, Search } from 'lucide-react'
import React from 'react'

const ChatContacts = () => {
    return (
        <div className="chatcontacts border-2 border-red-400 w-full">
            {/* chat contacts heading section start--------------------------------- */}
            <div className='flex border-2 border-black h-16 justify-around items-center'>
                <div className='w-[20%] border-2 h-full flex items-center justify-center'>
                    <p className='text-xl'>Contacts</p>
                </div>
                <div className='flex w-[70%] border-2 h-full justify-end items-center space-x-4 p-2'>
                    <input
                        type="text"
                        placeholder='Search Contacts'
                        className='border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500'
                    />
                    <div className='flex space-x-2'>
                        <div className='border-2 border-gray-300 p-2 rounded-md' >
                            <Search />
                        </div>
                        <div className='border-2 border-gray-300 p-2 rounded-md' >
                            <EllipsisVertical />
                        </div>
                        <div className='border-2 border-gray-300 p-2 rounded-md' >
                            <Plus />
                        </div>
                    </div>
                </div>
            </div>
            {/* chat contacts heading section end --------------------------------- */}
            {/* list of contacts start here---------------------------------------- */}
            <div className='border-2'>
                <div className='border-2 border-pink-600 h-80 w-96'>
                    <div className='flex border-2 items-center justify-between'>
                        <div>
                            <Heart />
                        </div>
                        <div>
                            <EllipsisVertical />
                        </div>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <div className="avatar">
                            <div className="w-20 rounded">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div>
                            <p>Amelia</p>
                            <p>emiley2134@gmail.com</p>
                            <p>+1(222) 3564 2345</p>
                        </div>
                        <div className='flex'>
                            <div className='flex'>
                                <Phone/>
                                <p>Contact</p>
                            </div>
                            <div className='flex'>
                                <MessageCircle/>
                                <p>Message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* list of contacts end here---------------------------------------- */}
        </div>
    )
}

export default ChatContacts