import React, {Component} from 'react';
import data from "./data.json";

class YTJson extends React.Component{
  render(){
    return(
      <div>
        <h1>YOUTUBE JSON TEST</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OVuYIMa5XBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {data.map((postDetail, index) =>{
          return <div class = "clearfix borderscomplete container mb-3">
          <div class = "row">
            <div class = "col-sm-4">
              <img class = "img-thumbnail float-left pull-left mr-2 imgclass" src={postDetail.image} />
            </div>

            <div class = "col-sm-8">
              <h1 class="text-center">{postDetail.title}</h1>
              <p class="text-center lead">{postDetail.info}</p>
              <p class="text-center lead">{postDetail.id}</p>
              <p class="text-center lead">{postDetail.info}</p>
              <p class="text-center lead">{postDetail.id}</p>
            </div>

          </div>
          </div>
        })}
      </div>
    )
  }
}

export default YTJson;
