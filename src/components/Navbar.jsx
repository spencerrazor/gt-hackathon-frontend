export function Navbar () { 

    return (
        <> 
<nav className="bg-white w-full fixed z-10 shadow-md shadow-[rgba(0, 0, 0, 0.2)]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
  {/* <a href="/" className="flex items-center p-3">
      <img src="/energy311logo.svg" className="w-[176px]" alt="Energy 311 Logo" />
  </a> */}
  <h1>LetsHealth</h1>
  {/* <div className="flex md:order-2 p-4 md:hidden">
    <button id="triggerEl" onClick={handleHamburger} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div> */}
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <hr className="border-t-3 border-solid border-gray md:hidden"/>
    <ul className="flex flex-col font-medium md:p-0 mt-0 bg-gray-50 md:flex-row md:items-center md:bg-cgreen-300 md:space-x-8 md:mt-0 md:border-0 md:bg-white">
      <li className="w-full flex justify-left px-4 py-3 md:p-0">
      <a href="/team" className="block md:bg-transparent md:p-0" aria-current="page">Team</a>      </li>
      <hr className="border-t-3 border-solid border-gray md:hidden"/>
      <li className="w-full flex justify-left px-4 py-3 md:p-0">
      <a href="https://blog.energy311.com/blog" className="block md:bg-transparent md:p-0" aria-current="page">Data</a>      </li>
      <hr className="border-t-3 border-solid border-gray md:hidden"/>
      <li className="w-full flex justify-center px-4 py-3">
        <a href="/contact" className="btn-green-long w-full md:w-32">Our A</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </>
    )
}