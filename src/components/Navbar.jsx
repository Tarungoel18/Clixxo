import React, { useEffect, useState } from 'react';
import LOGO from "../assets/Clixxo_Logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate()


  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div className='fixed w-full'>
      {/* First row: Logo */}
      <div className='bg-black p-1 '>
        <img src={LOGO} className='h-8 w-auto cursor-pointer' alt="Logo"  onClick={() => navigate("/")}/>
      </div>

      {/* Second row: Date, Time, User, Logout */}
      <div className='bg-gray-800 p-1 flex items-center justify-between text-white'>
        <div className='flex flex-row gap-2'>
          <div>{formattedDate}</div>
          <div>{formattedTime}</div>
        </div>

        <div className='flex items-center gap-4'>
          <div>
            <p className='text-red-500'> Web SSH Ftp Telnet exist the risk , please close or set the whitelsit address</p>
          </div>
          <div>
            User: <span className="font-bold text-purple-500">admin</span>
          </div>
          <div className='cursor-pointer'>
          <LogoutIcon />
          </div>
         

          {/* <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'>
            Logout
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
