import React from "react";

const WithVideo = (Component) => {
  const Video = (props) => {

    return(
     <Component {...props} />
    )
  };
  return Video;
};

export default WithVideo;
