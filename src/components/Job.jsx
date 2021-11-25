import React, { Component } from 'react';
import { VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBriefcase, FaChevronDown} from 'react-icons/fa';
import TechTag from './TechTag';

export default class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false
        };
    }

    chevronButton = () => {
        return (
            <button 
                onClick={() => this.setState({show: !this.state.show})}
                style={{color: "#CC5200"}}
            >
            <FaChevronDown/></button>
        )
    }   
    
    render(){
        var job = this.props.job; 


        return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{border: '2px solid  #0762f9', color: 'black'}}
              contentArrowStyle={{ borderRight: '7px solid  #0762f9' }}
              date={job.date}
              iconStyle={{ background: '#95A3A3', color: '#fff' }}
              icon={<FaBriefcase/>}
            >
              <h3>{job.position}  {job.desc.length ? this.chevronButton() : null}</h3>
              <h4><i>{job.company} - {job.location}</i></h4> 
              {this.state.show && 
                <ul style={{listStyleType: "disc"}}>
                  {job.desc.map(d => <li style={{marginLeft: "20px"}}>{d}</li>)}
                </ul>
                }
              <div style={{marginTop: '5px'}}>
                {job.tags.map(t => <TechTag tag={t}/>)}
              </div>
            </VerticalTimelineElement>

        )
    }
}