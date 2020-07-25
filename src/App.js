import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';


class App extends Component {

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
      url:'./resumeData.json',
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

  render() {
    var test1 = this.state.resumeData.resume;
    var test2 = this.state.resumeData.portfolio;
    var test = {...test1, ...test2};
    // console.log(this.state.resumeData)
    let unwrap2 = function({portfolio, resume}) { return { portfolio, resume}; };
    const {portfolio, resume, main} = this.state.resumeData
    const picked2 = {portfolio, resume}
    // let picked2 = unwrap2(this.state.resumeData)

    // const picked = (({"portfolio", "resume" }) => ({ "portfolio", "resume"}))(this.state.resumeData);
    // let unwrap = ({"portfolio", "resume"}) => ({'portfolio', 'resume'});

    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Resume data={picked2}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>


    );
  }
}

export default App;
