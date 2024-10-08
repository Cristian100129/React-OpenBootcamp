import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task_classe'

// las funciones hijas el nombre debe empezar en mayusculas
function TaskComponent({task}) {
  return (
    <div>
    <h2>
        Nombre: { task.name }
    </h2>
    <h3>
        descripcion: { task.description }
    </h3>
    <h4>
        level: { task.level }
    </h4>
    <h5>
        esta tarea esta: { task.completed ? 'COMPLETED': 'PENDING' }
    </h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;

