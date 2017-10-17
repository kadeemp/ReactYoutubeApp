import React from 'react'


var VideoListItem = ({video}) => {
  console.log(video);
  return (
    <div>
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-list">
            <img className="media-object"/>
          </div>
          <div className="media-body">
          </div>
        </div>
      </li>
    </div>
  )
}


export default VideoListItem;
