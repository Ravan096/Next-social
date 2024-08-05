'use client'
import { Bell, ChevronDown, ChevronLeft, ChevronRight, CircleAlert, TriangleAlert } from 'lucide-react'
import React, { ReactNode, useEffect, useState } from 'react'
// import { useChart } from '../../redux/store/store';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Switcher = () => {
    const [timePeriod, setTimePeriod] = useState('24 hours');
    const [group, setGroup] = useState('All servers');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [closeTimePeriodDropdown, setCloseTimePeriodDropdown] = useState(false);
    const [closeGroupTypeDropdown, setCloseGroupTypeDropdown] = useState(true);
    const pathname = usePathname();

    const handleTimePeriodChange = (e: any) => {
        setTimePeriod(e.target.value);
    };

    const handleGroupChange = (e: any) => {
        setGroup(e.target.value);
    };
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
  return (
    <div className={clsx('bg-base-100 relative border-s border-solid border-neutral-600/20 z-[10]', {
        "w-96 translate-x-0": isDrawerOpen,
        "w-0 translate-x-1": !isDrawerOpen,
        "hidden": pathname === "/login"
    })}>
        <div className=" p-1 rounded-lg mb-3">
            <div className="flex justify-between flex-col items-center mb-4 mt-1">
                <div className=' w-full'>
                    <div className='flex justify-between  items-center w-4/5'>
                        {/* <ChevronRight cursor={'pointer'} onClick={toggleDrawer} className='hover:bg-base-200 rounded-md text-grey-700 focus:outline-none focus:ring' /> */}
                        <Bell className="inline-block mr-2 ml-1 hover:bg-base-200 rounded-md  focus:outline-none focus:ring" fill='white' cursor={'pointer'} />
                        <p className="text-2xl font-medium tracking-normal ml-1"> Latest alerts</p>
                    </div>
                </div>

                <div className="flex flex-col w-full mt-1 ">
                    <div>
                        <p className='text-sm'>Alerts raised or updated in the last</p>
                    </div>

                    <div className='flex justify-between w-full'>
                        <div className="w-2/5 h-full relative z-[100]">
                            <label htmlFor="timePeriod" className="mr-2 text-xs font-semibold">Time period</label>
                            <div className="dropdown dropdown-bottom">
                                <label
                                    tabIndex={0}
                                    onClick={() => setCloseTimePeriodDropdown(!closeTimePeriodDropdown)}
                                    className="btn btn-sm m-1 px-0 flex justify-between w-full items-center border border-solid border-primary"
                                >
                                    <span className='ml-1'>{timePeriod}</span>
                                    <ChevronDown size={18} strokeWidth={1.25} className="ms-0" />
                                </label>
                                {closeTimePeriodDropdown &&
                                    <ul tabIndex={0} className="dropdown-content block z-[1] menu p-1 w-full shadow bg-base-100 rounded-box overflow-y-scroll h-auto max-h-20">
                                        {["24 hours", "7 days", "30 days"].map((item, index) => (
                                            <li key={index} onClick={() => { setTimePeriod(item); setCloseTimePeriodDropdown(!closeTimePeriodDropdown); }}>
                                                <a>{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>

                        <div className='w-1/5 min-h-full flex flex-col items-center justify-end'>
                            <p className='text-sm '>for</p>
                        </div>

                        <div className='w-2/5 h-full relative z-[100'>
                            <label htmlFor="server" className="mr-2 text-xs font-semibold">Server</label>
                            <div className="relative z-[100]">
                                <div className="dropdown dropdown-bottom">
                                    <label
                                        tabIndex={0}
                                        onClick={() => setCloseGroupTypeDropdown(!closeGroupTypeDropdown)}
                                        className="btn btn-sm m-1 px-0 w-full flex justify-between items-center border border-solid border-primary"
                                    >
                                        <span className='ml-1'>{group}</span>
                                        <ChevronDown size={18} strokeWidth={1.25} className='ms-0' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mb-2 p-2 rounded-lg">
            <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 bg-red-500 }`} />
                <div><CircleAlert fill='white' color='black' size={'36px'} className='mr-2' /></div>
                <div>
                    <div className=" text-xs">Machine Unreachable</div>
                    <div className="text-xs ">0 active alerts</div>
                </div>
            </div>
            <div className="bg-red-500 rounded-full px-2 py-1 text-sm">2</div>
        </div>
        <div className="flex justify-between items-center mb-2 p-2  rounded-lg">
            <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 bg-red-500 }`} />
                <div><CircleAlert fill='white' color='black' size={'36px'} className='mr-2' /></div>
                <div>
                    <div className="text-sm">Machine Unreachable</div>
                    <div className="text-xs ">0 active alerts</div>
                </div>
            </div>
            <div className="bg-red-500 rounded-full px-2 py-1 text-sm">2</div>
        </div>
        <div className="flex justify-between items-center mb-2 p-2  rounded-lg">
            <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 bg-red-500 }`} />
                <div><CircleAlert fill='white' color='black' size={'36px'} className='mr-2' /></div>
                <div>
                    <div className="text-xs">Machine Unreachable</div>
                    <div className="text-xs ">0 active alerts</div>
                </div>
            </div>
            <div className="bg-red-500 rounded-full px-2 py-1 text-sm">2</div>
        </div>
        <div className="flex justify-between items-center mb-2 p-2  rounded-lg">
            <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 bg-red-500 }`} />
                <div><CircleAlert fill='white' color='black' size={'36px'} className='mr-2' /></div>
                <div>
                    <div className="text-xs">Machine Unreachable</div>
                    <div className="text-xs ">0 active alerts</div>
                </div>
            </div>
            <div className="bg-red-500 rounded-full px-2 py-1 text-sm">2</div>
        </div>



        <div className="flex justify-between items-center mb-2 p-2  rounded-lg">
            <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 bg-yellow-500 }`} />
                <div><TriangleAlert fill='white' color='black' size={'36px'} className='mr-2' /></div>
                <div>
                    <div className="text-xs">Monitoring Error (host)</div>
                    <div className="text-xs">0 active alerts</div>
                </div>
            </div>
            <div className="bg-yellow-500 rounded-full px-2 py-1 text-sm">1</div>
        </div>
        <div className="flex justify-between items-center mb-2 p-2  rounded-lg">
            <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 bg-yellow-500 }`} />
                <div><TriangleAlert fill='white' color='black' size={'36px'} className='mr-2' /></div>
                <div>
                    <div className="text-xs">Monitoring Error (host)</div>
                    <div className="text-xs">0 active alerts</div>
                </div>
            </div>
            <div className="bg-yellow-500 rounded-full px-2 py-1 text-sm">1</div>
        </div>
        <div className="flex justify-between items-center mb-2 p-2  rounded-lg">
            <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 bg-yellow-500 }`} />
                <div><TriangleAlert fill='white' color='black' size={'36px'} className='mr-2' /></div>
                <div>
                    <div className="text-xs">Monitoring Error (host)</div>
                    <div className="text-xs">0 active alerts</div>
                </div>
            </div>
            <div className="bg-yellow-500 rounded-full px-2 py-1 text-sm">1</div>
        </div>
        <div className="flex justify-between items-center mb-2 p-2  rounded-lg">
            <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 bg-yellow-500 }`} />
                <div><TriangleAlert fill='white' color='black' size={'36px'} className='mr-2' /></div>
                <div>
                    <div className="text-xs">Monitoring Error (host)</div>
                    <div className="text-xs">0 active alerts</div>
                </div>
            </div>
            <div className="bg-yellow-500 rounded-full px-2 py-1 text-sm">1</div>
        </div>

        <div className={`absolute right-[8px] top-5 rounded-l-md
             rounded-r-none flex items-center bg-base-200
               transition-transform duration-0
               ${isDrawerOpen ? '-translate-x-[300px]' : ''}`}>
            <Bell size={18}  cursor={'pointer'} className='bg-base-200'/>
            <div className='flex items-center space-x-2 ml-2 '>
                <div className="bg-red-500 rounded-full px-3 py-1 text-sm">81</div>
                <div className="bg-yellow-500 rounded-full px-3 py-1 text-sm">1040</div>
                <div className="bg-info rounded-full px-3 py-1 text-sm">366</div>
            </div>
            <button type="button" className="btn btn-sm" onClick={toggleDrawer}>
                {
                    isDrawerOpen ? (
                        <ChevronRight
                            cursor="pointer"
                            onClick={toggleDrawer}
                            className="hover:bg-base-200 rounded-md text-grey-700 focus:outline-none focus:ring"
                        />
                    ) : (
                        <ChevronLeft
                            cursor="pointer"
                            onClick={toggleDrawer}
                            className="hover:bg-base-200 rounded-md text-grey-700 focus:outline-none focus:ring"
                        />
                    )
                }
            </button>
        </div>

    </div>
  )
}

export default Switcher