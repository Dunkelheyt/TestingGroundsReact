import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Carousel from "./Carousel";
import Panel from './Panel';
import PanelRight from "./PanelRight";
import Navbar from "./Navbar";
import JSONExample from "./JSONExample";
import JSONExamplePretty from "./JSONExamplePretty";
import YTJson from "./YTJson";
import YTComplete from "./YTComplete";
import JumbotronVideo from "./JumbotronVideo";

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
      <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/carousel">Carousel</NavLink></li>
            <li><NavLink to="/panel">Panel information</NavLink></li>
            <li><NavLink to="/panelright">Panel information right</NavLink></li>
            <li><NavLink to="/navbar">Navbar</NavLink></li>
            <li><NavLink to="/jsonexample">Json Data Example</NavLink></li>
            <li><NavLink to="/jsonexamplepretty">Json Data Example Pretty</NavLink></li>
            <li><NavLink to="/ytjson">Fetch Json from internet</NavLink></li>
            <li><NavLink to="/jsonyoutube">Json Youtube</NavLink></li>
            <li><NavLink to="/jumbotronvideo">Jumbotron video</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/carousel" component={Carousel}/>
          <Route path="/panel" component={Panel}/>
          <Route path="/panelright" component={PanelRight}/>
          <Route path="/navbar" component = {Navbar}/>
          <Route path="/jsonexample" component = {JSONExample}/>
          <Route path="/jsonexamplepretty" component = {JSONExamplePretty}/>
          <Route path="/ytjson" component = {YTJson}/>
          <Route path="/jsonyoutube" component = {YTComplete}/>
          <Route path="/jumbotronvideo" component = {JumbotronVideo}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}

export default Main;
