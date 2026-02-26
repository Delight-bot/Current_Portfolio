import React from 'react';
import './Organizations.css';

const orgs = [
  { name: 'ACM',                 color: '#0085CA' },
  { name: 'ColorStack',          color: '#7C3AED' },
  { name: 'Rewriting the Code',  color: '#EC4899' },
  { name: 'CodePath',            color: '#F97316' },
  { name: 'NCWIT',               color: '#2563EB' },
];

const Organizations = () => (
  <div className="orgs-belt">
    <span className="orgs-eyebrow">Communities</span>
    <div className="orgs-outer">
      <div className="orgs-track">
        {[0, 1, 2].map(copy =>
          orgs.map(org => (
            <div key={`${org.name}-${copy}`} className="org-badge">
              <span className="org-dot" style={{ background: org.color }} />
              <span className="org-name">{org.name}</span>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);

export default Organizations;
