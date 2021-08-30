import React, { Component } from 'react';
import 'aos/dist/aos.css';
import ProjectCard from './ProjectCard';
import { SimpleGrid } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.data.projects, 
      defaultCategory: this.props.data.defaultCategory,
      categories: this.props.data.categories
    };

    this.state.buttons = this.createFilterButtons(this.state.defaultCategory);
    this.state.currList = this.filterProjects(this.state.defaultCategory);

    this.updateProjState = this.updateProjState.bind(this);
    this.createFilterButtons = this.createFilterButtons.bind(this);
  }

  filterProjects = (str) => {
    return this.state.projects.filter((el) => el.tags.includes(str))
  }

  updateProjState = (str) => {
    this.setState({
      currList: str==='All' ? this.state.projects : this.filterProjects(str),
      buttons: this.createFilterButtons(str)
    })
  }

  createFilterButtons = (activeStr) => {
    return this.state.categories.map(str => {
        return(
        <Button
          className={str===activeStr ? 'filter-active':null} 
          size="lg" 
          onClick={() => this.updateProjState(str)}>
            {str}
        </Button>)
      })
    }

  render() {
    if (this.props.data) {

      //Find distinct tags
      var colour = []
      this.state.projects.map(project => project.tags.map(n => colour.push(n)));
      console.log(colour.filter((v, i, a) => a.indexOf(v) === i));

    }

    return (

      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
            <div className="portfolioTitle">
              <h1><span>Portfolio</span></h1>
              <h1>Here are some of my university and personal projects.</h1>
            </div>
            <div id="portfolio-flters" className="button-group filter-button-group ">
              {this.state.buttons}
            </div>
          </div>
        </div>

        <div style={{padding:"25px"}}>
          <SimpleGrid minChildWidth="46%" spacing="40px" mt={5}>
          {this.state.currList.map(project => (
            <ProjectCard project={project}/>
          ))}
          </SimpleGrid>
        </div>
      </section>
    );
  }
}