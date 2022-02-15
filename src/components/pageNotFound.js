import React from 'react'
import ProjectThumbnails from './projectThumbnails'

const PageNotFound = () => {
  return (
    <div className='wrapper404'>
        <h1 className='header404'>404</h1>
        <p className='txt404'>I'm afraid the page you're looking for can't be found. Why not check out one of these projects from my portfolio instead?</p>
        <div className="View-more__container-inner">
            <ProjectThumbnails />         
        </div>
    </div>
  )
}

export default PageNotFound