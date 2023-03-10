import React from "react";
import styled from "styled-components";
// Assets
import video from "../../assets/video/main-video.mp4";

export default function MainVideo() {
  return (
    <VideoWrapper id="video">
      <video
        src={video}
        width="100%"
        height="100%"
        controls=""
        autoPlay={true}
        muted
        loop
      />
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
// margin-top: 120px;
  @media (max-width: 960px) {
    margin-top: 150px;
  }
`;
