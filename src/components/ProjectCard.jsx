import React, { Component } from 'react';
import { HStack } from '@chakra-ui/react';
import TechTag from './TechTag';

export default class ProjectCard extends Component {

  render() {
    var { url, github, title, category, date, one_line, tags } = this.props.project
    // const project = this.props.project

    function urlSwitcher(url, github) {
      if (url && github) {
        return <a href={url}><i className=" projlink github fa fa-github"></i></a>
      }
      if (url) {
        return <a href={url}><i className=" projlink fa fa-external-link"></i></a>
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
        <div key={title} className="columns portfolio-item">
          <div className="projectCard">
            <h1>{title}{urlSwitcher(url, github)}</h1>
            <h2>{category}</h2>
            <h3>{date}</h3>
            <p>{one_line}</p>
            <div>
              {tags.map(tag => <TechTag tag={tag} />)}
            </div>
          </div>
        </div>
      </HStack>
    );
  }
}