import React, { Suspense } from 'react';

const SectionTitle = React.lazy(() => import("../sectionTitle"));
const ProjectThumbnails = React.lazy(() => import("../projectThumbnails"));

const ViewMore = () => {

    return (
        <section className="View-more__container">
            <Suspense fallback={<div>Loading...</div>}>
                <SectionTitle text="View More Projects"/>
            </Suspense>
            <p>Select one of the images below to learn more about the project.</p>
            <div className="View-more__container-inner">
            <Suspense fallback={<div>Loading...</div>}>
                <ProjectThumbnails /> 
            </Suspense>        
            </div>
        </section>
    )
}

export default ViewMore
