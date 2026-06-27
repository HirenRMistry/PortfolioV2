import React from 'react';
import TechTag from './TechTag';
import colours from '../data/colours.json';

function ProjectLink({ url, github }) {
  if (!url) return null;
  return (
    <a href={url} target="_blank" rel="noreferrer" className="project-link">
      <i className={`fa ${github ? 'fa-github' : 'fa-external-link'}`} />
    </a>
  );
}

export default function ProjectCard({ project }) {
  const { url, github, title, category, date, one_line, tags } = project;
  // Use the first meaningful tag colour as the top accent
  const accentTag = tags.find(t => colours[t] && colours[t] !== colours['default']);
  const accent = accentTag ? colours[accentTag] : '#f97316';

  return (
    <div className="project-card" style={{ '--accent': accent }}>
      <div className="project-card-top" />
      <div className="project-card-body">
        <div>
          <h3 className="card-title">
            {title}
            <ProjectLink url={url} github={github} />
          </h3>
          <p className="card-category">{category}</p>
          <p className="card-date">{date}</p>
          <p className="card-desc">{one_line}</p>
        </div>
        <div className="card-tags">
          {tags.map(tag => <TechTag key={tag} tag={tag} />)}
        </div>
      </div>
    </div>
  );
}
