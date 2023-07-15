import './style.css';
import mylogo2 from './logos/mylogo2.png';
import home from './icons/home.svg';
import genre from './icons/genre.svg';
import SearchBox from './SearchBox.js';
const Header = () => {
    return ( <>
    < header>
        < section>
            < div>
                < a href="#">
                    <img src={mylogo2} alt="don`t show" loading='lazy' className="h-20 w-3/5" />
                            < / a>
                                < /div>
                                    < / section>
            <section className="custom-bg shadow-[2px_2px_10px_2px]">
            <nav className="inline-flex">
            <ul className="inline-flex gap-x-3">
            <li className="ms-4 hover:bg-slate-800" >
            <a href="#" className="text-white text-xl" title="home button icons">
            <img src={home} alt="no display" loading="lazy" className="inline" />
             HOME
            </a>
            </li>
            
            <li className="relative group hover:bg-slate-800">
             <a href="#" className=" text-white relative top-1 text-xl text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium" id="menu-button" title="WebSeries button icons">
            <img src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4f9.svg" alt="no display" loading="lazy" className="inline gap-x-5" height="30px" width="18px" />&nbsp;
             Web Series
            </a>
            <ul className="mt-1 absolute hidden text-gray-700 group-hover:block bg-black top-[41px] " id="sub-menu">
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >Amazon Prime</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Netflix</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">ZEE5 Originals</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">MX Player</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">ALT Balaji</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Apple TV+</a></li>
            <hr/>
            <li className="block cursor-pointer px-3 py-3 text-base hover:custom-bg text-white font-bold "><a href="">Disney+ Hotstar</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Voot Originals</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Viu Originals</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">ULLU Originals</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">TVF Series</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">SonyLIV</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Gemplex</a></li>
            <hr/>
            </ul>
            </li>
            
            <li className="hover:bg-slate-800 relative group hover:bg-slate-800">
            <a href="#" className="relative top-1.5 text-white text-xl font-medium inline-flex">
            <img width="20" height="22" src="https://img.icons8.com/material-two-tone/24/audio-book.png" alt="audio-book" className="mt-1.5" />
            DualAudio
            </a>
            <ul className="absolute hidden mt-1 text-gray-700 group-hover:block bg-black top-[41px] left-[20px]">
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a>Movies</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a>Series</a></li>
            <hr/>
            </ul>
            </li>
            <li className=" relative group hover:bg-slate-800">
            <a href="" title="genre icons" className="relative top-0.5 text-white text-xl text-gray-300 hover:text-white px-3 py-1 rounded-md font-medium inline-flex">
            <img src={genre} alt='empty' loading="lazy" className="mt-1.5 relative right-[5px]" width="20" height="20" />
            Genre
            </a>
            <ul className="absolute hidden group-hover:block text-gray-700 bg-black top-[45px]">
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Action</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Adventure</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Animation</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Biography</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Comedy</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Crime</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Documentry</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Drama</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Family</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Fantasy</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Horror</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">History</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Mystery</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Musical</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Romance</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Music</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Sci-Fic</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Sports</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Short</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Suspense</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Thriller</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">War</a> </li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold"><a href="">Western</a> </li>
            <hr/>
            </ul>
            </li>
            <li className="hover:bg-slate-800 relative group hover:bg-slate-800">
            <a href="" className="relative top-1.5 text-white text-xl text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">By Year</a>
            <ul className="absolute mt-1 hidden text-gray-700 group-hover:block bg-black top-[41px] left-[7px]" id="sub-menu">
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2023</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2022</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2021</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2020</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2019</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2018</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2017</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2016</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2015</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2014</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2013</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2012</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2011</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2010</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2009</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2008</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2007</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2006</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2005</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2004</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2003</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2002</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2001</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2000</a></li>
            <hr/>
            </ul>
            </li>
            <li className=" relative group hover:bg-slate-800">
            <a href="" className="relative top-1.5 text-white text-xl text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
            By Qualities
            </a>
            <ul className="absolute mt-1 hidden text-gray-700 group-hover:block bg-black top-[41px] left-[15px]" id="sub-menu">
            
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >480p</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >720p</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >1080p</a></li>
            <hr/>
            <li className="block cursor-pointer px-5 py-3 text-base hover:custom-bg text-white font-bold" > <a href="" >2160p 4k</a></li>
            <hr/>
            </ul>
            </li>
            </ul>
            <SearchBox />
            </nav>
            </section>
                                        < /header>
                                            < />
    );
}

export default Header;
