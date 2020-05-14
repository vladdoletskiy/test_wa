import React from 'react';
import "./videopresentation.css";


const VideoPresentation = () => {
  return (
  <div id = "cover" >
      <div id = "baner_for_video"></div>
        <div id= "video">
            <iframe width="970" height="430" 
            src="https://www.youtube.com/embed/xewxLp3KeGE" 
            frameborder="0" 
            allow="accelerometer; autoplay; 
            encrypted-media; gyroscope; 
            picture-in-picture" 
            allowfullscreen></iframe>
        </div>
  </div>
  )
};

export default VideoPresentation;