import createStore from "./store";
import { useComputed } from "@preact/signals";

// @ts-ignore
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import NewBoard from "./components/NewBoard";
import Kanban from "./components/Kanban";

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
            <NewBoard state={state.newBoard} />
        </div>
    );
}
