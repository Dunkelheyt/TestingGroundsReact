import React, {Component} from 'react';
import data from "./data.json";

class YTJson extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items:[],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }
  render(){

    var {isLoaded, items} = this.state;

    if(!isLoaded){
      return<div>Loading...</div>;
    }
    else {
      return(
        <div>
          <h1>JSON Hosted on Internet</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/OVuYIMa5XBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <ul>

            {items.map(item => (
              <li key={item.id}>
                Name: {item.name}
              </li>
            ))}

          </ul>
        </div>
      )
    }

  }
}

export default YTJson;
