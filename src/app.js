import createStore from "./store";

// @ts-ignore
import Sidebar from "./components/Sidebar";
import NewBoard from "./components/NewBoard";

export default function App() {
    const state = createStore();

    return (
        <div id="main">
            <Sidebar state={{showNewBoard: state.newBoard.showNewBoard}} />
            <NewBoard state={state.newBoard} />
        </div>
    );
}
