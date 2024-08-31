import React,{useState} from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink,Link} from 'react-router-dom';

const liItems = [
    { name: 'HOME', path: '/' },
    { name: 'COURSE', path: '/course' },
    { name: 'BLOG', path: '/blog' },
    { name: 'ABOUT', path: '/about' }
  ];

function Home() {
    const [isOpen, setIsOpen] = useState(false); 
  return (
    <div className="bg-voilet min-h-screen w-full">
      {/* Navbar */}
      <nav className="flex justify-between items-center text-white p-5 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold">DECEIFER</h2>
        

          {/* Toggle Icon */}
          <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
        {/* Nav Items */}
        <ul className={`flex flex-col md:flex-row gap-10 absolute md:static top-16 left-0 w-full md:w-auto  bg-voilet md:bg-transparent md:transition-none transition-all duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
>
          {liItems.map((item, index) => (
          <li
          className="text-xl gap-auto cursor-pointer hover:text-gray-300 sm:font-extrabold  pl-5 md:pl-0 md:font-extrabold "
          key={index}
        >
           <Link to={item.path}>{item.name}</Link>
        </li>
        
          ))}
        </ul>
        
        <button className="text-xl font-extrabold cursor-pointer hover:text-gray-300 p-5 md:p-0 hidden lg:block">
          Contact Us
        </button>
      </nav>
    </div>
  );
}

export default Home;
