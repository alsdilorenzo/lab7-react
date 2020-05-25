import React from "react";
import TaskItem from "./TaskItem";

function createTask (task) {
    return (
        <TaskItem key={task.id} task={task}/>
    );
}

const TaskList = (props) => {

    let {tasks} = props;

    return (
        <div>
            {tasks &&
                <ul className="list-group list-group-flush">
                    {tasks.map(createTask)}
                </ul>
            }
        </div>
    );
}

export default TaskList;