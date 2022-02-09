import React from 'react';

const gitLink = ({href}) => {
  return <div className='project-git-wrapper'>
        <a href={href} target="_blank" rel="noreferrer">
            <p className="projects-git-link">View GitHub repository</p>
        </a>
  </div>;
};

export default gitLink;
