import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
    return(
        <div className="project-list section row center">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    )
}

export default ProjectList;