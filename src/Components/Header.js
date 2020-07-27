import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  render() {

    if(this.props.data){
       // var project = this.props.data.project;
       // var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var welcome= this.props.data.welcome;

      // var city= this.props.data.address.city;
      // var networks= this.props.data.social.map(function(network){
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })
      var colorsLike = ["#4BD7CA", "#F4F7BF", "#03EB32", "#51ADC5", "#09D894", "#A8F505", "#2FE2BB"]
      var color = this.getRandomColor();
      console.log(color);
      var backgroundDecison = [
        <ParticlesBg type="cobweb" color = {color} bg={true} />,
        <ParticlesBg type="lines"  bg={true} />
      ];
      var background = backgroundDecison[Math.floor(Math.random()*2)];
    }

    return (
      <header id="home">
      {background}
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#resume">Skills</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>

         </ul>
      </nav>

      <div className="row banner">

         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
            <p>{welcome}</p>
            <hr />

         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
