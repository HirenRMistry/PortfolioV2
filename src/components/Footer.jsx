import React from 'react';

export default function Footer({ data }) {
  const { social = [] } = data || {};

  return (
    <footer id="footer" className="site-footer">
      <ul className="footer-socials">
        {social.map(({ name, url, className }) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noreferrer" aria-label={name}>
              <i className={className} />
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-copy">© {new Date().getFullYear()} Hiren Mistry</p>
      <a className="back-to-top" href="#home" title="Back to top">
        <i className="fa fa-chevron-up" />
      </a>
    </footer>
  );
}
