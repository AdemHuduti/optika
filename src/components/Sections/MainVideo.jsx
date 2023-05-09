import React from "react";
import styled from "styled-components";
// Assets
import video from "../../assets/video/main-video.mp4";

export default function MainVideo() {
  return (
    <div>

    <VideoWrapper id="video">
      <VideoText>Dobro došli u svijet optike</VideoText>
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
    </div>
  );
}

const VideoWrapper = styled.div`

  position: relative;
  @media (max-width: 960px) {
    margin-top: 150px;
  }
`;

const VideoText = styled.div`
  color: #fff;
  font-size: 42px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 40%;
  text-shadow: 0 0 8px #000;

  @media (max-width: 960px) {
    font-size: 32px;
  }

`;
