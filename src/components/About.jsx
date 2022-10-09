import React, { Component } from 'react';
import AOS from 'aos';

export default class About extends Component {

  render() {
    if (this.props.data) {

      var { bio, image: profilepic } = this.props.data;

      AOS.init({
        duration: 2000
      });
      
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" data-aos="fade-up" src={"images/" + profilepic} alt="Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>ME.</h2>
            {bio.map(bioLine => <div><p>{bioLine}</p></div>)}
          </div>
        </div>
      </section>
    );
  }
}

