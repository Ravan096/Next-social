'use client'
import { EllipsisVertical, Heart, MessageCircle, Phone, Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
type Favourites ={
    [key: string] : boolean;
}

type Contact = {
    id: string;
    name: string;
    email: string;
    phone: string;
    img: string;
};

const ChatContacts = () => {
    const [addToFav, setAddToFav]  = useState<Favourites>({});

    const contacts : Contact[] = [
        { id: 'contact1', name: 'Amelia', email: 'amelia2134@gmail.com', phone: '+1(222) 3564 2345', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact2', name: 'John', email: 'john.doe@gmail.com', phone: '+1(123) 4567 8901', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact3', name: 'Sophia', email: 'sophia@example.com', phone: '+1(987) 6543 2100', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact4', name: 'Liam', email: 'liam@example.com', phone: '+1(444) 1234 5678', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact5', name: 'Olivia', email: 'olivia@example.com', phone: '+1(555) 9876 5432', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact6', name: 'William', email: 'william@example.com', phone: '+1(666) 7890 1234', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact7', name: 'Emma', email: 'emma@example.com', phone: '+1(777) 2345 6789', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact8', name: 'James', email: 'james@example.com', phone: '+1(888) 3456 7890', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact9', name: 'Isabella', email: 'isabella@example.com', phone: '+1(999) 4567 8901', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact10', name: 'Benjamin', email: 'benjamin@example.com', phone: '+1(101) 5678 9012', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact11', name: 'Mia', email: 'mia@example.com', phone: '+1(202) 6789 0123', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { id: 'contact12', name: 'Alexander', email: 'alexander@example.com', phone: '+1(303) 7890 1234', img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
    ];
    

    const AddToFavHandle = (contactId : string) => {
        setAddToFav((prevFavorites : Favourites) => ({
            ...prevFavorites,
            [contactId]: !prevFavorites[contactId],
        }));
    };
    return (
        <div className="chatcontacts border-2 border-red-400 w-full h-full">
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
            <div className='border-2 flex flex-wrap justify-around gap-4'>

                {
                    contacts.map((contact) =>(
                        <div className=' h-80 w-96 bg-lime-950 text-white ' key={contact.id}>
                    <div className='flex  h-[15%] justify-center'>
                        <div className='w-[80%] h-full flex items-center justify-between'>
                        <div className='border-[1px] border-black p-1 cursor-pointer tooltip' onClick={()=>{AddToFavHandle(contact.id)}} data-tip="Favourite">
                            <Heart color='red' fill={addToFav[contact.id] ? 'red' : ''}/>
                        </div>
                        <div className=' p-1 bg-black'>
                            <EllipsisVertical />
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-around flex-col items-center  h-[85%]'>
                        <div className=''>
                            <div className="avatar">
                                <div className="w-20 rounded">
                                    <img src={contact.img} />
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center justify-around flex-col'>
                            <p>{contact.name}</p>
                            <p className='text-sm mt-1'>{contact.email}</p>
                            <p className='text-xs font-extralight mt-1'>{contact.phone}</p>
                        </div>
                        <div className='flex '>
                            <div className='flex border-[1px] text-[lime] border-lime-400 p-1 m-1 cursor-pointer hover:bg-[lime] hover:text-black'>
                                <Phone />
                                <p className=''>Contact</p>
                            </div>
                            <div className='flex border-[1px] border-lime-400 p-1 m-1 cursor-pointer text-[lime] hover:bg-[lime] hover:text-black'>
                                <MessageCircle/>
                                <p className=''>Message</p>
                            </div>
                        </div>
                    </div>
                </div>
                    ))
                }


            </div>
            {/* list of contacts end here---------------------------------------- */}
        </div>
    )
}

export default ChatContacts