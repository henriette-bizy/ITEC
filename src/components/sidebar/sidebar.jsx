// src/components/Sidebar.jsx
import { React, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiCloseLargeLine } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';


const Sidebar = ({ isOpen, toggleSidebar, sidebarFields }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    // Find the default active item based on current location
    const defaultItem = sidebarFields.find((field) =>
      location.pathname.includes(field.destination)
    );
    if (defaultItem) {
      setActiveItem(defaultItem.id);
    }
  }, [location.pathname, sidebarFields]);

  const handleLogout = async () => {
    setIsSubmitting(true);
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to handle click on sidebar item
  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white border-2 shadow-md text-[#080140] w-64 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
    >
      <div className="p-4 flex items-center justify-evenly">
        <Link to="/hr/statistics" className="flex items-center justify-center">
          <img src="/logo.jpeg" />
        </Link>
        <button
          className="block lg:hidden absolute right-4 top-4"
          onClick={toggleSidebar}
        >
          <RiCloseLargeLine />
        </button>
      </div>
      <ul className="mt-4 flex flex-col items-end">
        {sidebarFields.map((field) => (
          <li
            key={field.id}
            className={`p-2 w-[87.5%] mb-3 rounded-l-full font-semibold ${
              activeItem === field.id
                ? 'bg-white text-[#4069B0]'
                : 'hover:bg-white hover:text-[#4069B0]'
            }`}
            onClick={() => handleItemClick(field.id)}
          >
            <Link to={field.destination} className="ml-6 flex flex-row gap-3 items-center">
              {field.icon}
              {field.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-4 left-4 right-4">
        <button
          className="flex items-center justify-center gap-2 w-full py-2 px-4 hover:bg-white border border-2 font-semibold hover:text-[#080140] rounded-md shadow-md bg-[#080140] text-white"
          onClick={handleLogout}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging out' : 'Logout'}
          <IoIosLogOut />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
