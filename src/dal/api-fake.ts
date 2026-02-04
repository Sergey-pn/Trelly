// 🔶 Mock данные для получения одной таски (getTask)
const task = [
    {
        data: {
            id: "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
            type: "tasks",
            attributes: {
                id: "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
                title: "learn useEffect",
                order: -1,
                deadline: "2029-12-27T17:51:48.031Z",
                startDate: "2025-09-09T17:51:48.031Z",
                addedAt: "2025-09-09T08:30:59.034Z",
                priority: 3,
                status: 2,
                updatedAt: "2025-09-19T14:24:20.399Z",
                boardId: "13923117-72de-4788-a7f0-4c42f162a5ab",
                boardTitle: "hfgh",
                description:
                    "useEffect is a React Hook that lets you synchronize a component with an external system.",
                attachments: [],
            },
        },
    },
    {
        data: {
            id: "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
            type: "tasks",
            attributes: {
                id: "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
                title: "html",
                order: -4,
                deadline: "2025-06-26T11:40:34.962Z",
                startDate: null,
                addedAt: "2025-08-27T17:51:48.031Z",
                priority: 1,
                status: 0,
                updatedAt: "2025-08-27T17:51:52.473Z",
                boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
                boardTitle: "newt1",
                description: '',
                attachments: [],
            },
        },
    },
    {
        data: {
            id: "b6213cee-b407-4580-9276-be4f5919375d",
            type: "tasks",
            attributes: {
                id: "b6213cee-b407-4580-9276-be4f5919375d",
                title: "css",
                order: -3,
                deadline: null,
                startDate: null,
                addedAt: "2025-08-27T17:51:44.710Z",
                priority: 1,
                status: 0,
                updatedAt: "2025-08-27T17:51:44.710Z",
                boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
                boardTitle: "newt1",
                description: null,
                attachments: [],
            },
        },
    },
    {
        data: {
            id: "4c37b109-d930-4ad4-9e37-4f94d618b59a",
            type: "tasks",
            attributes: {
                id: "4c37b109-d930-4ad4-9e37-4f94d618b59a",
                title: "js",
                order: -2,
                deadline: null,
                startDate: null,
                addedAt: "2025-08-27T17:51:21.515Z",
                priority: 1,
                status: 0,
                updatedAt: "2025-08-27T17:51:21.515Z",
                boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
                boardTitle: "newt1",
                description: null,
                attachments: [],
            },
        },
    },
    {
        data: {
            id: "0319fde0-3e69-4240-9ee4-278ce525f7f6",
            type: "tasks",
            attributes: {
                id: "0319fde0-3e69-4240-9ee4-278ce525f7f6",
                title: "title3",
                order: -1,
                deadline: "2012-12-12T00:00:00.000Z",
                startDate: null,
                addedAt: "2025-07-03T14:56:48.867Z",
                priority: 0,
                status: 0,
                updatedAt: "2025-07-03T15:03:59.563Z",
                boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
                boardTitle: "newt1",
                description: "description3",
                attachments: [],
            },
        },
    },
]

// 🔶 Mock данные для получения множества тасок (getTasks)
const tasks = {
    data: [
        {
            id: "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
            type: "tasks",
            attributes: {
                id: "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
                title: "learn useEffect",
                boardId: "13923117-72de-4788-a7f0-4c42f162a5ab",
                status: 2,
                priority: 3,
                addedAt: "2025-09-09T08:30:59.034Z",
                attachmentsCount: 0,
            },
        },
        {
            id: "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
            type: "tasks",
            attributes: {
                id: "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
                title: "html",
                boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
                status: 0,
                priority: 1,
                addedAt: "2025-08-27T17:51:48.031Z",
                attachmentsCount: 0,
            },
        },
        {
            id: "b6213cee-b407-4580-9276-be4f5919375d",
            type: "tasks",
            attributes: {
                id: "b6213cee-b407-4580-9276-be4f5919375d",
                title: "css",
                boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
                status: 0,
                priority: 1,
                addedAt: "2025-08-27T17:51:44.710Z",
                attachmentsCount: 0,
            },
        },
        {
            id: "4c37b109-d930-4ad4-9e37-4f94d618b59a",
            type: "tasks",
            attributes: {
                id: "4c37b109-d930-4ad4-9e37-4f94d618b59a",
                title: "js",
                boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
                status: 0,
                priority: 1,
                addedAt: "2025-08-27T17:51:21.515Z",
                attachmentsCount: 0,
            },
        },
        {
            id: "0319fde0-3e69-4240-9ee4-278ce525f7f6",
            type: "tasks",
            attributes: {
                id: "0319fde0-3e69-4240-9ee4-278ce525f7f6",
                title: "title3",
                boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
                status: 0,
                priority: 0,
                addedAt: "2025-07-03T14:56:48.867Z",
                attachmentsCount: 0,
            },
        },
    ],
    meta: {
        page: 1,
        pageSize: 1,
        totalCount: 1,
        pageCount: 1,
    }
}

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
    attachments: Array<string | null>
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
    const promise: Promise<GetTaskOutput> = Promise.resolve(task.find(
        t => t.data.id === selectedTaskId && t.data.attributes.boardId === boardId)
    )

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
    const promise: Promise<GlobalTaskListResponse> = Promise.resolve(tasks)

    return promise
}
