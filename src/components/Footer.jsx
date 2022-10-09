import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(({name, url, className}) => {
        return (
          <li key={name}>
            <a href={url}>
              <i className={className}></i>
            </a>
          </li>
        )
      })
    }

    return (
      <footer id="footer">
        <div className="row">
          <div className="twelve columns">
            
            <ul className="social-links">
              {networks}
            </ul>

            <ul className="copyright">
              <li>Hiren Mistry 2022</li>
            </ul>

          </div>
          
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        
        </div>
      </footer>
    );
  }
}

export default Footer;
