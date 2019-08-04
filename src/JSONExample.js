import React, {Component} from 'react';
import data from "./data.json";

class JSONExample extends React.Component{
  render() {
    return(
      <div>
        <h1>JSON TEST</h1>
        {data.map((postDetail, index) =>{
          return <div>
          <h1>{postDetail.title}</h1>
          <img src={postDetail.image} />
          </div>
        })}
      </div>
    )
}
}

export default JSONExample;
