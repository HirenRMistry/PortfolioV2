import React from 'react';
import colours from '../data/colours.json';

export default function TechTag({ tag }) {
  const color = colours[tag] || colours['default'];
  return (
    <span
      className="tech-tag"
      style={{ '--tag-color': color }}
    >
      {tag}
    </span>
  );
}
