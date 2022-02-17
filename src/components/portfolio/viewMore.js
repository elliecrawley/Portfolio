import SectionTitle from "../sectionTitle"
import ProjectThumbnails from "../projectThumbnails";

const ViewMore = () => {

    return (
        <section className="View-more__container">
            <SectionTitle text="View More Projects"/>
            <p>Select one of the images below to learn more about the project.</p>
            <div className="View-more__container-inner">
                <ProjectThumbnails />         
            </div>
        </section>
    )
}

export default ViewMore
