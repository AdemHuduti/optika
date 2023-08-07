import React from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import ContactImg1 from "../assets/img/add/2.jpg";

export default function Huvitz() {
  return (
    <>
      <TopNavbar />
      <div>
        <div id="huvitz" className="container">
          <div className="huvitz-container huvitz-section">
          <div className="card">
            <div class="content">
              <div class="imgBx">
                <img src={ContactImg1} alt='ContactImg1' />
              </div>
              <div class="contentBx">
                <h3>
                  Title
                  <br />
                  <span>Description</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                Long description
              </li>
            </ul>
          </div>

          <div className="card">
            <div class="content">
              <div class="imgBx">
                <img src={ContactImg1} alt='ContactImg1' />
              </div>
              <div class="contentBx">
                <h3>
                  Title #2
                  <br />
                  <span>Desc #2</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                Long desc #2
              </li>
            </ul>
          </div>

          <div className="card">
            <div class="content">
              <div class="imgBx">
                <img src={ContactImg1} alt='ContactImg1' />
              </div>
              <div class="contentBx">
                <h3>
                  Title 3
                  <br />
                  <span>Desc #3</span>
                </h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                Long desc #3
              </li>
            </ul>
          </div>

          </div>

        </div>  
      </div>

      {/* <div className="row-container">
          <div className="row-item">
            <img src={ContactImg1} alt="img" className="huvitz-img " />
            <div className="huvitz-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum molestias vel id aliquid assumenda quidem minima aliquam, distinctio sit tempore!</div>
          </div>
          <div className="row-item">2</div>
          <div className="row-item">3</div>
        </div> */}

      <Footer />
    </>
  );
}
