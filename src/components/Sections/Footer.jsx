import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
// import LogoImg from "../../assets/svg/Logo";
import LogoIcon from "../../assets/img/logo.png";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="antracitBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
                  <img src={LogoIcon} alt="logo" style={{width: '20%'}} />
           
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Optika</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="video" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;