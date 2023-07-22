import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {taskReducer, profileReducer, workspaceReducer} from '../slices'


const rootReducer = combineReducers({
    tasks: taskReducer,
    profile: profileReducer,
    workspaces: workspaceReducer,
})


export const store = configureStore({
    reducer: rootReducer
})