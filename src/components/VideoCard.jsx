import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import VideoLength from '../shared/VideoLength.jsx';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-48 overflow-hidden md:h-40 md:rounded-xl'>
          <img
            className='object-cover w-full h-full'
            src={video?.thumbnails?.[0]?.url}
            alt=''
          />
          {video?.lengthSeconds && <VideoLength time={video.lengthSeconds} />}
        </div>
        <div className='flex mt-3 text-white'>
          <div className='flex items-start'>
            <div className='flex overflow-hidden rounded-full h-9 w-9'>
              <img
                src={video?.author?.avatar[0]?.url}
                className='object-cover w-full h-full'
                alt={video.author}
              />
            </div>
          </div>
          <div className='flex flex-col ml-3 overflow-hidden'>
            <span className='text-sm font-bold line-clamp-2'>
              {video?.title}
            </span>
            <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
              )}
            </span>
            <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1'>
                .
              </span>
              <span className='truncate'>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
