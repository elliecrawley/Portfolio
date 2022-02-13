import React from 'react';

const gitLink = ({href}) => {
  return <div className='project-git-wrapper'>
              <a href={href} target="_blank" rel="noreferrer" aria-label="View GitHub repository">
                  <p className="projects-git-link" aria-hidden="true" focusable="false">View GitHub repository</p>
              </a>
        </div>;
};

export default gitLink;
