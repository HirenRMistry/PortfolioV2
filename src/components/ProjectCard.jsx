import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Tag, HStack} from '@chakra-ui/react';
import colours from '../data/colours.json';
function Tags(tags){
  const technologies = [];
  tags.map(tag => {
    var col = colours[tag] ? colours[tag] : colours['default'];
    technologies.push(<Tag variant="subtle" marginRight="2px" color="white" backgroundColor={col} colorScheme="gray600" borderRadius="full" size='lg'>{tag}</Tag>);
  })
    return technologies;
}
export default class ProjectCard extends Component {

  render() {
      const project = this.props.project
      // console.log(project);
      var tagclassname = 'columns portfolio-item aos-init aos-animate data-aos-delay="200" data-aos="fade-up" ' ;
      var t = '';
      var tags = '';
      for (t in project.tags){
        tags = tags + project.tags[t] + " ";
      }
      tagclassname = tagclassname + tags
    
      AOS.init({
          // initialise with other settings
          duration : 2000
        });
       
      Tags(project.tags);
      var linkToProject;
      // console.log(projects.github);
      if(project.github){
        linkToProject = <a href={project.url}><i className=" projlink fa fa-github"></i></a>
      }
      // else{
      //   linkToProject = <a href={project.url}><i className="fa fa-external-link"></i></a>
      // }

    return (
      <HStack
        p={4}
        // bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        // borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "dark-lg" }}
        boxShadow="lg"
        
      >
      <div key={project.title} className={tagclassname}>
        <div className="projectCard">
        <h1>{project.title}{linkToProject}</h1>
        <h2>{project.category}</h2>
        <h3>{project.date}</h3>
        <p>{project.one_line}</p>
        <div>{Tags(project.tags)}</div>
        </div>
        </div>
      </HStack>
    );
  }
}