import React, { Suspense } from 'react';

import { Link } from "react-router-dom";
import { thumbnailData, thumbnail_details } from './thumbnailData';

const PortfolioItems = React.lazy(() => import('./portfolioIndexSection/portfolioItems'));

const ProjectThumbnails = () => {

    var title = document.title;
    thumbnailData()

  return (
    <>
    {thumbnail_details.filter(val => val.Project !== title)
                  .map(({id, mobileSrc, alt, Project, path}) => {
                        const arr = thumbnail_details.length;
                        const thumbnailFlexWidth = "Portfolio__thumbnails portfolio-item thumbnailLength--" + arr;
                        const aria = "Link to " + {Project} + "project page";
        
        return <Link to={path} key={id} className={thumbnailFlexWidth} aria-label={aria}><Suspense fallback={<div></div>}><PortfolioItems src={mobileSrc} alt={alt} heading={Project}/></Suspense></Link>
                  })}   
    </>
  )
}

export default ProjectThumbnails