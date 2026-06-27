import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import Job from './Job';

export default function Resume({ data }) {
  return (
    <section id="resume" className="section">
      <div className="section-title-wrap">
        <h2 className="section-title">Experience</h2>
      </div>
      <VerticalTimeline>
        {(data || []).map(job => (
          <Job key={`${job.company}-${job.date}`} job={job} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
