type TaskDetailsDto = {
    id: string
    title: string | null
    description: string | null
    boardId: string
    boardTitle: string
    order: number
    status: number
    priority: number
    startDate: string | null
    deadline: string | null
    addedAt: string
    updatedAt: string
    attachments: Array<string>
}
export type TaskDetailsData = {
    id: string
    type: string
    attributes: TaskDetailsDto
}
type GetTaskOutput = {
    data: TaskDetailsData
}

export const getTask = (boardId: string, selectedTaskId: string) => {
    const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`,
        {headers: {'api-key': '8938698d-07ee-4245-89d9-d7c94661abf9'}})
        .then(res => res.json())

    return promise
}

type GlobalTaskListItemDto = {
    id: string
    title: string | null
    boardId: string
    status: number
    priority: number
    addedAt: string
    attachmentsCount: number
}
export type GlobalTaskListItemJsonApiData = {
    id: string
    type: string
    attributes: GlobalTaskListItemDto
    message: string
}
type JsonApiMeta = {
    page: number
    pageSize: number
    totalCount: number
    pageCount: number
}
type GlobalTaskListResponse = {
    data: Array<GlobalTaskListItemJsonApiData>
    meta: JsonApiMeta
}

export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks',
        {headers: {'api-key': '8938698d-07ee-4245-89d9-d7c94661abf9'}})
        .then(res => res.json())

    return promise
}