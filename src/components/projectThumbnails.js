import PortfolioItems from './portfolioIndexSection/portfolioItems';
import React from 'react'
import { Link } from "react-router-dom";
import { thumbnailData, thumbnail_details } from './thumbnailData';

const ProjectThumbnails = () => {

    var title = document.title;
    thumbnailData()

  return (
    <>
    {thumbnail_details.filter(val => val.Project !== title)
                  .map(({id, src, alt, Project, path}) => {
                        const arr = thumbnail_details.length;
                        const thumbnailFlexWidth = "Portfolio__thumbnails portfolio-item thumbnailLength--" + arr;
                        const aria = "Link to " + {Project} + "project page";
                    return <Link to={path} key={id} className={thumbnailFlexWidth} aria-label={aria}><PortfolioItems src={src} alt={alt} heading={Project}/></Link>
                  })}   
    </>
  )
}

export default ProjectThumbnails