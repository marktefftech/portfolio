import React from 'react'

const ProjectDetails = (props) =>{
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, placeat consequuntur, doloremque aspernatur quia ratione consectetur ex autem quibusdam officia, iusto deleniti impedit voluptates optio facilis quae magni reprehenderit. Accusantium.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by: Mark</div>
                    <div>September 2nd, 2019</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
