import React, { Component } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaChevronDown, FaAmazon } from 'react-icons/fa';
import TechTag from './TechTag';

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.chevronStyle = {
      color: "#CC5200"
    }
    this.contentStyle = {
      border: '2px solid  #0762f9', color: 'black'
    }
    this.contentArrowStyle = {
      borderRight: '7px solid  #0762f9'
    }
    this.iconStyle = {
      background: '#95A3A3', color: '#fff'
    }
  }


  chevronButton = () => {
    return (
      <button
        onClick={() => this.setState({ show: !this.state.show })}
        style={this.chevronStyle}
      >
        <FaChevronDown />
      </button>
    )
  }

  iconSelector = (company) => {
    switch (company) {
      case "Amazon":
        return <FaAmazon/>
    
      default:
        return <FaBriefcase/>
    }
  }



  render() {
    const { date, position, company, desc, location, tags } = this.props.job;


    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={this.contentStyle}
        contentArrowStyle={this.contentArrowStyle}
        date={date}
        iconStyle={this.iconStyle}
        icon={this.iconSelector(company)}
      >
        <h3>{position}  {desc.length ? this.chevronButton() : null}</h3>
        <h4><i>{company} - {location}</i></h4>
        {this.state.show &&
          <ul style={{ listStyleType: "disc" }}>
            {desc.map(line => <li style={{ marginLeft: "20px" }}>{line}</li>)}
          </ul>
        }
        <div style={{ marginTop: '5px' }}>
          {tags.map(tag => <TechTag tag={tag} />)}
        </div>
      </VerticalTimelineElement>

    )
  }
}