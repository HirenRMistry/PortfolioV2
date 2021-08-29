import React, { Component } from 'react';

export default class About extends Component {

  render(){
      if(this.props.data){
        var data = this.props.data;
        var profilepic= "images/"+this.props.data.image;
      }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
              <img className="profile-pic" data-aos="fade-up" src={profilepic} alt="Profile Pic" />
          </div>
          <div className="nine columns main-col">
              <h2>ME.</h2>
              {this.props.data.bio.map(el => (
                <div><p>{el}</p></div>
              ))}
          </div>
        </div>
      </section>
  );
  }
}

