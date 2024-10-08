import React from 'react';
import TaskComponent from '../pure/task.jsx';
import { Task } from '../../models/task_classe.js'
import { Levels } from '../../models/levels';



const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default description',true,Levels.NORMAL);

    const changeState = (id)=>{
        console.log('todo: cambiar estado de una tarea'); 
    }

    return (
        <div>
            <div>
                sus tareas: 
            </div>
            {/* TODO Aplicar un For/Map para renderizar una lista */}
           <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
