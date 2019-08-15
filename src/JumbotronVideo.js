import React, {Component} from "react";
import Navbar from "./Navbar";


class JumbotronVideo extends Component{
  render(){
    return(
      <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"></source>
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <Navbar></Navbar>
              <h1 class="display-3">Logo here</h1>
              <p class="lead mb-0">Small text</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default JumbotronVideo;
