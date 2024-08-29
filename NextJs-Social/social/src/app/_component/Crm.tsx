import { AudioWaveform, BriefcaseBusiness, TrendingDown, TrendingUp, Users, Wallet } from 'lucide-react'
import React from 'react'

const Crm = () => {
    const dataTopDeals = [
        {
            "S.No": 1,
            "Deal Value": "$2.11923M",
            "Company": "Stellar Solutions",
            "Sales": "18,293"
        },
        {
            "S.No": 2,
            "Deal Value": "$1.07324M",
            "Company": "Nexus Dynamics",
            "Sales": "17,556"
        },
        {
            "S.No": 3,
            "Deal Value": "$3.01153M",
            "Company": "Velocity Ventures",
            "Sales": "15,895"
        },
        {
            "S.No": 4,
            "Deal Value": "$2.14915M",
            "Company": "Fusion Innovate",
            "Sales": "15,229"
        },
        {
            "S.No": 5,
            "Deal Value": "$5.08923M",
            "Company": "Nebula Nexus",
            "Sales": "14,253"
        },
        {
            "S.No": 6,
            "Deal Value": "$1.11923M",
            "Company": "Horizon Hub",
            "Sales": "12,763"
        },
        {
            "S.No": 7,
            "Deal Value": "$3.28911M",
            "Company": "Spruko Tech",
            "Sales": "10,543"
        }
    ]
    const datadealstatic = [
        {
            "s_no": 1,
            "deal": "Xenon Tech. Ed.",
            "sales_rep": "Ayyan Cowall",
            "mail": "mayorkelly@gmail.com",
            "amount": "$4320.29",
            "location": "Germany",
            "sales_cycle_length": "43 Days"
        },
        {
            "s_no": 2,
            "deal": "Ideal IT Sol.",
            "sales_rep": "Meisha Kerr",
            "mail": "Kevingarfield@gmail.com",
            "amount": "$6745.99",
            "location": "Canada",
            "sales_cycle_length": "45 Days"
        },
        {
            "s_no": 3,
            "deal": "Inferno Xo",
            "sales_rep": "Jessica",
            "mail": "Ayyancowel234@gmail.com",
            "amount": "$1176.89",
            "location": "Singapore",
            "sales_cycle_length": "50 Days"
        },
        {
            "s_no": 4,
            "deal": "Myami Group & Tech.",
            "sales_rep": "Arunima A",
            "mail": "mirindahers@gmail.com",
            "amount": "$1899.99",
            "location": "USA",
            "sales_cycle_length": "55 Days"
        },
        {
            "s_no": 5,
            "deal": "Mevengo Tech Et Sed",
            "sales_rep": "Martin Miles",
            "mail": "jacobsmith@gmail.com",
            "amount": "$1867.29",
            "location": "Europe",
            "sales_cycle_length": "30 Days"
        },
        {
            "s_no": 6,
            "deal": "Lackme Info Et.",
            "sales_rep": "Khabib Hussain",
            "mail": "Hussain@gmail.com",
            "amount": "$2439.99",
            "location": "Canada",
            "sales_cycle_length": "35 Days"
        }
    ]


    return (
        <div className='crmPage border-2 h-full w-full bg-[black] text-white'>
            <div className='border-2 border-red-700 w-full flex items-center justify-evenly'>
                {/* Crm Page top section start here -------------------------------- */}

                <div className='border-2 border-black w-[22%] h-40 bg-lime-950 flex items-center justify-center'>
                    <div className='h-full w-[90%]'>
                        <div className='flex justify-between items-center text-[lime] h-[50%]'>
                            <div className='p-2 border-[1px] bg-[#317C78]'>
                                <Wallet />
                            </div>
                            <div>
                                chart will be here
                            </div>
                        </div>
                        <div className='flex justify-between h-[50%]'>
                            <div className='text-white h-full flex flex-col justify-around'>
                                <p className='text-xl'>$73,239</p>
                                <p>Total Revenue</p>
                            </div>
                            <div className='h-full flex flex-col justify-end'>
                                <div className='flex text-[lime] bg-[#317C78] rounded-lg text-sm mb-2'>
                                    <TrendingUp />
                                    <p>+1.08%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-black w-[22%] h-40 bg-lime-950 flex items-center justify-center'>
                    <div className='h-full w-[90%]'>
                        <div className='flex justify-between items-center text-[lime] h-[50%]'>
                            <div className='p-2 border-[1px] bg-[#317C78]'>
                                <Users />
                            </div>
                            <div>
                                chart will be here
                            </div>
                        </div>
                        <div className='flex justify-between h-[50%]'>
                            <div className='text-white h-full flex flex-col justify-around'>
                                <p className='text-xl'>1,56,290</p>
                                <p>Total Customers</p>
                            </div>
                            <div className='h-full flex flex-col justify-end'>
                                <div className='flex text-[#cc342f] bg-[#754141] rounded-lg text-sm mb-2'>
                                    <TrendingDown />
                                    <p>-0.56%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-black w-[22%] h-40 bg-lime-950 flex items-center justify-center'>
                    <div className='h-full w-[90%]'>
                        <div className='flex justify-between items-center text-[lime] h-[50%]'>
                            <div className='p-2 border-[1px] bg-[#317C78]'>
                                <AudioWaveform />
                            </div>
                            <div>
                                chart will be here
                            </div>
                        </div>
                        <div className='flex justify-between h-[50%]'>
                            <div className='text-white h-full flex flex-col justify-around'>
                                <p className='text-xl'>16.87%</p>
                                <p>Conversion Ratio</p>
                            </div>
                            <div className='h-full flex flex-col justify-end'>
                                <div className='flex text-[lime] bg-[#317C78] rounded-lg text-sm mb-2'>
                                    <TrendingUp />
                                    <p>+4.63    %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-black w-[22%] h-40 bg-lime-950 flex items-center justify-center'>
                    <div className='h-full w-[90%]'>
                        <div className='flex justify-between items-center text-[lime] h-[50%]'>
                            <div className='p-2 border-[1px] bg-[#317C78]'>
                                <BriefcaseBusiness />
                            </div>
                            <div>
                                chart will be here
                            </div>
                        </div>
                        <div className='flex justify-between h-[50%]'>
                            <div className='text-white h-full flex flex-col justify-around'>
                                <p className='text-xl'>$73,239</p>
                                <p>Total Deals</p>
                            </div>
                            <div className='h-full flex flex-col justify-end'>
                                <div className='flex text-[lime] bg-[#317C78] rounded-lg text-sm mb-2'>
                                    <TrendingUp />
                                    <p>+12.68%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Crm Page top section end here------------------------------- */}

            </div>

            {/* Crm third part start here------------------- */}
            <div className="border-2 border-red-500 flex">
                <div className='w-[30%] border-2 bg-[#0d302f] text-white'>
                    <div className='text-[lime]'>
                        <p>Top Deals</p>
                    </div>
                    <div>
                        <table className='table table-auto'>
                            <thead>
                                <tr className='text-white'>
                                    {Object.keys(dataTopDeals[0]).map((key, index) => (
                                        <th key={index}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {dataTopDeals.map((deal, index) => (
                                    <tr key={index}
                                        className={index % 2 === 0 ? 'bg-[#0d302f' : 'bg-[#0d302f] text-white'}
                                    >
                                        {Object.values(deal).map((value, i) => (
                                            <td key={i}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='w-[40%] flex items-center justify-center'>
                    <h1>map will be here</h1>
                </div>

                <div className='w-[30%]'>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                        <h2 className="text-teal-400 text-lg font-bold mb-4">Recent Leads</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="path/to/michael-jordan.jpg" alt="Michael Jordan" className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <h4 className="text-white font-semibold">Michael Jordan</h4>
                                        <p className="text-gray-400 text-sm">michael.jordan@example.com</p>
                                    </div>
                                </div>
                                <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">Warm Leads</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="path/to/emigo-kiaren.jpg" alt="Emigo Kiaren" className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <h4 className="text-white font-semibold">Emigo Kiaren</h4>
                                        <p className="text-gray-400 text-sm">emigo.kiaren@gmail.com</p>
                                    </div>
                                </div>
                                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Hot Leads</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="path/to/randy-origoon.jpg" alt="Randy Origoon" className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <h4 className="text-white font-semibold">Randy Origoon</h4>
                                        <p className="text-gray-400 text-sm">randy.origoon@gmail.com</p>
                                    </div>
                                </div>
                                <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Cold Leads</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="path/to/george-pieterson.jpg" alt="George Pieterson" className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <h4 className="text-white font-semibold">George Pieterson</h4>
                                        <p className="text-gray-400 text-sm">george.pieterson@gmail.com</p>
                                    </div>
                                </div>
                                <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded">Lost Leads</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="path/to/kiara-advain.jpg" alt="Kiara Advain" className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <h4 className="text-white font-semibold">Kiara Advain</h4>
                                        <p className="text-gray-400 text-sm">kiaraadvain214@gmail.com</p>
                                    </div>
                                </div>
                                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">New Leads</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="path/to/martin-roy.jpg" alt="Martin Roy" className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <h4 className="text-white font-semibold">Martin Roy</h4>
                                        <p className="text-gray-400 text-sm">Martinray2132@gmail.com</p>
                                    </div>
                                </div>
                                <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">Cold Leads</span>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
            {/* Crm third part end here------------------- */}


            {/* crm deal statics part start here */}
            <div className='border-2 border-x-cyan-600 w-full]'>
                <div>
                    <p>Deals Statistics</p>
                </div>
                <div>
                    <table className='table table-auto'>
                        <thead>
                            <tr className='text-white'>
                                {Object.keys(datadealstatic[0]).map((key, index) => (
                                    <th key={index}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {datadealstatic.map((deal, index) => (
                                <tr key={index}
                                    className={index % 2 === 0 ? 'bg-[#0d302f' : 'bg-[#0d302f] text-white'}
                                >
                                    {Object.values(deal).map((value, i) => (
                                        <td key={i}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* crm deal statics part end here */}
        </div>
    )
}

export default Crm