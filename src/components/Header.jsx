import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#resume' },
  { label: 'Travel', href: '#map' },
  { label: 'Contact', href: '#contact' },
];

const PARTICLES_OPTIONS = {
  background: { color: { value: '#0f172a' } },
  fullScreen: { enable: false },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      grab: { distance: 160, links: { opacity: 0.6 } },
      push: { quantity: 3 },
    },
  },
  particles: {
    color: { value: '#f97316' },
    links: {
      color: '#f97316',
      distance: 200,
      enable: true,
      opacity: 0.6,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 2,
      outModes: { default: 'bounce' },
    },
    number: { value: 100, density: { enable: true } },
    opacity: { value: 1 },
    shape: { type: 'circle' },
    size: { value: { min: 2, max: 4 } },
  },
  detectRetina: true,
};

export default function Header({ data }) {
  const { name, description, social } = data || {};
  const linkedin = social?.find(s => s.name === 'linkedin');
  const github = social?.find(s => s.name === 'github');

  const init = useCallback(engine => loadSlim(engine), []);

  return (
    <header id="home" className="site-header">
      <Particles id="tsparticles" init={init} options={PARTICLES_OPTIONS} style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0
      }} />

      <nav className="site-nav">
        <div className="nav-inner">
          <span className="nav-brand">HM</span>
          <ul className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <button className="nav-hamburger" onClick={e => {
            const menu = e.currentTarget.closest('nav').querySelector('.nav-mobile');
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
          }} aria-label="Toggle menu">
            <i className="fa fa-bars" />
          </button>
        </div>
        <ul className="nav-mobile" style={{ display: 'none' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}><a href={href} onClick={e => {
              e.currentTarget.closest('.nav-mobile').style.display = 'none';
            }}>{label}</a></li>
          ))}
        </ul>
      </nav>

      <div className="header-content">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="header-socials">
          {[linkedin, github].filter(Boolean).map(({ name: n, url, className }) => (
            <a key={n} href={url} target="_blank" rel="noreferrer">
              <i className={className} />
            </a>
          ))}
        </div>
      </div>

      <a className="scroll-down" href="#about">
        <i className="fa fa-chevron-down" />
      </a>
    </header>
  );
}
