import {TaskDetails} from "./ui/TaskDetails.tsx";
import {TaskList} from "./ui/TaskList.tsx";
import {useTaskSelection} from "./bll/useTaskSelection.ts";
import styles from './MainPage.module.css'

export function MainPage() {
    const {selectedTaskId, setSelectedTaskId, boardId, setBoardId} = useTaskSelection()

    const handleTaskSelect = (selectedTaskId: string | null, boardId: string | null) => {
        setSelectedTaskId(selectedTaskId)
        setBoardId(boardId)
    }

    return <div className={styles.container}>
        <TaskList
            selectedTaskId={selectedTaskId}
            onTaskSelect={handleTaskSelect}
        />
        <TaskDetails
            selectedTaskId={selectedTaskId}
            boardId={boardId}
        />
    </div>
}