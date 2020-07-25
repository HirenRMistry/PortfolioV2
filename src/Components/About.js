import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends Component {

  render() {

      if(this.props.data){
      // var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio1 = this.props.data.bio1;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
      var bio4 = this.props.data.bio4;
      var bio5 = this.props.data.bio5;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    }
    AOS.init({
        // initialise with other settings
        duration : 2000
      });
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" data-aos="fade-up" src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <div data-aos="fade-left" data-aos-delay="100"><p>{bio1}</p></div>
            <div data-aos="fade-left" data-aos-delay="200"><p>{bio2}</p></div>
            <div data-aos="fade-left" data-aos-delay="300"><p>{bio3}</p></div>
            <div data-aos="fade-left" data-aos-delay="400"><p>{bio4}</p></div>
            <div data-aos="fade-left" data-aos-delay="500"><p>{bio5}</p></div>


         </div>
      </div>
   </section>
    );
  }
}

export default About;
