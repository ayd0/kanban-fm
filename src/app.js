import createStore from "./store";

// @ts-ignore
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import NewBoard from "./components/NewBoard";

export default function App() {
    const state = createStore();

    return (
        <div id="main">
            <Sidebar
                state={{
                    showNewBoard: state.newBoard.showNewBoard,
                    sidebar: state.sidebar,
                }}
            />
            <Topbar
                state={{
                    selectedBoard: state.sidebar.selectedBoard,
                    boards: state.sidebar.boards,
                }}
            />
            <NewBoard state={state.newBoard} />
        </div>
    );
}
