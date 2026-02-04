import type {GlobalTaskListItemJsonApiData} from "../dal/api.ts"
import stiles from './TaskItem.module.css'
import clsx from "clsx"


type Props = {
    isSelected: boolean
    onTaskSelect: (taskId: string, boardId: string) => void
    task: GlobalTaskListItemJsonApiData
}

export function TaskItem({task, isSelected, onTaskSelect}: Props) {
    const handleClick = () => {
        onTaskSelect(task.id, task.attributes.boardId)
    }

    // Styles
    // const taskClassName = stiles.task + ' ' + stiles.default +
    //     (task.attributes.priority >= 2 ? ' ' + stiles.highPriority: '') +
    //     (isSelected ? ' ' + stiles.selected: '')
    // const titleClassName = task.attributes.status === 2 ? stiles.title : ''

    // Styles clsx
    const taskClassName = clsx({
        [stiles.task]: true,
        [stiles.default]: !isSelected,
        [stiles.selected]: isSelected,
        [stiles.highPriority]: task.attributes.priority >= 2
    })
    const titleClassName = clsx({
        [stiles.title]: task.attributes.status === 2
    })

    return <div className={taskClassName} onClick={handleClick}>

        <p>
            <b>Заголовок: </b>
            <span className={titleClassName}>{task.attributes.title}</span>
        </p>

        <p>
            <b>Статус: </b>
            <input type={'checkbox'} defaultChecked={task.attributes.status === 2}/>
        </p>

        <p>
            <b>Дата создания задачи: </b>
            {new Date(task.attributes.addedAt).toLocaleDateString()}
        </p>
    </div>
}