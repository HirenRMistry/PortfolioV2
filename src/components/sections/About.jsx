import React, { Component } from 'react';
import AOS from 'aos';

export default class About extends Component {

  render(){
      if(this.props.data){
        var profilepic = "images/"+this.props.data.image;
        var aboutText = this.props.data.bio;
        
        AOS.init({
          duration : 2000
        });
      }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
              <img className="profile-pic" data-aos="fade-up" src={profilepic} alt="Profile Pic" />
          </div>
          <div className="nine columns main-col">
              <h2>ME.</h2>
              {aboutText.map(el => (
                <div><p>{el}</p></div>
              ))}
          </div>
        </div>
      </section>
  );
  }
}

