import { Facebook, FolderKanban, Github, Instagram, Mail, MapPin, Phone, Settings, Twitter, UserRoundCheck, UsersRound, Youtube } from 'lucide-react'
import React from 'react'

const Profile = () => {
    return (
        <>
            <div className='border-2 border-black w-full h-full bg-black'>
                <div className='border-2 border-white flex justify-around'>
                    <div className='border-2 border-white'>
                        <div>
                            <div className='flex'>
                            <div >
                                <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1705415676/as24gzq8mksghf6wcuq0.jpg" alt="profile image" className='h-20 w-20 object-cover'/>
                            </div>
                            <div className='text-white'>
                                <h3 className=''>
                                    Anthony Richel
                                </h3>
                                <p className='text-[grey]'>
                                    Managing Director(M.D)
                                </p>
                                <p className='text-[grey] flex'>
                                    <MapPin /> Suite 456,New York, USA
                                </p>
                            </div>
                            </div>
                            <div>
                                <h3 className='text-white'>
                                    About:
                                </h3>
                                <p className='text-[grey] text-sm'>
                                    I am <span className='text-white'>Anthony Richel</span>, Managing Director with deep love for desiging, <br />
                                    managing team, supporting team and management, Over the past 15 <br />
                                    years, my journey has been a fascinating blend of milestones, shaping <br />
                                    me into the person I am today.
                                </p>
                                <h3 className='text-white'>
                                    Links:
                                </h3>
                                <a href="#" className='text-[green]'>www.google.com</a>
                            </div>
                        </div>
                    </div>


                    <div className='border-2 border-white'>
                        <p className='text-white'>
                            Contact Information:
                        </p>
                        <p className='flex text-[grey]'>
                            <Mail /> jameslucas025414@gmail.com
                        </p>
                        <p className='flex text-[grey]'>
                            <Phone /> (+222) 222-4251, (+245) 245-4815
                        </p>
                        <p className='flex text-[grey]'>
                            <MapPin /> AB-4541-A, San Martin Street, All-In-One town, USA,20071
                        </p>
                    </div>


                    <div className='border-2 border-white'>
                        <div>
                            <button>
                                <Settings />
                                Profile Setting
                            </button>
                        </div>
                        <h3>
                            Skills:
                        </h3>
                        <div>
                            <p>web development</p>
                            <p>Product Design</p>
                            <p>UX Design</p>
                            <p>web development</p>
                            <p>programming</p>
                            <p>web designing</p>
                            <p>Database Management</p>
                            <p>javascript</p>
                        </div>
                    </div>

                </div>

                <div className='border-2 border-white flex'>
                    <div>
                        <div>
                            <div>
                                <FolderKanban />
                            </div>
                            <div>
                                <p>
                                    Projecs
                                </p>
                                <p>
                                    245
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <UsersRound />
                            </div>
                            <div>
                                <p>
                                    Followers
                                </p>
                                <p>
                                    24.1k
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <UserRoundCheck />
                            </div>
                            <div>
                                <p>
                                    Following
                                </p>
                                <p>
                                    142
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            <p>
                                Follow:
                            </p>
                            <Facebook />
                            <Twitter />
                            <Instagram />
                            <Github />
                            <Youtube />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile