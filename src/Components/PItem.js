import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';

class PItem extends Component {
  render() {
    const block = [];

    if(this.props.data){
      var projects = this.props.data.projects;
      var id  = this.props.id;
      var lenOfProjects = Object.keys(projects).length

      var proj = '';

      for (var i = 0; i < lenOfProjects; i++) {
        var projName = projects[i].title.replace(/ +/g, "");

        if(projName===id){
          proj = projects[i];
          var projectImage = '../../images/portfolio/' + proj.image;

          break;
        }
      }

      block.push(
        <div>
          <h1>Project: {proj.title}</h1>
          <Carousel>
            <Carousel.Item >
            <img alt={proj.title} src={projectImage} className="d-block " style={{'height':"300px"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img alt={proj.title} src={projectImage} className="d-block" style={{'height':"300px"}}/>
            </Carousel.Item>
            </Carousel>


          <p>{proj.info}</p>
          <p></p>
        </div>
      )
    }
    return(
      <div id="PortfolioPage">
        {block}
      </div>
    );
  }
}


export default PItem;
