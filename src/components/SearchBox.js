import React from 'react';
import './style.css';
import search from './icons/search.png';
function SearchBox(){
    return (
        <>
        <div className="inline-flex relative left-14">
        <input type="search" placeholder="Search...." className="bg-zinc-800 transition-transform duration-500 ease-linear delay-0 hover:scale-x-125 origin-right cursor-text" />
        <span className=" box-border inline-block h-11 ">
        <button type="button" className="">
        <img src={search} alt="show" loading="lazy" width="40px" height="40px" />
        </button>
        </span>
        </div>
        </>
    );
}

export default SearchBox;