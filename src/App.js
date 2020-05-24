import React from 'react';
import './App.css';
import Navbar from "./js/Navbar";
import moment from 'moment';


//'Fake' array of tasks (not implementing REST APIs yet)
const tasks = [
    {
        'id': 1,
        'description': 'Complete Lab 7',
        'important': true,
        'privateTask': true,
        'deadline': moment('2020-05-30T11:00:00'),
        'project': 'WebApp I',
        'completed': true
    },
    {
        'id': 2,
        'description': 'Watch Mr. Robot',
        'important': false,
        'privateTask': true,
        'deadline': moment('2020-05-31T18:59:00'),
        'project': 'Personal',
        'completed': false
    },
    {
        'id': 3,
        'description': 'Go for a walk',
        'important': true,
        'privateTask': false,
        'deadline': moment('2020-04-28T08:00:00'),
        'project': 'Personal',
        'completed': false
    }];


//main component of the WebApp taking the list of tasks and rendering all the sub-components
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks: tasks};
    }

    getProjects() {
        return [...new Set(this.state.tasks.map((t) => t.project))]
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row vheight">
                        <aside className="collapse d-sm-block col-sm-4 col-12 bg-light below" id="left-sidebar">
                            <Filters projects={this.getProjects()}/>
                        </aside>
                        <main className="col-sm-8 col-12 below">
                            <TaskList tasks={this.state.tasks}/>
                            <button type="button" id="addButton" className="btn btn-dark fixed-right-bottom">+</button>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
