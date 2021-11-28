import React, { Component } from 'react';
import colours from '../../data/colours.json';
import {Tag} from '@chakra-ui/react';


export default class TechTag extends Component {
    render(){
        var tag = this.props.tag;
        var col = colours[tag] ? colours[tag] : colours['default'];
    
        return (
            <Tag 
                className="tag"
                variant="subtle" 
                marginRight="2px" 
                color="white"
                backgroundColor={col} 
                borderRadius="full" 
                size='lg'
                >
                {tag}
            </Tag>
        )
    }
}