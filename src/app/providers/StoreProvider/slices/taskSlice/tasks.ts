import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "../profileSlice/profile";

type Status = "progress" | "done" | "stale"
type Priority = "high" | "low" | "urgent" | "normal"
type Type = "feature" | "hot fix" | "enhancement"

export interface Task {
    id: string
    workspaceId: string
    title: string
    status: Status
    description: string
    priority: Priority
    type: Type
    assignees: Pick<Profile, "userId">[],
    creator: Pick<Profile, "userId">,
    assignedBy: Pick<Profile, "userId">,
}


const initialState: Task[] = [
    {
        id: "1",
        workspaceId: "b1u23kjrj90fn",
        status: "progress",
        title: "XLS file export/read/import",
        description: "Create functionality for xls files",
        priority: 'normal',
        type: "feature",
        assignees: [
            {
                userId: "oxofklkspf1o123po",
            }
        ],
        creator: {
            userId: "oxofklkspf1o123po",
        },
        assignedBy: {
            userId: "oxofklkspf1o123po",
        }
    }
]



const tasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        add: () => {

        },
        remove: () => {

        },
        filter: () => {

        }
    }
})

export const {add, remove, filter} = tasks.actions

export const taskSelector = (state: {tasks: Task[]}) => state.tasks

export default tasks.reducer