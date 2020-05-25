import React from "react";
import moment from "moment";

const TaskItem = (props) => {

    let {task} = props
    return (
        <li className="list-group-item" id={task.id}>
            <div className="d-flex w-100 justify-content-between">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" id={"check-t" + task.id} className={task.important ? "custom-control-input" : "custom-control-input important"} defaultChecked={task.completed}/>
                    <label className="custom-control-label" htmlFor={"check-t" +  task.id}>{task.description}</label>
                    <span className="project badge badge-dark ml-4">{task.project}</span>
                </div>
                {!task.privateTask && (
                <img src="https://image.flaticon.com/icons/svg/615/615075.svg" width="20" height="20" alt=""/>
                )}
                {task.deadline &&  (
                    <small className = {task.deadline.isBefore(moment()) ? "date bg-danger text-white" : "date"}>{task.deadline.format("dddd, MMMM Do YYYY, h:mm:ss a")} </small>
                )}

                <div>
                    <img width="20" height="20" className="img-button" src="https://image.flaticon.com/icons/svg/1159/1159633.svg" alt =""/>
                    <img width="20" height="20" className="img-button" src="https://image.flaticon.com/icons/svg/833/833262.svg" alt =""/>
                </div>
            </div>
        </li>
    );
}

export default TaskItem;