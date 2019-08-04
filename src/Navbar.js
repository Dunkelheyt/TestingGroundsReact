import React, {Component} from "react";

class Navbar extends Component{
  render(){
    return(
      <nav class="navbar navbar-expand-lg justify-content-center">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <button type="button" class="btn btn-outline-secondary">Menu</button>
      </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbar">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}


export default Navbar;
