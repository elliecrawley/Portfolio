import React from 'react';

const ButtonSecondary = ({href, secondaryBtnClass}) => {
  return <a aria-label="Link to live site" href={href} target="_blank" rel="noreferrer" className={secondaryBtnClass}>   
        View Live Site
        </a>
};

export default ButtonSecondary;
