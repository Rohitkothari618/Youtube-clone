import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { fetchDataFromApi } from '../utils/api';
import { Context } from '../context/contextApi';
import LeftNav from './LeftNav';
import SearchResultsVideoCard from './SearchResultsVideoCard';
const SearchResults = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res.contents);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto  bg-black'>
        <div className='grid gap-2 p-5 grid-col-1'>
          {result?.map((item) => {
            if (item?.type !== 'video') return false;
            const video = item?.video;
            return (
              <SearchResultsVideoCard key={video?.videoId} video={video} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
