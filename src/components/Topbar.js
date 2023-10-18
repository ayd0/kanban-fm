import { useSignal } from "@preact/signals";
import { checkClientBounds } from "./utils";

export default function Topbar({ state }) {
    // global state
    const { showSidebar, themeDark } = state.sidebar;
    const { selectedKanban, kanbanLists } = state.kanban;
    const showNewTask = state.showNewTask;
    const showBoardSettings = state.showBoardSettings;

    return (
        <div id="topbar-container">
            <div
                id="logo-divider"
                style={`display: ${showSidebar.value ? "none" : "flex"}`}
            >
                <img
                    src={`./assets/icons/logo-${
                        themeDark.value ? "light" : "dark"
                    }.svg`}
                />
            </div>
            <h1>{kanbanLists.value[selectedKanban.value].name.value}</h1>
            <button onClick={() => (showNewTask.value = true)}>
                <img src="./assets/icons/icon-add-task-mobile.svg" />
                Add New Task
            </button>
            <img src="./assets/icons/icon-vertical-ellipsis.svg" onClick={() => showBoardSettings.value = !showBoardSettings.value} />
        </div>
    );
}
