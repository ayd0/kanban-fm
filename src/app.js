import createStore from "./store";
import { useComputed } from "@preact/signals";

// @ts-ignore
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Kanban from "./components/Kanban";
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
                    sidebar: state.sidebar,
                }}
            />
            <div id="content-container">
                <Topbar
                    state={{
                        showSidebar: state.sidebar.showSidebar,
                        selectedBoard: state.sidebar.selectedBoard,
                        boards: state.sidebar.boards,
                    }}
                />
                <Kanban />
            </div>
            <NewBoard state={{
                newBoard: state.newBoard,
                createBoard: state.sidebar.createBoard
                }} />
            <NewTask />
        </div>
    );
}
