import React, { Component } from 'react';
import Job from './Job';
import { VerticalTimeline}  from 'react-vertical-timeline-component';

export default class Resume extends Component {

  render() {
    if(this.props.data){
      var resume = this.props.data;
    }

    var titleContainer = {
      textAlign:'center', 
      marginBottom: '30px'
    };
    var titleStyle = {
      borderBottom: '3px solid orange',
      padding: '3px',
    }

    return (
        <section id="resume">
          
          <div style={titleContainer}>
            <h1><span style={titleStyle}>Experience</span></h1>
          </div>
          
          <VerticalTimeline>
            {resume.map(job => <Job job={job}/>)}
          </VerticalTimeline>

        </section>
    );
  }
}

