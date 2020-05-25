import React from 'react';

function createProject(project) {
    return (
        <a key={project} className="list-group-item list-group-item-action" href="#">{project}</a>
    );
}

const Filters = (props) => {

    let {projects} = props;

    return (
        <div>
            <div className="list-group list-group-flush">
                <a href="#" data-id="filter-all" className="list-group-item list-group-item-action active">All</a>
                <a href="#" data-id="filter-important" className="list-group-item list-group-item-action">Important</a>
                <a href="#" data-id="filter-today" className="list-group-item list-group-item-action">Today</a>
                <a href="#" data-id="filter-week" className="list-group-item list-group-item-action">Next 7 Days</a>
                <a href="#" data-id="filter-private" className="list-group-item list-group-item-action">Private</a>
                <a href="#" data-id="filter-shared" className="list-group-item list-group-item-action">Shared</a>
            </div>

            <div className="my-5">
                <h6 className="border-bottom border-gray p-3 mb-0">Projects</h6>

                <div className="list-group list-group-flush" id="projects">
                    {projects.map(createProject)}
                </div>
            </div>
        </div>
    );
}

export default Filters;