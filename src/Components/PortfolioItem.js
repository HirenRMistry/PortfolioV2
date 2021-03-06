import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import PItem from './PItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

class PortfolioItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'../resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render(){
    const id = this.props.match.params.id;

    return (
          <PItem data={this.state.resumeData.portfolio} id ={id} />
    );
  }

}
export default PortfolioItem;
