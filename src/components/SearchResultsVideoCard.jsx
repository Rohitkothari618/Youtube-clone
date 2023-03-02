import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import VideoLength from '../shared/VideoLength.jsx';

const SearchResultsVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex flex-col mb-8 md:flex-row md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4'>
        <div className='relative flex w-full h-48 overflow-hidden shrink-0 md:h-28 lg:h-40 xl:h-48 md:w-48 ld:w-64 xl:w-80 rounded-xl bg-slate-800'>
          <img
            className='object-cover w-full h-full'
            src={video?.thumbnails?.[0]?.url}
            alt=''
          />
          {video?.lengthSeconds && <VideoLength time={video.lengthSeconds} />}
        </div>
        <div className='flex flex-col mt-4 ml-4 overflow-hidden md:ml-6 md:mt-0'>
          <span className='text-lg font-semibold text-white md:text-2xl line-clamp-2'>
            {video?.title}
          </span>
          <span className='text-sm text-white/[0.7] md:pr-24 md:py-4 empty:hidden line-clamp-1 md:line-clamp-2'>
            {video.descriptionSnippet}
          </span>
          <div className='items-center hidden md:flex '>
            <div className='flex items-start mr-3'>
              <div className='flex overflow-hidden rounded-full h-9 w-9'>
                <img
                  src={video?.author?.avatar[0].url}
                  alt={video?.author}
                  className='object-cover w-full h-full'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='mt-2 text-sm font-semibold text-white/[0.7] flex items-center'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                  <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
                )}
              </span>
              <div className='flex text-sm font-semibold text-white/[0.7] truncate overflow-hidden'>
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1'>
                  .
                </span>
                <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultsVideoCard;
