import {TaskItem} from "./TaskItem.tsx";
import {useTasks} from "../bll/useTasks.ts";

type Props = {
    selectedTaskId: string | null
    onTaskSelect: (selectTaskId: string | null, boardId: string | null) => void
}

export function TaskList({selectedTaskId, onTaskSelect}: Props) {
    const {tasks} = useTasks()

    if (tasks === null) return <h1>Загрузка...</h1>
    if (tasks.length === 0) return <h1>Задачи отсутствуют...</h1>
    // if (tasks.length === 1) return <h1>{tasks[0].message}</h1>

    const handleTaskSelect = (selectTaskId: string | null, boardId: string | null) => {
        onTaskSelect(selectTaskId, boardId)
    }
    // const handleReset = () => {
    //     onTaskSelect(null, null)
    // }

    return <div>
        <button onClick={() => handleTaskSelect(null, null)}>reset</button>
        <hr/>

        {tasks.map((task) => {
            return <TaskItem
                key={task.id}
                task={task}
                isSelected={task.id === selectedTaskId}
                onTaskSelect={handleTaskSelect}
            />
        })}
    </div>
}