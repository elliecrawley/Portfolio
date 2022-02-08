import React from 'react';

const ButtonSecondary = ({href, secondaryBtnClass}) => {
  return <div className={secondaryBtnClass}>
            <a href={href} target="_blank" rel="noreferrer">   
                <button>View Live Site</button>
            </a>
        </div>;
};

export default ButtonSecondary;
