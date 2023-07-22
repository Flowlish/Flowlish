import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "../profileSlice/profile";
import { Task } from "../taskSlice/tasks";




interface Workspace {
    id: string
    owner: Pick<Profile, "userId">
    members: Profile[],
    tasks: Task[]
}


const initialState: Workspace[] = [
    {
        id: "b1u23kjrj90fn",
        owner: {
            userId: ""
        },
        members: [
            {
                id: "1",
                username: "Mock name",
                userId: "oxofklkspf1o123po",
                avatarURL: "url",
                email: "mockemail@gmail.com"
            }
        ],
        tasks: [
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
    }
]


const workspaces = createSlice({
    name: "workspaces",
    initialState,
    reducers: {}
})

export const {} = workspaces.actions

export const workspaceSelector = (state: {workspaces: Workspace[]}) => state.workspaces


export default workspaces.reducer