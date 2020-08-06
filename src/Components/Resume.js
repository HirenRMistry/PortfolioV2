import React, { Component } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar'
import AOS from 'aos';



class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  render() {
    AOS.init({
        // initialise with other settings
        duration : 2000
      });
    if(this.props.data){
      console.log(this.props.data2);
      var skillmessage = this.props.data.skillmessage;
      // var projects = this.props.data.projects
      // var projectForSkill = '';

      var skills = this.props.data2.skills.map((skills)=>{
        var className = 'bar-expand '+ skills.name.toLowerCase();
        // this.props.data.projects.map((proj)=>{
        //   console.log(proj);
        // })
        // console.log(skills)
        var projectForSkill = 'Projects: ';
        var flag = false;
        this.props.data.projects.map(function (p){

          if(p.tags.includes(skills.name)){
            if(!flag){
              flag = true;
            }
            projectForSkill += p.title + ', ';
          }
        });
        if (flag){
          projectForSkill = projectForSkill.slice(0, -2);//Remove comma
        }
        console.log(projectForSkill);


          return (
            <li key={skills.name}>
              <em>{skills.name}</em>
              <p>{projectForSkill}</p>
              <span data-aos="fade-right"  style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className} ></span>
            </li>
          )

      })
    }

    return (
      <section id="resume">


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="twelve columns main-col">

            <p>{skillmessage}</p>

				<div className="bars">
          <div className="skillscontainer">
          </div>
				   <ul className="skills progress">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
