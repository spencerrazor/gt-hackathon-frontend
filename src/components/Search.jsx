import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

export const Search = ({ trigger }) => {
    const insurancePlans = ['Plan1', 'Plan2', 'Plan3', 'Plan4', 'Plan5', 'Plan6', 'Plan7'];

    const [searchTerm, setSearchTerm] = useState('');
    const [insurancePlan, setInsurancePlan] = useState('No insurance');
    const [showServices, setShowServices] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const response = await fetch('https://your-api-endpoint.com', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ searchTerm }),
        // });

        // const data = await response.json();
        // console.log(data);

        setSearchTerm('');
        // trigger();
        setShowServices(true)
    };

const handleServiceClick = (event) => {
    event.preventDefault();
    const buttonValue = event.target.value;
    console.log(buttonValue);
    trigger();
};


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
                            {insurancePlan}{' '}
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
                            <Dropdown.Item key={index} onClick={() => setInsurancePlan(plan)}>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                    {plan}
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
    <button href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={handleServiceClick} value="button1">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </button>
    <button href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={handleServiceClick} value="button2">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </button>
    <button href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={handleServiceClick} value="button3">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </button>
    </div>
}
        </div>
    </>
    );
};