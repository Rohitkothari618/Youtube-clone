import React, { useEffect } from 'react';
import moment from 'moment';

const VideoLength = ({ time }) => {
  useEffect(() => {
    console.log(videoLengthInSeconds);
  }, []);
  const videoLengthInSeconds = moment()
    .startOf('day')
    .seconds(time)
    .format('H:mm:ss');
  return (
    <div className='absolute px-2 py-1 text-white bg-black rounded-md bottom-2 right-2'>
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
