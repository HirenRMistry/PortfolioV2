import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBriefcase} from 'react-icons/fa';
import TechTag from './TechTag';

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
          {resume.map(job => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{border: '2px solid  #0762f9', color: 'black'}}
              contentArrowStyle={{ borderRight: '7px solid  #0762f9' }}
              date={job.date}
              iconStyle={{ background: '#95A3A3', color: '#fff' }}
              icon={<FaBriefcase/>}
            >
              <h3>{job.position}</h3>
              <h4>{job.company} - {job.location}</h4>
              {job.desc.map(d => <p style={{margin:'0'}}>{d}</p>)}
              <div style={{marginTop: '5px'}}>
              {job.tags.map(t => <TechTag tag={t}/>)}
            </div>
            </VerticalTimelineElement>
          ))}
          </VerticalTimeline>

        </section>
    );
  }
}

