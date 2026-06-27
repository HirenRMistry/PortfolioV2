import React, { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaAmazon } from 'react-icons/fa';
import TechTag from './TechTag';

const ICON_MAP = { Amazon: <FaAmazon /> };

const contentStyle = { border: '2px solid #f97316', color: '#0f172a', borderRadius: '12px' };
const contentArrowStyle = { borderRight: '7px solid #f97316' };
const iconStyle = { background: '#f97316', color: '#fff' };

export default function Job({ job }) {
  const { date, position, company, desc, location, tags } = job;
  const [expanded, setExpanded] = useState(false);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={date}
      iconStyle={iconStyle}
      icon={ICON_MAP[company] ?? <FaBriefcase />}
    >
      <h3 className="job-title">
        {position}
        {desc.length > 0 && (
          <button
            className={`expand-btn ${expanded ? 'expanded' : ''}`}
            onClick={() => setExpanded(v => !v)}
            aria-label={expanded ? 'Collapse' : 'Expand'}
          >
            <i className="fa fa-chevron-down" />
          </button>
        )}
      </h3>
      <h4 className="job-company">{company} · {location}</h4>

      <div className={`job-desc-wrapper ${expanded ? 'open' : ''}`}>
        <ul className="job-desc">
          {desc.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>

      <div className="job-tags">
        {tags.sort().map(tag => <TechTag key={tag} tag={tag} />)}
      </div>
    </VerticalTimelineElement>
  );
}
