import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ytLogo from '../images/yt-logo.png';
import ytLogoMobile from '../images/yt-logo-mobile.png';

import { SlMenu } from 'react-icons/sl';
import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

import { Context } from '../context/contextApi';
import Loader from '../shared/Loader';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event.key === 'Enter' || event === 'searchButton') &&
      searchQuery?.length > 0
    ) {
      navigate(`/SearchResults/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0];

  return (
    <div className='sticky top-0 z-[10] flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black'>
      {loading && <Loader />}
      <div className='flex items-center h-5'>
        {pageName !== 'video' && (
          <div
            className='flex justify-center w-10 hover:bg-[#303030]/[0.6] h-10 rounded-full cursor-pointer items-center md:hidden md:mr-6'
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className='text-xl text-white' />
            ) : (
              <SlMenu className='text-xl text-white' />
            )}
          </div>
        )}
        <Link to={'/'} className='flex items-center h-5'>
          <img className='hidden h-full md:block ' src={ytLogo} alt='Youtube' />
          <img className='h-full md:hidden' src={ytLogoMobile} alt='Youtube' />
        </Link>
      </div>
      <div className='flex items-center group'>
        <div className='flex h-8 md:h-10 md:ml-10 border border-[#303030]  group-focus-within:border-blue-500 md:group-focus-within:l-5  rounded-l-3xl  md:group-focus-within:pl-0'>
          <div className='items-center justify-center hidden w-10 group-focus-within:md:flex'>
            <IoIosSearch className='text-xl text-white' />
          </div>
          <input
            type={'text'}
            className='pl-5 pr-5 text-white bg-transparent outline-none md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] '
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-[#303030] rounded-r-3xl bg-white/[0.1]'>
          <IoIosSearch
            className='text-xl text-white'
            onClick={() => searchQueryHandler('searchButton')}
          />
        </button>
      </div>

      <div className='flex items-center'>
        <div className='hidden md:flex'>
          <div className='flex items-center justify-center w-10 h-10 ml-2 rounded-full hover:bg-[#303030]/[0.6]'>
            <RiVideoAddLine className='text-xl text-white cursor-pointer' />
          </div>
          <div className='flex items-center justify-center w-10 h-10 ml-2 rounded-full hover:bg-[#303030]/[0.6]'>
            <FiBell className='text-xl text-white cursor-pointer' />
          </div>
        </div>
        <div className='flex w-8 h-8 overflow-hidden rounded-full cursor-pointer md:ml-4'>
          <img src='https://i.pravatar.cc/300' alt='userimage' />
        </div>
      </div>
    </div>
  );
};

export default Header;
