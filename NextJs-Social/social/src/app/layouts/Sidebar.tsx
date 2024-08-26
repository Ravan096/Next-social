'use client'
import { ChevronDown, ChevronRight, House, StickyNote } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Sidebar = () => {
    const pathname = usePathname();
    const [expandedSection, setExpandedSection] = useState(null)
    const toggleExpand = (section:any) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    if (pathname === '/login' || pathname === '/signup') {
        return null;
    }
    return (       
        <div className='border-2 border-black w-[12%] min-h-[93vh]'>

            <div className='border-2 border-green-700 w-full h-4/6 overflow-y-auto flex flex-col justify-around'>

                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('dashboards')}>
                        <div className='flex'>
                            <House />
                            <p>Dashboards</p>
                        </div>
                        <div>
                            {expandedSection === 'dashboards' ? <ChevronDown /> : <ChevronRight />}
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        {
                            expandedSection === 'dashboards' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href='dashboard' className='w-full'>
                                        <span>-</span> Gaming
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Sales
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Analytics
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Ecommerce
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> NFT
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Crypto
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> CRM
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> HRM
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Jobs
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Projects
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Stocks
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Courses
                                    </Link>
                                </div>
                            )}
                    </div>

                </div>

                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('pages')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Pages</p>
                        </div>
                        <div>
                            {expandedSection === 'pages' ? <ChevronDown /> : <ChevronRight />}
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        {
                            expandedSection === 'pages' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href='profilePage'>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href='message'>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='chatcontacts' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '> 
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('uiElements')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Ui Elements</p>
                        </div>
                        <div>
                           {expandedSection === 'uiElements' ? <ChevronDown /> : <ChevronRight />}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'uiElements' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('authentication')}>
                        <div className='flex '>
                            <StickyNote />
                            <p>Authentication</p>
                        </div>
                        <div>
                           {expandedSection === 'authentication' ? <ChevronDown/> : <ChevronRight/>}
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        {
                            expandedSection === 'authentication' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('error')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Error</p>
                        </div>
                        <div>
                            {expandedSection === 'error' ? <ChevronDown/> : <ChevronRight/>}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'error' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('charts')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Charts</p>
                        </div>
                        <div>
                            {expandedSection === 'charts' ? <ChevronDown/> : <ChevronRight/>}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'charts' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=>toggleExpand('apps')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Apps</p>
                        </div>
                        <div>
                            {expandedSection === 'apps' ? <ChevronDown/> : <ChevronRight/>}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'apps' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('forms')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Forms</p>
                        </div>
                        <div>
                            {expandedSection === 'forms' ? <ChevronDown/> : <ChevronRight/>}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'forms' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('tables')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Tables</p>
                        </div>
                        <div>
                            {expandedSection === 'tables' ? <ChevronDown/> : <ChevronRight/>}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'tables' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('maps')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Maps</p>
                        </div>
                        <div>
                            {expandedSection === 'maps' ? <ChevronDown /> : <ChevronRight />}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'maps' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('utilities')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Utilities</p>
                        </div>
                        <div>
                            {expandedSection === 'utilities' ? <ChevronDown /> : <ChevronRight />}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'utilities' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex cursor-pointer w-full items-center justify-between' onClick={()=> toggleExpand('advanceUi')}>
                        <div className='flex'>
                            <StickyNote />
                            <p>Advance UI</p>
                        </div>
                        <div>
                            {expandedSection === 'advanceUi' ? <ChevronDown /> : <ChevronRight />}
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            expandedSection === 'advanceUi' && (
                                <div className='w-3/4 flex flex-col items-start justify-center border-2 border-purple-600'>
                                    <Link href=''>
                                        <span>-</span> Profile
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Profile settings
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Chat
                                    </Link>
                                    <Link href='' className='flex'>
                                        <span>-</span> Contacts
                                    </Link>
                                    <Link href=''>
                                        <span>-</span> Contact Us
                                    </Link>
                                </div>
                            )}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Sidebar