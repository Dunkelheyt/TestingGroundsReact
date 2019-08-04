import React, {Component} from "react";
import placeholder150150 from "./150150.jpg";
import placeholder500500 from "./500500.jpg";
import placeholder470400 from "./470400.jpg";
import placeholder300300 from "./300300.jpg";
import placeholder300250 from "./300250.jpg";

class Panel extends Component {
  render(){
    return(
      <div class="clearfix borders">
        <img src={placeholder300250} class="float-left pull-left mr-2"></img>
        <h3 class="text-center">h3. Bootstrap heading</h3>
        <p class="text-center lead">This text appears next to the image.</p>
      </div>
    );
  }
}

export default Panel;
