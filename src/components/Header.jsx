import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
export default class Header extends Component {

   render() {

      if (this.props.data) {
         var { name, description, social: [linkedin, , github] } = this.props.data

         var background = <ParticlesBg type="lines" bg={true} />;
      }

      var socialsStyle = {
         fontSize: "25px",
         margin: "15px",
         color: '#11ABB0'
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
                  <li><a className="smoothscroll" href="#resume">Experience</a></li>
                  <li><a className="smoothscroll" href="#map">Travel</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>

               </ul>
            </nav>

            <div className="row banner">

               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h3>{description}</h3>
                  {[linkedin, github].map(({url, className}) => <a href={url}><i className={className} style={socialsStyle}></i></a>)}
               </div>
            
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

