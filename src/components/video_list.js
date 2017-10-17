import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  var videoItems = props.videos.map((video, i) => {
    return (
        <VideoListItem key={video.etag} videos={video} />
    )
  })
  return (

    <ul className="col-md-4 list-group">
      {videoItems}

    </ul>
  );
};

export default VideoList;
