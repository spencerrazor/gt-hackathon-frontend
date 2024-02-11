import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

export const Search = ({trigger}) => {
    const [searchTerm, setSearchTerm] = useState('');

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
        trigger();
    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            
            <div class="flex">

            <Dropdown label="" dismissOnClick={false}>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
      <Dropdown.Item><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</Dropdown.Item>
    </Dropdown>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Tell us a health problem or medical service"
                required
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#39ace7] rounded-e-lg border border-[#39ace7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
        </form>
    );
};