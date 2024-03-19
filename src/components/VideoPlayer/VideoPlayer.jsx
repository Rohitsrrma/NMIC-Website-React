import React from 'react'
import ReactPlayer from 'react-player';


function VideoPlayer ({ url })  {
    return (
      <div className='flex  bg-nmicbg justify-center'>
        <ReactPlayer
          url={url}
          controls={true}
          loop={true}
          width="60%"
          height="60%"
        />
      </div>
    );
  };

export default VideoPlayer