import createStore from "./store";

// @ts-ignore
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Kanban from "./components/Kanban";
import Task from "./components/Task";
import NewTask from "./components/NewTask";
import NewBoard from "./components/NewBoard";
import EditBoard from "./components/EditBoard";

export default function App() {
    // global state
    const state = createStore();

    return (
        <div id="main">
            <Sidebar
                state={{
                    sidebar: state.sidebar,
                    kanban: state.kanban,
                    showNewBoard: state.newBoard.showNewBoard,
                    newTask: {
                        showNewTask: state.newTask.showNewTask,
                        selectedTaskStatus: state.newTask.selectedTaskStatus,
                    },
                }}
            />
            <div id="content-container">
                <Topbar
                    state={{
                        sidebar: {
                            showSidebar: state.sidebar.showSidebar,
                            themeDark: state.sidebar.themeDark,
                        },
                        kanban: {
                            selectedKanban: state.kanban.selectedKanban,
                            kanbanLists: state.kanban.kanbanLists,
                        },
                        showNewTask: state.newTask.showNewTask,
                    }}
                />
                <Kanban
                    state={{
                        kanban: state.kanban,
                        newTask: {
                            showNewTask: state.newTask.showNewTask,
                            selectedTaskStatus:
                                state.newTask.selectedTaskStatus,
                        },
                        task: {
                            showTask: state.task.showTask,
                            selectedTaskName: state.task.selectedTaskName,
                            selectedTaskSubtasks:
                                state.task.selectedTaskSubtasks,
                            selectedTaskDescription:
                                state.task.selectedTaskDescription,
                        },
                        showEditBoard: state.editBoard.showEditBoard,
                    }}
                />
            </div>
            {/* MODAL CONTAINERS */}
            <Task
                state={{
                    task: state.task,
                    selectedTaskStatus: state.newTask.selectedTaskStatus,
                    kanban: {
                        kanbanLists: state.kanban.kanbanLists,
                        selectedKanban: state.kanban.selectedKanban,
                    },
                }}
            />
            <NewTask
                state={{
                    newTask: state.newTask,
                    kanban: {
                        kanbanLists: state.kanban.kanbanLists,
                        selectedKanban: state.kanban.selectedKanban,
                    },
                }}
            />
            <NewBoard
                state={{
                    newBoard: state.newBoard,
                    createBoard: state.kanban.createBoard,
                }}
            />
            <EditBoard
                state={{
                    editBoard: state.editBoard,
                    kanban: {
                        kanbanLists: state.kanban.kanbanLists,
                        selectedKanban: state.kanban.selectedKanban,
                    },
                }}
            />
        </div>
    );
}
