import React, {Component} from 'react';
import data from "./videodata.json";

class YTComplete extends React.Component{
  render() {
    return(
      <div>
        <h1 class = "text-center">JSON Youtube TEST</h1>
        <div class = "container">
        <div class = "row align-items-start">
        {data.map((postDetail, index) =>{
          return <div>
          <div class = "col-4 ">
            <iframe class ="youtubevid" src={postDetail.id} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p class="text-break">{postDetail.name}</p>
          </div>
          </div>
        })}
        </div>
        </div>
      </div>
    )
}
}

export default YTComplete;
