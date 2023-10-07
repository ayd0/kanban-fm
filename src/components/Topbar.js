export default function Topbar({ state }) {
    const { showSidebar, themeDark } = state.sidebar;
    const { selectedKanban, kanbanLists } = state.kanban;
    const showNewTask = state.showNewTask;

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
            <img src="./assets/icons/icon-vertical-ellipsis.svg" />
        </div>
    );
}
