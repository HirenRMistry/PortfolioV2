import React, { Component } from 'react';
import 'aos/dist/aos.css';

import { SimpleGrid } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {


    return (

      <section id="portfolio" style={{background:"#FAF9FF"}}>

        <div className="row">

          <div className="twelve columns collapsed">
            <div className="portfolioTitle">
              <h1><span>Tech</span></h1>
            </div>
            <div id="portfolio-flters" className="button-group filter-button-group ">
              {this.state.buttons}
            </div>
          </div>
        </div>

        <div style={{padding:"25px"}}>
          <SimpleGrid minChildWidth="46%" spacing="40px" mt={5}>

          {/* {this.state.currList.map(project => (
            <ProjectCard project={project}/>
          ))} */}
          </SimpleGrid>
        </div>
      </section>
    );
  }
}