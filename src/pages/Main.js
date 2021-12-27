import React from "react";
import './assets/css/style.css'

const Main = () => {
  return (
    <div class="intro">
        <div class="container">
          <div class="intro__inner">
            <h2 class="intro__suptitle">Welcome to Arizona!</h2>
           

            <a class="btn" href="about">Learn More</a>
          </div>
      </div>

      <div class="slider">
          <div class="container">
              <div class="slider__inner">
                  <div class="slider__item active">
                      <span class="slider__num"></span>
                      Intro
                  </div>
                  <div class="slider__item">
                      <span class="slider__num"></span>
                      Work
                  </div>
                  <div class="slider__item">
                      <span class="slider__num"></span>
                      About
                  </div>
                  <div class="slider__item">
                      <span class="slider__num"></span>
                      Contacts
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Main;