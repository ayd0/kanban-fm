import createStore from "./store";
import { useComputed } from "@preact/signals";

// @ts-ignore
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Kanban from "./components/Kanban";
import Task from "./components/Task";
import NewBoard from "./components/NewBoard";
import NewTask from "./components/NewTask";

export default function App() {
    // global state
    const state = createStore();

    return (
        <div id="main">
            <Sidebar
                state={{
                    showNewBoard: state.newBoard.showNewBoard,
                    showNewTask: state.newTask.showNewTask,
                    sidebar: state.sidebar,
                }}
            />
            <div id="content-container">
                <Topbar
                    state={{
                        showSidebar: state.sidebar.showSidebar,
                        themeDark: state.sidebar.themeDark,
                        showNewTask: state.newTask.showNewTask,
                        selectedBoard: state.sidebar.selectedBoard,
                        boards: state.sidebar.boards,
                    }}
                />
                <Kanban />
            </div>
            {/* MODAL CONTAINERS */}
            <Task
                state={{
                    task: state.task,
                }}
            />
            <NewBoard
                state={{
                    newBoard: state.newBoard,
                    createBoard: state.sidebar.createBoard,
                }}
            />
            <NewTask
                state={{
                    newTask: state.newTask,
                }}
            />
        </div>
    );
}
