import React, { Component } from 'react';
import {HStack} from '@chakra-ui/react';
import TechTag from './TechTag';

export default class ProjectCard extends Component {

  render() {
      const project = this.props.project
       
      function url(project){
        if(project.url && project.github){
          return <a href={project.url}><i className=" projlink github fa fa-github"></i></a>
        }
        if (project.url){
          return <a href={project.url}><i className=" projlink fa fa-external-link"></i></a>
        }
      return null;
    }

    return (
      <HStack
        p={4}
        rounded="xl"
        borderWidth="1px"
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "dark-lg" }}
        boxShadow="lg"
        
      >
        <div key={project.title} className="columns portfolio-item">
          <div className="projectCard">
            <h1>{project.title}{url(project)}</h1>
            <h2>{project.category}</h2>
            <h3>{project.date}</h3>
            <p>{project.one_line}</p>
            <div>
              {project.tags.map(t => <TechTag tag={t}/>)}
            </div>
          </div>
        </div>
      </HStack>
    );
  }
}