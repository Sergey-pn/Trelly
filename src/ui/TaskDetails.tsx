import {useTaskDetails} from "../bll/useTaskDetails.ts";
import styles from './TaskDetails.module.css'

type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export function TaskDetails({selectedTaskId, boardId}: Props) {
    const {taskDetails} = useTaskDetails(selectedTaskId, boardId)

    return <div className={styles.task}>

        <h2>Task details</h2>

        {!selectedTaskId && !taskDetails && 'Task is not selected'}
        {selectedTaskId && (!taskDetails || selectedTaskId !== taskDetails.id) && 'Loading...'}
        {selectedTaskId && taskDetails && selectedTaskId === taskDetails.id && (<ul>
            <li>title - {taskDetails.attributes.title}</li>
            <li>boardTitle - {taskDetails.attributes.boardTitle}</li>
            <li>description - {taskDetails.attributes.description || 'no description'}</li>
        </ul>)}
    </div>
}