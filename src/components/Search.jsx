import React, { useState, useEffect} from 'react';
import { Dropdown } from 'flowbite-react';

export const Search = ({ serviceClick, getInsurance }) => {
    const insurancePlans = [
        { id: 1, name: 'BCBS' },
        { id: 2, name: 'MEDICARE' },
        { id: 3, name: 'BC' },
        { id: 4, name: 'CIGNA' },
        { id: 5, name: 'PHCS' },
        { id: 6, name: 'PEACHSTATE-CENTENE' },
        { id: 7, name: 'HUMANA' },
        { id: 8, name: 'AMBETTER' },
        { id: 9, name: 'UHC' },
        { id: 10, name: 'WELLCARE' },
        { id: 11, name: 'KAISER' },
        { id: 12, name: 'AMERIGROUP' },
        { id: 13, name: 'MEDICAID' },
        { id: 14, name: 'MULTI-PLAN' },
        { id: 15, name: 'CARESOURCE' },
        { id: 16, name: 'BLUE CROSS' },
        { id: 17, name: 'CHAMPUS' },
        { id: 18, name: 'CLOVER HEALTH' },
        { id: 19, name: 'FIRST HLTH NTWK' },
        { id: 20, name: 'PEACH STATE' },
        { id: 21, name: 'SONDER HEALTH PLANS' },
        { id: 22, name: 'PRUITT HEALTH' },
        { id: 23, name: 'EON HEALTH' },
        { id: 24, name: 'PPONEXT' },
        { id: 25, name: 'UMR' },
        { id: 26, name: 'TRICARE' },
        { id: 27, name: 'VETERANS_ADMIN' },
        { id: 28, name: 'PEACH STATE' },
        { id: 29, name: 'BLUE_CROSS' },
        { id: 30, name: 'NO INSURANCE' }
      ];

    const [searchTerm, setSearchTerm] = useState('');
    const [insurancePlan, setInsurancePlan] = useState({ id: 30, name: 'NO INSURANCE' });
    const [showServices, setShowServices] = useState(false);
    const [services, setServices] = useState([])

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
        serviceClick(event);
    }

    return (
        <>
        <form className="w-full z-0" onSubmit={handleSubmit}>
            <div className="flex">
                <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                        <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-[#39ace7] border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
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
            {showServices && 

            <div class="grid grid-cols-3 gap-4">
    {services.map((item, index) => (
        <button key={index} href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={handleServiceClick} value="button1">
            <p className="font-normal text-gray-700 dark:text-gray-400 text-left">{item.short_desc.replace(/\\n/g, "").replace(/"/g, '')}</p>
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Service Code: {item.cpt_code}</h5>
        </button>
    ))}
    </div>
}
        </div>
    </>
    );
};