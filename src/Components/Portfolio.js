import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import styled from "styled-components";
// import IsoTopeGrid from "react-isotope";

// const filtersDefault = [
//   { label: "All", isChecked: true },
//   { label: "Year 1", isChecked: false },
//   { label: "Year 2", isChecked: false },
//   { label: "Year 3", isChecked: false },
//   { label: "Personal", isChecked: false }
// ];
//
// const Container = styled.div`
//   position: relative;
//   width: 100px;
//   height: 100px;
//   margin-top: 20px;
// `;
//
// const Filter = styled("button")`
//   background-color: transparent;
//   border: none;
//   outline: none;
//
//   > input {
//     width: 0;
//     height: 0;
//
//     &:checked {
//       & + label {
//         color: blue;
//         border-color: blue;
//       }
//     }
//   }
//
//   > label {
//     padding: 5px;
//     border-bottom: 2px solid transparent;
//
//     &:hover {
//       color: blue;
//       cursor: pointer;
//     }
//   }
// `;
//
// const [filters, updateFilters] = useState(filtersDefault);
//
// const onFilter = event => {
//   const {
//     target: { value, checked }
//   } = event;
//
//   updateFilters(state =>
//     state.map(f => {
//       if (f.label === value) {
//         return {
//           ...f,
//           isChecked: checked
//         };
//       }
//
//       return f;
//     })
//   );
// };


class Portfolio extends Component {
  render() {


    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        var tagclassname = 'columns portfolio-item aos-init aos-animate data-aos-delay="200" data-aos="fade-up" ' ;
        var t = '';
        var tags = '';
        for (t in projects.tags){
          tags = tags + projects.tags[t] + " ";
        }
        tagclassname = tagclassname + tags

        AOS.init({
            // initialise with other settings
            duration : 2000
          });

        const items = [];

        for (const [index, value] of projects.tags.entries()) {
          var c = 'tag  tagBorder' ;
          // console.log(c);
          items.push(<p className={c}>{value}</p>);
        }
        var linkToProject;
        // console.log(projects.github);
        if(projects.github){
          linkToProject = <p key={projects.title}><a href={projects.url}><i className=" projlink fa fa-github"></i></a></p>
        }
        // else{
        // linkToProject = <p className="projlink"><a href={projects.url}><i className=" projlink fa fa-external-link"></i></a></p>
        // }

        return (
          <div className={tagclassname}>
            <div key={projects.title} >
              <div className="item-wrap">
                  <img alt={projects.title} src={projectImage} />
                  <div className="overlay">
                    <div className='portfolio-item-meta '>


                      <h5>{projects.title} </h5>

                      <h6>{projects.date}</h6>
                      <p>{projects.category}</p>
                      <div className="tags">  {linkToProject}{items}   </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        )
      })
    }

    return (

      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
            <h1><span>Portfolio</span></h1>
            <h1>Here are some of my university and personal projects.</h1>
            <div id="portfolio-flters" className="button-group filter-button-group ">

                <button data-filter="*" className="filter-active">All</button>
                <button data-filter=".Personal">Personal</button>
                <button data-filter=".Year1">Year 1</button>
                <button data-filter=".Year2">Year 2</button>
                <button data-filter=".Year3">Year 3</button>
                <div className="quicksearch"><input type="text" className="quicksearch" id="quicksearch" placeholder="Search" /></div>

              </div>

            <div id="portfolio-wrapper" className=" bgrid-thirds cf grid portfolio-container">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
