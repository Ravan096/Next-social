import { Search, Settings, History, Users, Phone, CheckCheck, Video, EllipsisVertical, Plus } from 'lucide-react'
import React from 'react'

const Message = () => {
  return (
    <div className='main border-2 border-red-600 grid grid-cols-4 w-full'>

      <div className='main1 border-2 border-black col-start-1 col-end-2'>
        <div className='flex w-full border-2 border-black items-center justify-around'>
          <p>Messages</p>
          <Settings />
        </div>
        <div className='flex w-full border-2 border-black items-center justify-around'>
          <input type="text" placeholder='Search Chat' />
          <Search />
        </div>
        <div className='flex justify-between'>
          <div className='flex'>
            <History />
            <p>Recent</p>
          </div>
          <div className='flex'>
            <Users />
            Groups
          </div>
          <div className='flex'>
            <Phone />
            Calls
          </div>
        </div>
        <div>
          <div>
            <p>Active Chats</p>
          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div>
            <p>
              All Chats
            </p>
          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <div className='flex justify-around'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>is the project is completed?</p>
            </div>
            <div>
              <p>
                05:30AM
              </p>
              <CheckCheck />
            </div>

          </div>
          <button className='bg-green-500 p-2 rounded-xl w-12 flex items-center justify-center'>
            <Plus />
          </button>
        </div>
      </div>

      <div className='main2 border-2 border-pink-400 col-start-2 col-end-4'>
        <div className='border-2 border-cyan-400'>
          <div className='flex justify-around items-center'>
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <p>Alexia</p>
              <p>Online</p>
            </div>
            <div className='flex'>
              <Phone />
              <Video />
              <EllipsisVertical />
            </div>
          </div>
        </div>
      </div>

      <div className='main3 border-2 border-purple-600 col-start-4 col-end-5'>
        <h1>User Profile Details Section</h1>
      </div>
    </div>

  )
}

export default Message