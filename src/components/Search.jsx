import React, { useState, useEffect, Suspense } from 'react';
import { Dropdown } from 'flowbite-react';
import { Suggestions } from './Suggestions';
import { Scroll } from './Scroll';

export const Search = ({ getService, getInsurance }) => {
    const [showScroll, setShowScroll] = useState(false);

    const insurancePlans = [{'id': 3, 'name': 'AETNA HMO'}, {'id': 73, 'name': 'AETNA OTHER'}, {'id': 4, 'name': 'AETNA POS'}, {'id': 5, 'name': 'AETNA PPO'}, {'id': 6, 'name': 'ALLIANT HMO'}, {'id': 8, 'name': 'ALLIANT POS'}, {'id': 7, 'name': 'ALLIANT PPO'}, {'id': 9, 'name': 'AMBETTER HMO'}, {'id': 84, 'name': 'AMBETTER OTHER'}, {'id': 11, 'name': 'AMBETTER POS'}, {'id': 10, 'name': 'AMBETTER PPO'}, {'id': 12, 'name': 'AMERIGROUP HMO'}, {'id': 83, 'name': 'AMERIGROUP OTHER'}, {'id': 14, 'name': 'AMERIGROUP POS'}, {'id': 13, 'name': 'AMERIGROUP PPO'}, {'id': 15, 'name': 'BEECHSTREET HMO'}, {'id': 17, 'name': 'BEECHSTREET POS'}, {'id': 16, 'name': 'BEECHSTREET PPO'}, {'id': 18, 'name': 'BLUE CROSS BLUE SHIELD HMO'}, {'id': 80, 'name': 'BLUE CROSS BLUE SHIELD OTHER'}, {'id': 120, 'name': 'BLUE CROSS BLUE SHIELD POS'}, {'id': 19, 'name': 'BLUE CROSS BLUE SHIELD PPO'}, {'id': 113, 'name': 'BLUE_CROSS HMO'}, {'id': 115, 'name': 'BLUE_CROSS POS'}, {'id': 114, 'name': 'BLUE_CROSS PPO'}, {'id': 20, 'name': 'CARESOURCE HMO'}, {'id': 79, 'name': 'CARESOURCE OTHER'}, {'id': 22, 'name': 'CARESOURCE POS'}, {'id': 21, 'name': 'CARESOURCE PPO'}, {'id': 23, 'name': 'CIGNA HMO'}, {'id': 70, 'name': 'CIGNA OTHER'}, {'id': 24, 'name': 'CIGNA POS'}, {'id': 25, 'name': 'CIGNA PPO'}, {'id': 26, 'name': 'CLEAR SPRING HEALTH HMO'}, {'id': 28, 'name': 'CLEAR SPRING HEALTH POS'}, {'id': 27, 'name': 'CLEAR SPRING HEALTH PPO'}, {'id': 29, 'name': 'CLOVER HEALTH HMO'}, {'id': 72, 'name': 'CLOVER HEALTH OTHER'}, {'id': 31, 'name': 'CLOVER HEALTH POS'}, {'id': 30, 'name': 'CLOVER HEALTH PPO'}, {'id': 89, 'name': 'EON HEALTH OTHER'}, {'id': 77, 'name': 'FIRST HEALTH NETWORK OTHER'}, {'id': 32, 'name': 'FRIDAY HEALTH HMO'}, {'id': 34, 'name': 'FRIDAY HEALTH POS'}, {'id': 33, 'name': 'FRIDAY HEALTH PPO'}, {'id': 35, 'name': 'GEORGIA HEALTH ADVANTAGE HMO'}, {'id': 37, 'name': 'GEORGIA HEALTH ADVANTAGE POS'}, {'id': 36, 'name': 'GEORGIA HEALTH ADVANTAGE PPO'}, {'id': 38, 'name': 'HUMANA HMO'}, {'id': 69, 'name': 'HUMANA OTHER'}, {'id': 40, 'name': 'HUMANA POS'}, {'id': 39, 'name': 'HUMANA PPO'}, {'id': 41, 'name': 'KAISER HMO'}, {'id': 118, 'name': 'KAISER PERMANENTE HMO'}, {'id': 86, 'name': 'KAISER PERMANENTE OTHER'}, {'id': 119, 'name': 'KAISER PERMANENTE POS'}, {'id': 88, 'name': 'KAISER PERMANENTE PPO'}, {'id': 43, 'name': 'KAISER POS'}, {'id': 42, 'name': 'KAISER PPO'}, {'id': 44, 'name': 'LIFEWELL HMO'}, {'id': 46, 'name': 'LIFEWELL POS'}, {'id': 45, 'name': 'LIFEWELL PPO'}, {'id': 98, 'name': 'MEDICAID HMO'}, {'id': 82, 'name': 'MEDICAID OTHER'}, {'id': 100, 'name': 'MEDICAID POS'}, {'id': 99, 'name': 'MEDICAID PPO'}, {'id': 92, 'name': 'MEDICARE HMO'}, {'id': 78, 'name': 'MEDICARE OTHER'}, {'id': 94, 'name': 'MEDICARE POS'}, {'id': 93, 'name': 'MEDICARE PPO'}, {'id': 47, 'name': 'MULTIPLAN HMO'}, {'id': 85, 'name': 'MULTIPLAN OTHER'}, {'id': 49, 'name': 'MULTIPLAN POS'}, {'id': 48, 'name': 'MULTIPLAN PPO'}, {'id': 68, 'name': 'NO INSURANCE OTHER'}, {'id': 50, 'name': 'NOVANET HMO'}, {'id': 52, 'name': 'NOVANET POS'}, {'id': 51, 'name': 'NOVANET PPO'}, {'id': 53, 'name': 'PEACHSTATE HMO'}, {'id': 71, 'name': 'PEACHSTATE OTHER'}, {'id': 55, 'name': 'PEACHSTATE POS'}, {'id': 54, 'name': 'PEACHSTATE PPO'}, {'id': 110, 'name': 'PEACH_STATE HMO'}, {'id': 112, 'name': 'PEACH_STATE POS'}, {'id': 111, 'name': 'PEACH_STATE PPO'}, {'id': 56, 'name': 'PHCS HMO'}, {'id': 75, 'name': 'PHCS OTHER'}, {'id': 58, 'name': 'PHCS POS'}, {'id': 57, 'name': 'PHCS PPO'}, {'id': 116, 'name': 'PPO NEXT HMO'}, {'id': 117, 'name': 'PPO NEXT POS'}, {'id': 91, 'name': 'PPO NEXT PPO'}, {'id': 59, 'name': 'PRUITT HEALTH HMO'}, {'id': 87, 'name': 'PRUITT HEALTH OTHER'}, {'id': 61, 'name': 'PRUITT HEALTH POS'}, {'id': 60, 'name': 'PRUITT HEALTH PPO'}, {'id': 62, 'name': 'SONDER HEALTH HMO'}, {'id': 90, 'name': 'SONDER HEALTH OTHER'}, {'id': 64, 'name': 'SONDER HEALTH POS'}, {'id': 63, 'name': 'SONDER HEALTH PPO'}, {'id': 104, 'name': 'TRICARE HMO'}, {'id': 74, 'name': 'TRICARE OTHER'}, {'id': 106, 'name': 'TRICARE POS'}, {'id': 105, 'name': 'TRICARE PPO'}, {'id': 95, 'name': 'UHC HMO'}, {'id': 97, 'name': 'UHC POS'}, {'id': 96, 'name': 'UHC PPO'}, {'id': 101, 'name': 'UMR HMO'}, {'id': 103, 'name': 'UMR POS'}, {'id': 102, 'name': 'UMR PPO'}, {'id': 0, 'name': 'UNITED HEALTHCARE HMO'}, {'id': 76, 'name': 'UNITED HEALTHCARE OTHER'}, {'id': 2, 'name': 'UNITED HEALTHCARE POS'}, {'id': 1, 'name': 'UNITED HEALTHCARE PPO'}, {'id': 107, 'name': 'VETERANS_ADMIN HMO'}, {'id': 109, 'name': 'VETERANS_ADMIN POS'}, {'id': 108, 'name': 'VETERANS_ADMIN PPO'}, {'id': 65, 'name': 'WELLCARE HMO'}, {'id': 81, 'name': 'WELLCARE OTHER'}, {'id': 67, 'name': 'WELLCARE POS'}, {'id': 66, 'name': 'WELLCARE PPO'}];

    const [searchTerm, setSearchTerm] = useState('');
    const [insurancePlan, setInsurancePlan] = useState({ id: 30, name: 'NO INSURANCE' });
    const [showServices, setShowServices] = useState(false);
    const [services, setServices] = useState([])
    const [service, setService] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://hacklytics-health-6fc4d8ad3bb8.herokuapp.com/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "key": "1ec0fb84-220a-4287-a70b-13f887c902b1"
            },
            body: JSON.stringify({
                "query": searchTerm
            }),
        });

        const data = await response.json();

        setServices(data.slice(0,3));

        setSearchTerm('');
        // trigger();
        setShowServices(true)
    };

    const handleServiceClick = (event) => {
        getService(service)
        setShowScroll(true)
    }

    const handleScroll = () => {
        setShowScroll(false);
    }

    return (
        <>
        <form className="w-full h-1/5" onSubmit={handleSubmit}>
            <div className="flex">
                <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                        <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-[#39ace7] border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button"
                        >
                            {insurancePlan.name}
                            <svg
                                className="w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                                >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                    />
                            </svg>
                        </button>
                    )}
                >
                    <div className="h-[300px] overflow-y-scroll">
                        {insurancePlans.map((plan, index) => (
                            <Dropdown.Item key={index} onClick={() => {setInsurancePlan(plan); getInsurance(plan)}}>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                    {plan.name}
                                </a>
                            </Dropdown.Item>
                        ))}
                    </div>
                </Dropdown>
                <div className="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Tell us a health problem or medical service"
                        required
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#39ace7] rounded-e-lg border border-[#39ace7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
        <div className="basis-1/2">
            {showServices ? 

            <div class="grid grid-cols-3 gap-4">
                {services.map((item, index) => (
                    <button value={index} key={index} href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={() => {getService(item.cpt_code); setService(item.cpt_code) }}>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-left">{item.short_desc.replace(/\\n/g, "").replace(/"/g, '')}</p>
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Service Code: {item.cpt_code}</h5>
                    </button>
                ))}
            </div>
            :  
            <Suggestions />
            }
        </div>

            
        {showScroll && 
        <Scroll top={false} handleScroll={handleScroll}/>
        } 
    </>
    );
};