import React from 'react';

export const Scroll = ({ top, handleScroll }) => {

    const scrollToTop = () => {
        window.focus();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        
        });
    };
    const scrollToBottom = () => {
        window.focus();
        window.scrollTo({
            top: 9999,
            behavior: 'smooth'
        
        });
    };

    if (top) {
        
            return (
                <button
        onClick={() => {scrollToTop(); handleScroll()}}
        type="button"
        name="scroll-top"
        aria-label="scroll-to-top"
        id="topButton" className="fixed bottom-5 right-1/2 z-10 hover:scale-[110%] rounded-full bg-gray-100 w-8 h-8 flex justify-center items-center shadow-md">
            <svg className="text-gray-800" aria-hidden="true" width="10" height="10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/> </svg>
        </button>
            );

    } else {
        return (
<button
    onClick={scrollToBottom}
    type="button"
    name="scroll-bottom"
    aria-label="scroll-to-bottom"
    id="topButton" className="fixed bottom-5 right-1/2 z-10 hover:scale-[110%] rounded-full bg-gray-100 w-8 h-8 flex justify-center items-center shadow-md animate-bounce">
    <svg className="text-gray-800" aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/> </svg>
</button>
        );
    }
}

{/* <svg width="10" height="10" class="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
  </svg> */}
