import { Search, Settings, History, Users, Phone, CheckCheck, Video, EllipsisVertical, Plus, Laugh, SendHorizontal } from 'lucide-react'
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

      <div className='main2 border-2 border-pink-00 col-start-2 col-end-4'>
        <div className='border-2 border-cyan-400 h-20'>
          <div className='flex justify-around items-center border-2 border-black h-full'>
            <div className='w-[70%] border-2 border-red-500 h-full'>
              <div className='w-[30%] border-2 border-black flex items-center justify-around'>
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div>
                  <p className='font-bold'>Alexia</p>
                  <p className='font-semibold text-sm'>Online</p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-around border-2 border-red-600 w-[30%] h-full'>
              <div className="p-2 border border-solid border-primary bg-green-200">
                <Phone color='green' />
              </div>
              <div className="p-2 border border-solid border-primary bg-green-200">
                <Video color='green' />
              </div>
              <div className="p-2 border border-solid border-primary bg-green-200">
                <EllipsisVertical color='green' />
              </div>
            </div>
          </div>
        </div>

        <div className='border-2 border-purple-600 min-h-full'>
          <div className='chat-section h-full w-full'>
            <div className='flex items-center justify-center '>
              <span className='text-sm text-black bg-green-200 rounded-md'>Today</span>
            </div>
            <div className=' border-2 border-green-700'>
              <div>
              <div className='flex border-2 border-black w-[20%]  justify-around'>
                <div className='border-2 border-red-400'>
                  <div className="avatar online">
                    <div className="w-8 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex border-2 border-green-500 items-start h-full text-xs font-semibold'>
                    <p>Katrina</p>
                    <p className='ml-2'>10:12PM</p>
                  </div>
                </div>
              </div>
              <div>
                <p>hi</p>
              </div>
              <div>how are you?</div>
              </div>
            </div>
          </div>

          <div className='border-2 border-black flex justify-between items-center relative bottom-0'>
            <div className='w-[88%]'>
            <input type="text" placeholder='type your message here...' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </div>
            <div className='p-2 border border-solid border-primary bg-green-200'>
            <Laugh />
            </div>
            <div className='p-2 border border-solid border-primary bg-green-200'>
            <SendHorizontal />
            </div>
          </div>
        </div>
      </div>

      <div className='main3 border-2 border-purple-600 col-start-4 col-end-5'>
        <div className='border-2 border-green-700'>
        <div className="avatar online">
                    <div className="w-20 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
        </div>
        <div>
          <p>Alexia</p>
          <p>alexia@gmail.com</p>
        </div>
      </div>
    </div>

  )
}

export default Message